import React from "react";

const Footer = () => {
  return (
    <div className="border-t-sky-600 border-t-2 px-40 pt-12 pb-20">
      <div className="text-sky-600 font-customTitle font-bold text-3xl mb-6">
        Can Thai Toan
      </div>
      <div className="flex flex-row">
        <div className="flex-1">
          <div className="text-xl font-customCardTitle font-bold mb-4">
            Products
          </div>
          <div className="flex flex-row">
            <div className="flex-1 flex flex-col gap-4">
              <p className="font-customDetail text-lg font-medium">link here</p>
              <p className="font-customDetail text-lg font-medium">link here</p>
              <p className="font-customDetail text-lg font-medium">link here</p>
              <p className="font-customDetail text-lg font-medium">link here</p>
              <p className="font-customDetail text-lg font-medium">link here</p>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <p className="font-customDetail text-lg font-medium">link here</p>
              <p className="font-customDetail text-lg font-medium">link here</p>
              <p className="font-customDetail text-lg font-medium">link here</p>
              <p className="font-customDetail text-lg font-medium">link here</p>
              <p className="font-customDetail text-lg font-medium">link here</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row justify-between">
          <div className="text-xl font-customCardTitle font-bold mb-4">
            Service & Support
          </div>
          <div className="text-xl font-customCardTitle font-bold mb-4">
            About us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
