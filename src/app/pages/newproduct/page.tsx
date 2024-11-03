"use client";
import React, { useState } from "react";
import { ImageKitProvider, IKUpload, IKImage } from "imagekitio-next";
import { Select } from "antd";
import { NavbarLayer, TSelectData } from "@/asset/NavbarLayer";
import { handleSubmit } from "./hooks/useSubmitForm";
const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT;

const authenticator = async () => {
  try {
    const response = await fetch("https://canthaitoan.vercel.app/api/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};
const Home = () => {
  const data = NavbarLayer;
  const [subData, setSubData] = useState<TSelectData[] | undefined>([]);
  const handleChange = (value: string) => {
    const findData = NavbarLayer.find((item) => item.label === value);
    if (findData) {
      setSubData(findData.children);
    }
  };
  const handleChangeSub = (value: string) => {
    console.log(value);
  };
  const [result, setResult] = useState<any>();
  const onError = (err: any) => {
    console.log("Error", err);
  };

  const onSuccess = (res: any) => {
    console.log("Success", res);
    setResult(res);
  };

  return (
    <div className="py-20 px-4 h-screen">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">title</label>
          <input type="text" className="border" name="name" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-md">Loai can</h3>
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
            <h3 className="text-md">Loai cu the</h3>
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
          <label htmlFor="">description</label>
          <input type="text" className="border" name="description" />
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
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Home;
