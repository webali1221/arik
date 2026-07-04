import React from "react";
import Card from "../components/Card/page";
import { MdArrowOutward } from "react-icons/md";

const page = () => {
  return (
    <div className="text-white font-poppins">
      <section className="mb-[60px] md:mb-[100px] mt-[100px] md:mt-[150px] flex flex-col justify-center items-center text-center px-4 ">
        <h1 className="font-light text-[40px] sm:text-[60px] md:text-[80px] leading-tight">Blog</h1>
        <p className="mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br className="hidden sm:inline" /> elit, sed do
          eiusmod tempor lorem.
        </p>
      </section>
      <section className="flex flex-wrap gap-[32px] justify-center px-4 mb-[100px] max-w-7xl mx-auto">
        <div className="w-full max-w-[510px]"><Card /></div>
        <div className="w-full max-w-[510px]"><Card /></div>
        <div className="w-full max-w-[510px]"><Card /></div>
        <div className="w-full max-w-[510px]"><Card /></div>
        <div className="w-full max-w-[510px]"><Card /></div>
        <div className="w-full max-w-[510px]"><Card /></div>
      </section>
      <img className="w-full h-auto object-cover" src="./Grid (5).svg" alt="" />
      <section className="mt-[100px] md:mt-[150px] mb-[100px] md:mb-[150px] px-4">
        <div className="text-center">
          <p className="mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]">
            Project in mind?
          </p>
          <h1 className="italic font-light text-[40px] sm:text-[60px] md:text-[80px] leading-tight">
            Let’s make your <br />
            Website shine
          </h1>
          <p className="mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]">
            Premium web design, webflow, and SEO services to <br className="hidden sm:inline" /> help your
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
