"use client";
import React, { useRef } from "react";
import { notification } from "antd";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [api, contextHolder] = notification.useNotification();

  const successNotification = () => {
    api["success"]({
      message: "Success",
      description: "Contact form sent successfully",
    });
  };
  const errorNotification = () => {
    api["error"]({
      message: "Error",
      description: "Some thing went wrong, please try again later",
    });
  };
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID as string,
        form.current as any,
        {
          publicKey: process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY as string,
        }
      )
      .then(
        () => {
          successNotification();
        },
        (error) => {
          errorNotification();
        }
      );
  };
  return (
    <div className="flex-1">
      {contextHolder}
      <form
        className="flex flex-col gap-3"
        ref={form as any}
        onSubmit={sendEmail}
      >
        <p>
          Với quy trình làm việc chuyên nghiệp và đội ngũ nhân sự giàu kinh
          nghiệm, đam mê và sáng tạo, sẽ là lựa chọn hàng đầu cho khách hàng khi
          cần mua các sản phẩm cân điện tử chất lượng cao.
        </p>
        <h1 className="text-3xl font-customDetail font-bold">
          Điền form liên hệ
        </h1>
        <div className="flex flex-row gap-12">
          <div className="flex-1 flex flex-col gap-2">
            <label className="font-normal font-customDetail text-lg text-gray-600">
              Họ Tên <span className="text-red-600">*</span>
            </label>
            <input
              required
              className="border rounded-lg py-2 px-4"
              type="text"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className=" flex-1 flex flex-col gap-2">
            <label className="font-normal font-customDetail text-lg text-gray-600">
              Số điện thoại <span className="text-red-600">*</span>
            </label>
            <input
              required
              className="border rounded-lg py-2 px-4"
              type="number"
              placeholder="Phone number"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-normal font-customDetail text-lg text-gray-600">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            required
            className="border rounded-lg py-2 px-4"
            type="email"
            placeholder="work@mail.com"
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-normal font-customDetail text-lg text-gray-600">
            Tin nhắn <span className="text-red-600">*</span>
          </label>
          <textarea
            className="border rounded-lg py-2 px-4 h-40"
            name="message"
            placeholder="Type your message here"
            required
          />
        </div>
        <button
          className="bg-sky-600 hover:bg-sky-800 text-white font-semibold p-2 w-32 rounded-lg"
          type="submit"
        >
          Submit now
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
