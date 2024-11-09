"use client";
import React, { useEffect, useState } from "react";
import { ImageKitProvider, IKUpload, IKImage } from "imagekitio-next";
import { notification, Select } from "antd";
import { NavbarLayer, TSelectData } from "@/asset/NavbarLayer";
import { authenticator } from "./hooks/useAuthentication";
const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT;
let token = "";

if (typeof window !== "undefined") {
  token = window.localStorage.getItem("accessToken") ?? "";
}
type TNote = {
  noteName: string;
  noteDescription: string;
};
export default function Page() {
  const [api, contextHolder] = notification.useNotification();
  const data = NavbarLayer;
  const [note, setNote] = useState<TNote[]>([
    { noteName: "", noteDescription: "" },
  ]);
  const [counter, setCounter] = useState(1);
  const [type, setType] = useState<string>("");
  const [type2, setType2] = useState<string>("");
  const [subData, setSubData] = useState<TSelectData[] | undefined>([]);
  const [result, setResult] = useState<any>();

  const handleChange = (value: string) => {
    setType(value);
    const findData = NavbarLayer.find((item) => item.label === value);
    if (findData) {
      setSubData(findData.children);
    }
  };
  const handleChangeSub = (value: string) => {
    setType2(value);
  };
  const onError = (err: any) => {
    console.log("Error in upload image");
  };
  const onSuccess = (res: any) => {
    console.log(res);
    setResult(res);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      type: type,
      subtype: type2 ?? "",
      image: result.url,
      information: note,
    };
    console.log(data);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND}/product/newproduct`,
        // "http://localhost:3001/product/newproduct",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log(response);
        successNotification();
        // Handle success
      } else {
        console.log(response);
        errorNotification();
        throw new Error("Failed post data");
        // Handle error
      }
    } catch (error) {
      errorNotification();
      throw new Error("Failed post data");
      // Handle error
    }
  };

  const handleClick = () => {
    setCounter(counter + 1);
    note.push({ noteName: "", noteDescription: "" });
    setNote(note);
    console.log(counter);
  };
  const handleClickDecrease = () => {
    setCounter(counter - 1);
    note.pop();
    setNote(note);
    console.log(counter);
  };
  const successNotification = () => {
    api["success"]({
      message: "Success",
      description: "Add product successfully",
    });
  };
  const errorNotification = () => {
    api["error"]({
      message: "Error",
      description: "Some thing went wrong, please try again later",
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
          <button
            type="button"
            className="bg-red-500 p-2 rounded-lg text-white"
            onClick={handleClickDecrease}
          >
            Xóa thông số kỹ thuật
          </button>
        </div>
        {Array.from(Array(counter)).map((_, index) => {
          return (
            <div className="flex" key={index}>
              <input
                className="border h-10 px-1 outline-none"
                name="noteName"
                type="text"
                placeholder="name"
                required
                onChange={(e) => {
                  if (index < note.length) {
                    note[index].noteName = e.target.value;
                  }
                  console.log("changed : ", note);
                }}
              />
              <input
                className="border h-10 px-1 outline-none"
                name="noteDescription"
                type="text"
                placeholder="description"
                required
                onChange={(e) => {
                  if (index < note.length) {
                    note[index].noteDescription = e.target.value;
                  }
                  console.log("changed : ", note);
                }}
              />
            </div>
          );
        })}
        <div>
          <ImageKitProvider
            publicKey={publicKey}
            urlEndpoint={urlEndpoint}
            authenticator={authenticator}
          >
            <>
              <h2 className="text-lg">File upload</h2>
              <IKUpload
                fileName="test-upload.png"
                onError={onError}
                onSuccess={onSuccess}
              />
            </>
            {result && (
              <IKImage
                path={result.filePath}
                width="200"
                height="200"
                alt="Alt text"
              />
            )}
          </ImageKitProvider>
        </div>
        <button
          className="bg-sky-600 text-white w-1/3 self-center text-lg rounded-md p-2 font-medium"
          type="submit"
        >
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
}
