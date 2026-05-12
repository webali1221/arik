import React from "react";
import Card from "../components/Card/page";
import { MdArrowOutward } from "react-icons/md";

const page = () => {
  return (
    <div className="text-white">
      <section className="mb-[100px] mt-[150px] flex flex-col justify-center items-center text-center px-4 ">
        <h1 className="font-light text-[80px] leading-tight">Blog</h1>
        <p className="mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do
          eiusmod tempor lorem.
        </p>
      </section>
      <section className="flex flex-wrap gap-[32px] ml-[160px] mb-[100px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <img src="./Grid (5).svg" alt="" />
      <section className="mt-[150px] mb-[150px]">
        <div className="text-center">
          <p className="mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins">
            Project in mind?
          </p>
          <h1 className="italic font-light text-[80px] leading-tight">
            Let’s make your <br />
            Website shine
          </h1>
          <p className="mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins">
            Premium web design, webflow, and SEO services to <br /> help your
            business stand out.
          </p>
          <button className="transition hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer flex mx-auto mt-[30px] rounded-[5px] items-center gap-[10px] bg-[white] p-[10px] text-[black]">
            GET IN TOUCH <MdArrowOutward />
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
