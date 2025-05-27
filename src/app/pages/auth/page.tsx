"use client";
import { createSession } from "@/app/lib/session";
import { auth } from "@/firebase/firebase";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    createSession();
    try {
      console.log(data);
      const result = await signInWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken();
      Cookies.set("__session", token, { expires: 7, sameSite: "strict" });
      router.push("/");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      throw new Error("Failed to login");
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="flex flex-col gap-6 border rounded-lg p-5 lg:w-1/4 sm:w-1/2 phone:w-4/5"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-customTitle font-bold">Login as Admin</h1>
        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className="font-customDetail font-medium text-lg text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Username"
            className="outline-none border-b"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className="font-customDetail font-medium text-lg text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="outline-none border-b"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-black text-white text-lg font-semibold py-2 rounded-lg flex gap-4 justify-center items-center"
          type="submit"
        >
          Login now {isLoading && <Spin indicator={<LoadingOutlined spin />} />}
        </button>
      </form>
    </div>
  );
}
