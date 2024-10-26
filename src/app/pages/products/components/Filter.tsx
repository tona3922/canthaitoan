"use client";
import React from "react";
import { Select } from "antd";

const Filter = () => {
  return (
    <div className="flex flex-col py-4 justify-center gap-4 rounded-lg px-2">
      <h1 className="text-xl font-semibold text-gray-600">Bo loc tim kiem</h1>
      <div className="flex flex-col gap-1">
        <h3 className="text-md">San pham can tim</h3>
        <input
          type="text"
          placeholder="Nhập tên sản phẩm"
          className="text-sm border rounded-md py-2.5 pl-2 outline-none w-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-md">Loai can</h3>
        <Select
          showSearch
          className="w-full h-10"
          placeholder="Các loại cân"
          optionFilterProp="label"
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Not Identified",
            },
            {
              value: "2",
              label: "Closed",
            },
            {
              value: "3",
              label: "Communicated",
            },
            {
              value: "4",
              label: "Identified",
            },
            {
              value: "5",
              label: "Resolved",
            },
            {
              value: "6",
              label: "Cancelled",
            },
          ]}
        />
      </div>
      <button className="bg-sky-500 text-white text-lg self-center rounded-lg p-2">
        Tim kiem
      </button>
    </div>
  );
};

export default Filter;
