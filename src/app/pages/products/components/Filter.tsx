"use client";
import React, { useState } from "react";
import { Select, Slider } from "antd";

const Filter = () => {
  const [minval, setMinVal] = useState(5000000);
  const [maxval, setMaxVal] = useState(30000000);
  const handleChange = (value: number[]) => {
    if (value[0] < value[1]) {
      setMinVal(value[0]);
      setMaxVal(value[1]);
    } else {
      setMinVal(value[1]);
      setMaxVal(value[0]);
    }
  };
  const formatter = (value: number) => {
    return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <div className="flex flex-col py-4 justify-center gap-4 rounded-lg px-2">
      <h1 className="text-xl font-semibold">Bo loc tim kiem</h1>
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
      <div className="flex flex-col gap-2">
        <h3 className="text-md">Gia</h3>
        <div className="text-sm">
          {formatter(minval)} - {formatter(maxval)}
        </div>
        <Slider
          range
          tooltip={{
            formatter: null,
            // autoAdjustOverflow: false,
            // open: true,
            // placement: "top",
            // formatter(value) {
            //   return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            // },
          }}
          onChange={handleChange}
          max={100000000}
          step={5000000}
          defaultValue={[minval, maxval]}
        />
      </div>
      <button className="bg-sky-500 text-white text-lg w-1/2 self-center rounded-lg p-2">
        Tim kiem
      </button>
    </div>
  );
};

export default Filter;
