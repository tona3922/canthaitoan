"use client";
import React, { useRef } from "react";
import { notification } from "antd";
import emailjs from "@emailjs/browser";

const Support = () => {
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
          console.log(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID);
          console.log("SUCCESS!");
        },
        (error) => {
          errorNotification();
          console.log(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="mt-16 min-h-screen py-12">
      {contextHolder}
      <div className="flex justify-center">
        <form
          className="flex flex-col gap-5 w-1/3"
          ref={form as any}
          onSubmit={sendEmail}
        >
          <h1 className="text-3xl font-customDetail font-bold">Contact form</h1>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <label className="font-normal font-customDetail text-lg text-gray-600">
                First name <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="border rounded-lg py-3 px-4"
                type="text"
                placeholder="First name"
                name="fname"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-normal font-customDetail text-lg text-gray-600">
                Last name <span className="text-red-600">*</span>
              </label>
              <input
                required
                className="border rounded-lg py-3 px-4"
                type="text"
                placeholder="Last name"
                name="lname"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-normal font-customDetail text-lg text-gray-600">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              required
              className="border rounded-lg py-3 px-4"
              type="email"
              placeholder="work@mail.com"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-normal font-customDetail text-lg text-gray-600">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              required
              className="border rounded-lg py-3 px-4"
              type="number"
              placeholder="Phone number"
              name="phone"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-normal font-customDetail text-lg text-gray-600">
              Your message <span className="text-red-600">*</span>
            </label>
            <textarea
              className="border rounded-lg py-3 px-4"
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
    </div>
  );
};

export default Support;
