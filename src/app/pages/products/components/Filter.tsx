"use client";
import React, { useRef, useState } from "react";
import { Select } from "antd";
import { NavbarLayer, TSelectData } from "@/asset/NavbarLayer";

const Filter = () => {
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
  const handleSubmit = () => {};
  const [inp, setInp] = useState("");
  return (
    <form
      className="flex flex-col py-4 justify-center gap-4 rounded-lg px-2"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl font-semibold text-gray-600">Bo loc tim kiem</h1>
      <div className="flex flex-col gap-1">
        <h3 className="text-md">San pham can tim</h3>
        <input
          type="text"
          placeholder="Nhập tên sản phẩm"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          className="text-sm border rounded-md py-2.5 pl-2 outline-none w-full"
        />
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
      <button
        className="bg-sky-500 text-white text-lg self-center rounded-lg p-2"
        type="submit"
      >
        Tìm kiếm
      </button>
    </form>
  );
};

export default Filter;
