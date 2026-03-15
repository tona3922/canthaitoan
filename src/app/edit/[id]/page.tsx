"use client";
import { useEffect, useState } from "react";
import { TProduct } from "../../products/product";
import { NavbarLayer, TSelectData } from "@/asset/NavbarLayer";
import { notification, Select, Spin } from "antd";
import { useRouter } from "next/navigation";
import InfoChunk from "@/components/InfoChunk";
import UploadImageBtn from "@/components/UploadImageBtn";
import { TNote } from "@/app/products/product";
import { LoadingOutlined } from "@ant-design/icons";
import QuillEditor from "@/components/QuillEditor";

const API_BASE = "https://canthaitoan-be.click/api";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [product, setProduct] = useState<TProduct>();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const res = await fetch(`${API_BASE}/product/${params.id}`);
        const data = await res.json();
        const p = data.product as TProduct;
        setProduct(p);
        setInput(p.name);
        setType(p.type);
        setNote(p.information);
        setDescription(p.description);
        if (p.type) {
          const findData = NavbarLayer.find((item) => item.value === p.type);
          if (findData) {
            setSubData(findData.children);
            setType2(p.subtype);
          }
        }
      } catch (error) {
        throw new Error("Failed to fetch product");
      }
    };
    fetchProductById();
  }, [params.id]);

  const [api, contextHolder] = notification.useNotification();
  const data = NavbarLayer;
  const [newImageUrl, setNewImageUrl] = useState<string>("");
  const [note, setNote] = useState<TNote[]>([{ noteName: "", noteDescription: "" }]);
  const [type, setType] = useState<string>("");
  const [type2, setType2] = useState<string>("");
  const [subData, setSubData] = useState<TSelectData[] | undefined>([]);
  const [description, setDescription] = useState("");

  const handleChange = (value: string) => {
    setType(value);
    const findData = NavbarLayer.find((item) => item.value === value);
    if (findData) {
      setSubData(findData.children);
    }
  };
  const handleChangeSub = (value: string) => {
    setType2(value);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setIsLoading(true);
    try {
      const body = {
        name: formData.get("name"),
        description: description,
        type: type,
        subtype: type2,
        image: newImageUrl !== "" ? newImageUrl : product?.image,
        information: note,
      };
      const res = await fetch(`${API_BASE}/product/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to update product");
      api["success"]({ message: "Success", description: "Cập nhật sản phẩm thành công" });
      setIsLoading(false);
      setTimeout(() => {
        router.push(`/detail/${params.id}`);
      }, 1500);
    } catch (error) {
      api["error"]({ message: "Error", description: "Đã có lỗi xảy ra vui lòng thử lại" });
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    setNote([...note, { noteName: "", noteDescription: "" }]);
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
            onChange={(e) => setInput(e.target.value)}
            value={input}
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
            value={type}
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
              value={type2}
            />
          </div>
        )}
        <div className="flex flex-col gap-1">
          <label className="text-lg">Mô tả</label>
          <QuillEditor
            value={description}
            onChange={setDescription}
            placeholder="Mô tả"
          />
        </div>
        <div className="flex flex-row gap-2">
          <button
            type="button"
            className="bg-sky-700 p-2 rounded-lg text-white font-semibold"
            onClick={handleClick}
          >
            Thêm thông số kỹ thuật
          </button>
        </div>
        {note.map((item, index) => (
          <InfoChunk index={index} item={item} setNote={setNote} key={index} />
        ))}
        <UploadImageBtn
          onUploadComplete={setNewImageUrl}
          defaultImageLink={product?.image}
        />
        <button
          className="bg-sky-600 text-white self-center text-lg rounded-md p-2 font-medium"
          type="submit"
        >
          <div className="flex items-center gap-2">
            <p>Update sản phẩm</p>
            {isLoading && <Spin indicator={<LoadingOutlined spin />} />}
          </div>
        </button>
      </form>
    </div>
  );
}
