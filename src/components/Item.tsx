"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Modal } from "antd";

const Item = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <article
        className="border-gray-300 border-[1px] flex flex-col gap-2 cursor-pointer hover:border-sky-600"
        onClick={showModal}
      >
        <Image
          src="https://www.mt.com/dam/homepage-redesign-2016-r01/thumbnails/esbu_industrial_ver2.jpg/_jcr_content/renditions/original.webp"
          alt="item"
          className="w-full h-36"
          width={200}
          height={100}
        />
        <h2 className="font-semibold font-customCardTitle px-2 text-lg">
          Title
        </h2>
        <p className="text-sm px-2 pb-2">
          Content: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi at quibusdam expedita provident quae atque facilis, eum
          incidunt ea, suscipit vero quaerat eaque sit possimus nostrum
          doloribus laudantium iusto. Omnis.
        </p>
      </article>
      <Modal
        centered
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Image
          src="https://www.mt.com/dam/homepage-redesign-2016-r01/thumbnails/esbu_industrial_ver2.jpg/_jcr_content/renditions/original.webp"
          alt="item"
          className="w-full"
          width={200}
          height={100}
        />
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default Item;
