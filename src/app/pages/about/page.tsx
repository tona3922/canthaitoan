"use client";
import React from "react";
import { Variants, motion } from "framer-motion";

const divVariants: Variants = {
  offscreen: { y: 60 },
  onscreen: { y: 0, transition: { type: "spring", duration: 1.5 } },
};
const About = () => {
  // const lat = 10.808822;
  // const long = 106.6864915;
  const query = "CÔNG+TY+TNHH+CÂN+ĐIỆN+TỬ+THÁI+TOÀN/";
  const mapData = `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed&z=18`;
  return (
    <div className="mt-10 flex min-h-screen justify-center py-12">
      <div className="flex flex-col w-2/3 gap-4">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={divVariants}
        >
          <h2 className="text-3xl font-customTitle font-bold text-slate-700">
            About us
          </h2>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={divVariants}
        >
          <p className="font-customDetail text-sky-600 font-bold text-xl">
            Main representative
          </p>
          <p className="text-lg">
            183 Hoang Hoa Tham, Ward 9, District Binh Thanh, Ho Chi Minh City
          </p>
        </motion.div>

        <p className="font-customDetail text-sky-600 font-bold text-xl">
          Sale & service
        </p>
        <p className="text-lg">0123456789</p>
        <p className="font-customDetail text-sky-600 font-bold text-xl">
          Map & Location
        </p>
        <iframe
          width="750"
          height="400"
          className="rounded-lg w-full border-gray-400"
          src={mapData}
        ></iframe>
      </div>
    </div>
  );
};

export default About;
