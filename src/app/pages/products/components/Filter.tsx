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
import {
  collection,
  getDocs,
  or,
  query,
  QueryConstraint,
  where,
} from "firebase/firestore";
import { db } from "@/firebase/firebase";

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
    setSubType("");
  };
  const handleChangeSub = (value: string) => {
    setSubType(value);
  };
  const handleSubmit = async () => {
    const paramsObj = {
      type: type ?? "",
      subtype: subType ?? "",
      name: inp ?? "",
    };
    try {
      const conditions: QueryConstraint[] = [];

      // If you want to do a prefix match on `type` with `name`
      if (paramsObj.name) {
        conditions.push(
          where("type", ">=", paramsObj.name),
          where("type", "<=", paramsObj.name + "~")
        );
      }

      if (paramsObj.type) {
        conditions.push(where("type", "==", paramsObj.type));
      }

      if (paramsObj.subtype) {
        conditions.push(where("subtype", "==", paramsObj.subtype));
      }
      // Build the query dynamically
      const q = query(collection(db, "users"), ...conditions);

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFetchData(data);
      setShowData(data.slice(0, 10));
      // // Handle success
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
