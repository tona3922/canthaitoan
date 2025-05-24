"use client";
import UploadImageBtn from "@/components/UploadImageBtn";
import React, { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { NavbarLayer, TSelectData } from "@/asset/NavbarLayer";
import { notification, Select } from "antd";
import InfoChunk from "../edit/[id]/InfoChunk";
import { TNote } from "../newproduct/page";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/firebase";
import { v4 } from "uuid";
export default function Page() {
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [api, contextHolder] = notification.useNotification();
  const data = NavbarLayer;
  const [note, setNote] = useState<TNote[]>([
    { noteName: "", noteDescription: "" },
  ]);
  const [type, setType] = useState<string>("");
  const [type2, setType2] = useState<string>("");
  const [subData, setSubData] = useState<TSelectData[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, "users"),
          where("type", "==", "can ky thuat")
        );
        const querySnapshot = await getDocs(q);
        // const querySnapshot = await getDocs(collection(db, "users"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("data: ", data);
      } catch (error) {
        console.error("Error fetching Firestore data:", error);
      }
    };

    fetchData();
  }, []);
  const handleChange = (value: string) => {
    setType(value);
    const findData = NavbarLayer.find((item) => item.value === value);
    if (findData) {
      setSubData(findData.children);
    }
  };
  const handleChangeSub = (value: string) => {
    setType2(value);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (imageUpload == null) return;
    setIsLoading(true);
    try {
      // Upload image
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);

      // Prepare form data
      const formData = new FormData(event.target);
      const data = {
        name: formData.get("name"),
        description: formData.get("description"),
        type: type,
        subtype: type2 ?? "",
        image: url, // ✅ Now correct
        information: note,
      };

      console.log("Final data:", data);

      await addDoc(collection(db, "users"), data); // you don't need `{ data }` unless you're nesting
      successNotification();
    } catch (error) {
      console.error("Error adding document: ", error);
      errorNotification("Fail to add product");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    setNote([...note, { noteName: "", noteDescription: "" }]);
  };
  const successNotification = () => {
    api["success"]({
      message: "Success",
      description: "Thêm sản phẩm mới thành công",
    });
  };
  const errorNotification = (msg: string) => {
    api["error"]({
      message: "Error",
      description: msg,
    });
  };
  return (
    <div className="py-20 min-h-screen flex justify-center">
      {contextHolder}
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-1/2 flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-lg">
            Tên cân
          </label>
          <input
            type="text"
            placeholder="Nhập tên cân"
            className="border outline-none p-2 text-md rounded-lg"
            name="name"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg">Phân loại</h3>
          <Select
            showSearch
            allowClear={true}
            className="w-full h-10"
            placeholder="Các loại cân"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={data}
            onChange={handleChange}
          />
        </div>
        {subData !== undefined && subData.length > 0 && (
          <div className="flex flex-col gap-1">
            <h3 className="text-lg">Chi tiết</h3>
            <Select
              showSearch
              allowClear={true}
              className="w-full h-10"
              placeholder="Các loại cân"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={subData}
              onChange={handleChangeSub}
            />
          </div>
        )}
        <div>
          <label htmlFor="description" className="text-lg">
            Mô tả
          </label>
          <textarea
            name="description"
            id=""
            required
            placeholder="Mô tả"
            className="border p-2 w-full h-52 rounded-md"
          ></textarea>
        </div>
        <div className="flex flex-row gap-2">
          <button
            type="button"
            className="bg-gray-400 p-2 rounded-lg text-white"
            onClick={handleClick}
          >
            Thêm thông số kỹ thuật
          </button>
        </div>
        {note.map((item, index) => {
          return (
            <InfoChunk
              index={index}
              item={item}
              setNote={setNote}
              key={index}
            />
          );
        })}
        <UploadImageBtn setImageUpload={setImageUpload} />
        <button
          className="bg-sky-600 text-white w-1/3 self-center text-lg rounded-md p-2 font-medium"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Đang cập nhật sản phẩm" : "Thêm sản phẩm"}
        </button>
      </form>
    </div>
  );
}
