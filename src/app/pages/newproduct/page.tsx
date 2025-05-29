"use client";
import UploadImageBtn from "@/components/UploadImageBtn";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { db } from "@/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { NavbarLayer, TSelectData } from "@/asset/NavbarLayer";
import { notification, Select } from "antd";
import InfoChunk from "@/components/InfoChunk";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/firebase";
import { v4 } from "uuid";
export type TNote = {
  noteName: string;
  noteDescription: string;
};

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

    if (imageUpload == null) {
      errorNotification("Chưa thêm hình ảnh");
      return;
    }
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
            className="bg-neutral-800 p-2 rounded-lg text-white"
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
          className="bg-sky-600 text-white self-center text-lg rounded-md p-2 font-medium"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <p>Đang cập nhật sản phẩm</p>
              <Spin indicator={<LoadingOutlined spin />} />
            </div>
          ) : (
            "Thêm sản phẩm"
          )}
        </button>
      </form>
    </div>
  );
}
