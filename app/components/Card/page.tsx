import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-full max-w-[510px] min-h-[615px] h-auto p-6 md:p-[48px] bg-[#DAC5A70D] text-[#707476] flex flex-col gap-[20px]">
        <img className="w-full h-auto" src="./Image Wrapper.svg" alt="" />
        <div className="flex flex-col gap-[20px]">
          <h4>23rd Aug 2023</h4>
          <h1 className="text-[24px] text-[#DAC5A7]">How to Build a Stunning Website with Framer</h1>
          <p>
            Learn how to create an impressive website using Framer with our
            step-by-step guide.
          </p>
          <span className="p-[8px] bg-[#DAC5A70D] w-[97px] border-[#DAC5A726] border-[1px] text-center">WEbdesign</span>
        </div>
      </div>
    </div>
  );
};

export default page;
