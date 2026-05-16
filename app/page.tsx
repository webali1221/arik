import React from 'react'
import Box from "./components/Box/page"
import Box2 from "./components/Box2/page"
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const page = () => {
  return (
    <div className='text-white'>
      <section className='mb-[100px] flex flex-col justify-center items-center text-center px-4 '>
        <img className='w-[600px]' src="./bg.svg" alt="" />
        <h1 className="italic font-light text-[80px] leading-tight">
          Web Designer <br />
          & Developer
        </h1>
        <p className="mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins">
          Premium web design, development, and SEO <br />
          services to help your business stand out.
        </p>
      </section>
      <section>
        <div className="flex justify-center gap-[130px]">
          <img className='transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./logo 1.svg" alt="" />
          <img className='transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./logo 2.svg" alt="" />
          <img className='transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./logo 3.svg" alt="" />
          <img className='transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./logo 4.svg" alt="" />
          <img className='transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./logo 5.svg" alt="" />
          <img className='transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./logo 6.svg" alt="" />
        </div>
        <div className='flex gap-[32px] justify-center mt-[50px] mb-[100px]'>
          <div className="transition-transform duration-300 ease-in-out hover:translate-y-2 w-[445px] rounded-[3px] text-[#DAC5A799] font-light h-[310px] bg-[#DAC5A70D] p-[48px] flex flex-col justify-center gap-[30px]">
            <div className="">
              <h5>01</h5>
              <h3 className='text-[20px] text-[#DAC5A7]'>Web design</h3>
            </div>
            <p>Visually stunning web designs that <br />
              captivate your audience by blending your <br />
              brand voice and customer needs.</p>
            <div className="flex items-center gap-[10px]">
              <img className='transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./arrow-y-x.svg " alt="" />
              <h3 className='text-[17px] text-[#DAC5A7]'>About Webdesign</h3>
            </div>
          </div>
          <div className="transition-transform duration-300 ease-in-out hover:translate-y-2 w-[445px] rounded-[3px] text-[#DAC5A799] font-light h-[310px] bg-[#DAC5A70D] p-[48px] flex flex-col justify-center gap-[30px]">
            <div className="">
              <h5>02</h5>
              <h3 className='text-[20px] text-[#DAC5A7]'>Development</h3>
            </div>
            <p>Get custom web development solutions that <br />
              are tailored to your specifications, designed <br />
              to deliver a flawless user experience.</p>
            <div className="flex items-center gap-[10px]">
              <img className='transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./arrow-y-x.svg " alt="" />
              <h3 className='text-[17px] text-[#DAC5A7]'>About Webflow</h3>
            </div>
          </div>
          <div className="transition-transform duration-300 ease-in-out hover:translate-y-2 w-[445px] rounded-[3px] text-[#DAC5A799] font-light h-[310px] bg-[#DAC5A70D] p-[48px] flex flex-col justify-center gap-[30px]">
            <div className="">
              <h5>03</h5>
              <h3 className='text-[20px] text-[#DAC5A7]'>Content & Seo</h3>
            </div>
            <p>Proven SEO strategies that enhance your <br />
              online performance, bringing you to the <br />
              forefront of organic search results.</p>
            <div className="flex items-center gap-[10px]">
              <img className='transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./arrow-y-x.svg " alt="" />
              <h3 className='text-[17px] text-[#DAC5A7]'>About SEO</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='flex items-center justify-between mx-[100px] mb-[50px]'>
          <h1>Selected Work</h1>
          <button className='flex items-center gap-[10px]'><img className='w-[25px]' src="./arrow-y-x.svg" alt="" />See all</button>
        </div>
        <div className="flex flex-wrap justify-center gap-[30px]">
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
      <section className='mt-[150px]'>
        <div className="text-center">
          <p className='mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>THe PRocess</p>
          <h1 className="italic font-light text-[80px] leading-tight">
            Your Website <br />
            in 5 steps
          </h1>
          <p className="mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins">
            Our process ensures that we create a website <br />
            tailored to your business needs.
          </p>
          <img className='mx-auto mt-[60px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge.svg" alt="" />
          <img className='mx-auto mt-[30px]' src="./Line.svg" alt="" />
        </div>
        <div className='relative'>
          <img className='mx-auto' src="./Line.svg" alt="" />
          <img className='mx-auto mt-[30px] mb-[30px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge (1).svg" alt="" />
          <img className='mx-auto' src="./Line.svg" alt="" />
          <div className="absolute top-0 right-20 transition-transform duration-300 ease-in-out hover:translate-x-3">
            <Box />
          </div>
        </div>
        <div className='relative'>
          <img className='mx-auto' src="./Line.svg" alt="" />
          <img className='mx-auto mt-[30px] mb-[30px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge (2).svg" alt="" />
          <img className='mx-auto' src="./Line.svg" alt="" />
          <div className="absolute top-0 left-20 transition-transform duration-300 ease-in-out hover:-translate-x-3">
            <Box />
          </div>
        </div>
        <div className='relative'>
          <img className='mx-auto' src="./Line.svg" alt="" />
          <img className='mx-auto mt-[30px] mb-[30px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge (3).svg" alt="" />
          <img className='mx-auto' src="./Line.svg" alt="" />
          <div className="absolute top-0 right-20 transition-transform duration-300 ease-in-out hover:translate-x-3">
            <Box />
          </div>
        </div>
        <div className='relative'>
          <img className='mx-auto' src="./Line.svg" alt="" />
          <img className='mx-auto mt-[30px] mb-[30px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge (4).svg" alt="" />
          <img className='mx-auto' src="./Line.svg" alt="" />
          <div className="absolute top-0 left-20 transition-transform duration-300 ease-in-out hover:-translate-x-3">
            <Box />
          </div>
        </div>
        <div className='relative'>
          <img className='mx-auto' src="./Line.svg" alt="" />
          <img className='mx-auto mt-[30px] mb-[30px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge (5).svg" alt="" />
          <div className="absolute top-0 right-20 transition-transform duration-300 ease-in-out hover:translate-x-3">
            <Box />
          </div>
        </div>
      </section>
      <section>
        <div className="text-center mt-[250px] mb-[50px]">
          <h1 className="italic font-light text-[80px] leading-tight">
            What my <br />
            clients say
          </h1>
          <p className="mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins">
            See what my clients have to say about working with me and the <br />
            results I helped them achieve.
          </p>
        </div>
        <div className="flex flex-wrap  ml-[250px] gap-[30px] mb-[100px]">
          <div className='transition-transform duration-300 ease-in-out hover:-translate-x-3'><Box2 /></div>
          <div className='transition-transform duration-300 ease-in-out hover:translate-x-3'><Box2 /></div>
          <div className='transition-transform duration-300 ease-in-out hover:-translate-x-3'><Box2 /></div>
          <div className='transition-transform duration-300 ease-in-out hover:translate-x-3'><Box2 /></div>
          <div className='transition-transform duration-300 ease-in-out hover:-translate-x-3'><Box2 /></div>
          <div className='transition-transform duration-300 ease-in-out hover:translate-x-3'><Box2 /></div>
        </div>
      </section>
      <section className='mb-[150px]'>
        <div className='flex items-center ml-[200px]'>
          <h1 className='italic font-light text-[70px] leading-tight'>Arik Andersson</h1>
          <img className='w-[600px]' src="./bg.svg" alt="" />
          <h1 className='italic font-light text-[70px] leading-tight'>Arik Andersson</h1>
        </div>
        <div className='flex justify-center gap-[200px] mt-[50px]'>
          <h1 className='italic font-light text-[30px] leading-tight'>A website that leaves <br />
            a lasting impression!</h1>
          <div className="flex flex-col items-start gap-[10px]">
            <p className='mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>Hi, I'm Arik Andersson - a freelancer specializing in premium web <br />
              design, development, and SEO services. I'm passionate about <br />
              creating unique and effective solutions for my clients, and I <br />
              bring a personal touch to every project. Let's work together to <br />
              bring your vision to life!</p>
            <img src="./Grid (4).svg" alt="" />
          </div>
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
