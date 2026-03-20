"use client";
import { Select, Spin } from "antd";
import InfoChunk from "@/components/InfoChunk";
import UploadImageBtn from "@/components/UploadImageBtn";
import { LoadingOutlined } from "@ant-design/icons";
import QuillEditor from "@/components/QuillEditor";
import { useEditProduct } from "@/hooks/useEditProduct";
import { NavbarLayer } from "@/asset/NavbarLayer";

export default function Page({ params }: { params: { id: string } }) {
  const {
    product,
    input, setInput,
    isLoading,
    setNewImageUrl,
    contextHolder,
    handleSubmit,
    type, type2, subData,
    note, setNote,
    description, setDescription,
    handleChange, handleChangeSub,
    addNote,
  } = useEditProduct(params.id);

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
            options={NavbarLayer}
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
          <QuillEditor value={description} onChange={setDescription} placeholder="Mô tả" />
        </div>
        <div className="flex flex-row gap-2">
          <button
            type="button"
            className="bg-sky-700 p-2 rounded-lg text-white font-semibold"
            onClick={addNote}
          >
            Thêm thông số kỹ thuật
          </button>
        </div>
        {note.map((item, index) => (
          <InfoChunk index={index} item={item} setNote={setNote} key={index} />
        ))}
        <UploadImageBtn onUploadComplete={setNewImageUrl} defaultImageLink={product?.image} />
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
