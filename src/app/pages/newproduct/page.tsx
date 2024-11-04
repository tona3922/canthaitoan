"use client";
import React, { useState } from "react";
import { ImageKitProvider, IKUpload, IKImage } from "imagekitio-next";
import { Select } from "antd";
import { NavbarLayer, TSelectData } from "@/asset/NavbarLayer";
import { authenticator } from "./hooks/useAuthentication";
import { error } from "console";
const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4xMjMiLCJlbWFpbCI6InZvdGhhaXRvYW4xMkBnbWFpbC5jb20iLCJpZCI6IjY3MjUxMmNmZWFjM2ZiYzNiMzA2YTVlMSJ9LCJpYXQiOjE3MzA3MzY3MjEsImV4cCI6MTczMDgyMzEyMX0.HgcWhAqP8G-5sIIwIeA550ACD3CQ-QGvxOiK3ht0eys";
const Home = () => {
  const data = NavbarLayer;
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
    };
    console.log(data);
    try {
      const response = await fetch(
        // `${process.env.NEXT_PUBLIC_BACKEND}/product/newproduct`,
        "http://localhost:3001/product/newproduct",
        {
          method: "POST",
          body: JSON.stringify(data),
          // credentials: "include",
          // mode: "no-cors",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            // Accept: "application/json",
            // Origin: "http://localhost:3001",
          },
        }
      );

      if (response.ok) {
        console.log(response);
        // Handle success
      } else {
        console.log(response);
        throw new Error("Failed post data");
        // Handle error
      }
    } catch (error) {
      throw new Error("Failed post data");
      // Handle error
    }
  };

  return (
    <div className="py-20 px-4 h-screen">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tên cân</label>
          <input type="text" className="border" name="name" required />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-md">Phân loại</h3>
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
            <h3 className="text-md">Chi tiết</h3>
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
          <label htmlFor="description">Mô tả</label>
          <input type="text" className="border" name="description" required />
        </div>
        <div>
          <ImageKitProvider
            publicKey={publicKey}
            urlEndpoint={urlEndpoint}
            authenticator={authenticator}
          >
            <div>
              <h2>File upload</h2>
              <IKUpload
                fileName="test-upload.png"
                onError={onError}
                onSuccess={onSuccess}
              />
            </div>
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
        <button type="submit">Thêm sản phẩm</button>
      </form>
    </div>
  );
};

export default Home;
