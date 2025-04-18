"use client";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
import { Select } from "antd";
import { NavbarLayer, TSelectData } from "@/asset/NavbarLayer";
import { useDebouncedCallback } from "use-debounce";

const Filter: React.FC<{
  setFetchData: Dispatch<SetStateAction<any>>;
  setShowData: Dispatch<SetStateAction<any>>;
}> = ({ setFetchData, setShowData }) => {
  const data = NavbarLayer;
  const [subData, setSubData] = useState<TSelectData[] | undefined>([]);
  const [type, setType] = useState<string>("");
  const [subType, setSubType] = useState<string>("");
  const [inp, setInp] = useState("");
  const handleChange = (value: string) => {
    setType(value);
    const findData = NavbarLayer.find((item) => item.value === value);
    if (findData) {
      setSubData(findData.children);
    }
  };
  const handleChangeSub = (value: string) => {
    setSubType(value);
    console.log(value);
  };
  const handleSubmit = async () => {
    const paramsObj = {
      type: type ?? "",
      subtype: subType ?? "",
      name: inp ?? "",
    };
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_BACKEND
        }/product/filter?${new URLSearchParams(paramsObj).toString()}`
      );
      if (response.ok) {
        console.log(response);
        const data = await response.json();
        // console.log(data.foundProduct);
        setFetchData(data.foundProduct);
        setShowData(data.foundProduct.slice(0, 10));
        // Handle success
      } else {
        console.log(response);
        throw new Error("Failed post data");
        // Handle error
      }
    } catch (error) {
      throw new Error("Failed post data");
    }
  };
  const debounced = useDebouncedCallback((value) => {
    setInp(value);
  }, 1000);
  return (
    <div className="flex flex-col p-4 justify-center gap-4 rounded-lg border">
      <h1 className="text-xl font-semibold text-gray-600">Bộ lọc tìm kiếm</h1>
      <div className="flex flex-col gap-1">
        <h3 className="text-md">Sản phẩm cần tìm</h3>
        <input
          type="text"
          placeholder="Nhập tên sản phẩm"
          defaultValue={inp}
          onChange={(e) => debounced(e.target.value)}
          className="text-sm border rounded-md py-2.5 pl-2 outline-none w-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-md">Loại cân</h3>
        <Select
          showSearch
          allowClear={true}
          className="w-full h-10"
          placeholder="Các loại cân"
          optionFilterProp="label"
          // filterSort={(optionA, optionB) =>
          //   (optionA?.label ?? "")
          //     .toLowerCase()
          //     .localeCompare((optionB?.label ?? "").toLowerCase())
          // }
          options={data}
          onChange={handleChange}
        />
      </div>
      {subData !== undefined && subData.length > 0 && (
        <div className="flex flex-col gap-1">
          <h3 className="text-md">Chi tiết hơn</h3>
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
      <button
        className="bg-sky-700 text-white font-medium text-lg self-center rounded-lg p-2"
        onClick={handleSubmit}
      >
        Tìm kiếm
      </button>
    </div>
  );
};

export default Filter;
