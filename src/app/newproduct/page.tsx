"use client";
import UploadImageBtn from "@/components/UploadImageBtn";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, notification, Select } from "antd";
import { db, storage } from "@/firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { NavbarLayer, TSelectData } from "@/asset/NavbarLayer";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import InfoChunk from "@/components/InfoChunk";
import { TNote } from "@/app/products/product";

export default function Page() {
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [api, contextHolder] = notification.useNotification();
  const [note, setNote] = useState<TNote[]>([{ noteName: "", noteDescription: "" }]);
  const [type, setType] = useState<string>("");
  const [type2, setType2] = useState<string>("");
  const [subData, setSubData] = useState<TSelectData[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (value: string) => {
    setType(value);
    const findData = NavbarLayer.find((item) => item.value === value);
    setSubData(findData?.children);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (imageUpload == null) {
      api.error({ message: "Error", description: "Chưa thêm hình ảnh" });
      return;
    }

    setIsLoading(true);
    try {
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);

      const formData = new FormData(event.target as HTMLFormElement);
      const productData = {
        name: formData.get("name"),
        description: formData.get("description"),
        type,
        subtype: type2,
        image: url,
        information: note,
      };

      await addDoc(collection(db, "users"), productData);
      api.success({ message: "Success", description: "Thêm sản phẩm mới thành công" });
    } catch (error) {
      console.error("Error adding document: ", error);
      api.error({ message: "Error", description: "Fail to add product" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-20 min-h-screen flex justify-center">
      {contextHolder}
      <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-3">
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
            allowClear
            className="w-full h-10"
            placeholder="Các loại cân"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={NavbarLayer}
            onChange={handleChange}
          />
        </div>
        {subData && subData.length > 0 && (
          <div className="flex flex-col gap-1">
            <h3 className="text-lg">Chi tiết</h3>
            <Select
              showSearch
              allowClear
              className="w-full h-10"
              placeholder="Các loại cân"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={subData}
              onChange={setType2}
            />
          </div>
        )}
        <div>
          <label htmlFor="description" className="text-lg">
            Mô tả
          </label>
          <textarea
            name="description"
            required
            placeholder="Mô tả"
            className="border p-2 w-full h-52 rounded-md"
          />
        </div>
        <div className="flex flex-row gap-2">
          <button
            type="button"
            className="bg-neutral-800 p-2 rounded-lg text-white"
            onClick={() => setNote((prev) => [...prev, { noteName: "", noteDescription: "" }])}
          >
            Thêm thông số kỹ thuật
          </button>
        </div>
        {note.map((item, index) => (
          <InfoChunk key={index} index={index} item={item} setNote={setNote} />
        ))}
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
