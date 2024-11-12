"use client";
import React from "react";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import email from "@/asset/email.png";
import location from "@/asset/pin.png";
import phone from "@/asset/phone-call.png";
import ContactForm from "@/components/ContactForm";

const divVariants: Variants = {
  offscreen: { y: 60 },
  onscreen: { y: 0, transition: { type: "spring", duration: 1.5 } },
};
export default function Page() {
  const query = "CÔNG+TY+TNHH+CÂN+ĐIỆN+TỬ+THÁI+TOÀN/";
  const mapData = `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed&z=18`;
  return (
    <main>
      <div className="mt-16 flex min-h-screen gap-24 pt-4 pb-12 px-16">
        <ContactForm />
        <div className="flex flex-col gap-4">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={divVariants}
            className="flex flex-col gap-4"
          >
            <div className="flex gap-2">
              <Image
                src={location}
                alt="location"
                className="dark:invert"
                width={24}
                height={20}
                priority
              />
              <p className="text-lg">
                183/14A Hoàng Hoa Thám, Phường 6, Quận Bình Thạnh, TP Hồ Chí
                Minh
              </p>
            </div>
            <div className="flex gap-3">
              <Image
                src={phone}
                alt="location"
                className="dark:invert"
                width={24}
                height={5}
                priority
              />
              <p className="text-lg">0908699986 - 0903638421</p>
            </div>
            <div className="flex gap-3">
              <Image
                src={email}
                alt="location"
                className="dark:invert"
                width={28}
                height={20}
                priority
              />
              <p className="text-lg">nguyetthu@canthaitoan.com</p>
            </div>
          </motion.div>
          <iframe
            width="300"
            height="500"
            className="rounded-lg w-full border-gray-400"
            src={mapData}
          ></iframe>
        </div>
      </div>
    </main>
  );
}
