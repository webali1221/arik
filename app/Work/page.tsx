import React from 'react'
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const page = () => {
  return (
    <div className='text-white'>
      <section className='mt-[120px] mb-[100px] flex flex-col justify-center items-center text-center px-4 '>
        <div>
          <h1 className="italic font-light text-[80px] leading-tight">
            Work
          </h1>
          <p className="mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins">
            My latest web design projects and see how we can <br /> help bring your ideas to life.
          </p>
        </div>
        <div className="flex flex-wrap mt-[100px] justify-center gap-[30px]">
          <Link href="/Single1">
            <img
              className="w-[630px] cursor-pointer"
              src="/Grid.svg"
              alt=""
            />
          </Link>
          <Link href="/Single2">
            <img
              className="w-[630px] cursor-pointer"
              src="/Grid (1).svg"
              alt=""
            />
          </Link>
          <Link href="/Single3">
            <img
              className="w-[630px] cursor-pointer"
              src="/Grid (2).svg"
              alt=""
            />
          </Link>
          <Link href="/Single4">
            <img
              className="w-[630px] cursor-pointer"
              src="/Grid (3).svg"
              alt=""
            />
          </Link>
        </div>
      </section>
      <img src="./Grid (5).svg" alt="" />
      <section className='mt-[150px] mb-[150px]'>
        <div className="text-center">
          <p className='mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>Project in mind?</p>
          <h1 className="italic font-light text-[80px] leading-tight">
            Let’s make your <br />
            Website shine
          </h1>
          <p className="mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins">
            Premium web design, webflow, and SEO services to <br /> help your business stand out.
          </p>
          <button className='transition hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer flex mx-auto mt-[30px] rounded-[5px] items-center gap-[10px] bg-[white] p-[10px] text-[black]'>GET IN TOUCH <MdArrowOutward /></button>
        </div>
      </section>
    </div>
  )
}

export default page
