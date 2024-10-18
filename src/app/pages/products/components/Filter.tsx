"use client";
import React from "react";
import { Select, Slider } from "antd";

const Filter = () => {
  return (
    <div className="flex flex-col py-4 justify-center gap-6 rounded-lg px-4 border">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-medium">San pham can tim</h3>
        <input
          type="text"
          className="text-lg border-b py-1 outline-none w-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-medium">Loai can</h3>
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
      <div className="flex flex-col gap-10">
        <h3 className="text-lg font-medium">Gia</h3>
        <Slider
          range
          tooltip={{
            autoAdjustOverflow: false,
            open: true,
            placement: "top",
            formatter(value) {
              return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            },
          }}
          max={40000000}
          step={1000000}
          defaultValue={[1000000, 20000000]}
        />
      </div>
      <button className="bg-sky-500 text-white text-xl rounded-lg p-2">
        Tim kiem
      </button>
    </div>
  );
};

export default Filter;
