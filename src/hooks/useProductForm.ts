import { useState } from "react";
import { NavbarLayer, TSelectData } from "@/asset/NavbarLayer";
import { TNote } from "@/app/products/product";

export function useProductForm() {
  const [type, setType] = useState<string>("");
  const [type2, setType2] = useState<string>("");
  const [subData, setSubData] = useState<TSelectData[] | undefined>([]);
  const [note, setNote] = useState<TNote[]>([{ noteName: "", noteDescription: "" }]);
  const [description, setDescription] = useState<string>("");

  const handleChange = (value: string) => {
    setType(value);
    const findData = NavbarLayer.find((item) => item.value === value);
    setSubData(findData?.children);
  };

  const handleChangeSub = (value: string) => {
    setType2(value);
  };

  const addNote = () => {
    setNote((prev) => [...prev, { noteName: "", noteDescription: "" }]);
  };

  return {
    type, setType,
    type2, setType2,
    subData, setSubData,
    note, setNote,
    description, setDescription,
    handleChange,
    handleChangeSub,
    addNote,
  };
}
