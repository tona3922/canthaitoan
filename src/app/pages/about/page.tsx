"use client";
import React from "react";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import email from "@/asset/email.png";
import location from "@/asset/pin.png";
import phone from "@/asset/phone-call.png";
import ContactForm from "@/components/ContactForm";
import { Tabs } from "antd";

const divVariants: Variants = {
  offscreen: { y: 60 },
  onscreen: { y: 0, transition: { type: "spring", duration: 1.5 } },
};
export default function Page() {
  const query = "CÔNG+TY+TNHH+CÂN+ĐIỆN+TỬ+THÁI+TOÀN/";
  const mapData = `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed&z=18`;
  const mapData2 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.9578325343923!2d106.12926045475443!3d11.289446992501663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b6aede6738a4b%3A0xa8da3a1ca75b06b0!2zQ8ahIFPhu58gTMO9IELhuqN5!5e0!3m2!1sen!2s!4v1731601827747!5m2!1sen!2s";
  return (
    <main>
      <div className="mt-16 min-h-screen flex phone:flex-col xl:flex-row gap-24 pt-4 pb-12 md:px-24 phone:px-4">
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
                className="dark:invert h-4/5"
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
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: <h3 className="text-lg">Trụ sở chính</h3>,
                key: "1",
                children: (
                  <iframe
                    width="300"
                    height="500"
                    className="rounded-lg w-full border-gray-400"
                    src={mapData}
                  ></iframe>
                ),
              },
              {
                label: <h3 className="text-lg">Chi nhánh</h3>,
                key: "2",
                children: (
                  <iframe
                    src={mapData2}
                    width="300"
                    height="500"
                    className="rounded-lg w-full border-gray-400"
                  ></iframe>
                ),
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
