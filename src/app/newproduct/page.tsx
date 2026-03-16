"use client";
import UploadImageBtn from "@/components/UploadImageBtn";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Select } from "antd";
import { NavbarLayer } from "@/asset/NavbarLayer";
import InfoChunk from "@/components/InfoChunk";
import QuillEditor from "@/components/QuillEditor";
import { useNewProduct } from "@/hooks/useNewProduct";

export default function Page() {
  const {
    setImageUrl,
    isLoading,
    contextHolder,
    handleSubmit,
    type, type2, subData,
    note, setNote,
    description, setDescription,
    handleChange, handleChangeSub,
    addNote,
  } = useNewProduct();

  return (
    <div className="py-20 min-h-screen flex justify-center">
      {contextHolder}
      <form onSubmit={handleSubmit} className="w-1/2 flex flex-col gap-3">
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
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg">Phân loại</h3>
          <Select
            showSearch
            allowClear
            className="w-full h-10"
            placeholder="Các loại cân"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={NavbarLayer}
            onChange={handleChange}
            value={type || undefined}
          />
        </div>
        {subData && subData.length > 0 && (
          <div className="flex flex-col gap-1">
            <h3 className="text-lg">Chi tiết</h3>
            <Select
              showSearch
              allowClear
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
              value={type2 || undefined}
            />
          </div>
        )}
        <div className="flex flex-col gap-1">
          <label className="text-lg">Mô tả</label>
          <QuillEditor value={description} onChange={setDescription} placeholder="Mô tả" />
        </div>
        <div className="flex flex-row gap-2">
          <button
            type="button"
            className="bg-neutral-800 p-2 rounded-lg text-white"
            onClick={addNote}
          >
            Thêm thông số kỹ thuật
          </button>
        </div>
        {note.map((item, index) => (
          <InfoChunk key={index} index={index} item={item} setNote={setNote} />
        ))}
        <UploadImageBtn onUploadComplete={setImageUrl} />
        <button
          className="bg-sky-600 text-white self-center text-lg rounded-md p-2 font-medium"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <p>Đang cập nhật sản phẩm</p>
              <Spin indicator={<LoadingOutlined spin />} />
            </div>
          ) : (
            "Thêm sản phẩm"
          )}
        </button>
      </form>
    </div>
  );
}
