import React from 'react'
import Box from "./components/Box/page"
import Box2 from "./components/Box2/page"
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const page = () => {
  return (
    <div className='text-white font-poppins'>
      <section className='mb-[60px] md:mb-[100px] flex flex-col justify-center items-center text-center px-4 mt-[100px] md:mt-[150px]'>
        <img className='w-full max-w-[600px] h-auto' src="./bg.svg" alt="" />
        <h1 className="italic font-light text-[40px] sm:text-[60px] md:text-[80px] leading-tight">
          Web Designer <br />
          & Developer
        </h1>
        <p className="mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]">
          Premium web design, development, and SEO <br className="hidden sm:inline" />
          services to help your business stand out.
        </p>
      </section>
      <section className="px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-[130px]">
          <img className='h-6 md:h-auto transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./logo 1.svg" alt="" />
          <img className='h-6 md:h-auto transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./logo 2.svg" alt="" />
          <img className='h-6 md:h-auto transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./logo 3.svg" alt="" />
          <img className='h-6 md:h-auto transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./logo 4.svg" alt="" />
          <img className='h-6 md:h-auto transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./logo 5.svg" alt="" />
          <img className='h-6 md:h-auto transform hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./logo 6.svg" alt="" />
        </div>
        <div className='flex flex-col lg:flex-row gap-[32px] justify-center items-center lg:items-stretch mt-[50px] mb-[100px]'>
          <div className="transition-transform duration-300 ease-in-out hover:translate-y-2 w-full max-w-[445px] rounded-[3px] text-[#DAC5A799] font-light min-h-[310px] h-auto bg-[#DAC5A70D] p-6 md:p-[48px] flex flex-col justify-center gap-[30px]">
            <div className="">
              <h5>01</h5>
              <h3 className='text-[20px] text-[#DAC5A7]'>Web design</h3>
            </div>
            <p>Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.</p>
            <div className="flex items-center gap-[10px] mt-auto">
              <img className='transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./arrow-y-x.svg " alt="" />
              <h3 className='text-[17px] text-[#DAC5A7]'>About Webdesign</h3>
            </div>
          </div>
          <div className="transition-transform duration-300 ease-in-out hover:translate-y-2 w-full max-w-[445px] rounded-[3px] text-[#DAC5A799] font-light min-h-[310px] h-auto bg-[#DAC5A70D] p-6 md:p-[48px] flex flex-col justify-center gap-[30px]">
            <div className="">
              <h5>02</h5>
              <h3 className='text-[20px] text-[#DAC5A7]'>Development</h3>
            </div>
            <p>Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.</p>
            <div className="flex items-center gap-[10px] mt-auto">
              <img className='transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./arrow-y-x.svg " alt="" />
              <h3 className='text-[17px] text-[#DAC5A7]'>About Webflow</h3>
            </div>
          </div>
          <div className="transition-transform duration-300 ease-in-out hover:translate-y-2 w-full max-w-[445px] rounded-[3px] text-[#DAC5A799] font-light min-h-[310px] h-auto bg-[#DAC5A70D] p-6 md:p-[48px] flex flex-col justify-center gap-[30px]">
            <div className="">
              <h5>03</h5>
              <h3 className='text-[20px] text-[#DAC5A7]'>Content & Seo</h3>
            </div>
            <p>Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.</p>
            <div className="flex items-center gap-[10px] mt-auto">
              <img className='transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./arrow-y-x.svg " alt="" />
              <h3 className='text-[17px] text-[#DAC5A7]'>About SEO</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4">
        <div className='flex items-center justify-between mx-4 md:mx-[100px] mb-[50px]'>
          <h1 className="text-[28px] md:text-[36px]">Selected Work</h1>
          <button className='flex items-center gap-[10px]'><img className='w-[25px]' src="./arrow-y-x.svg" alt="" />See all</button>
        </div>
        <div className="flex flex-wrap justify-center gap-[30px] max-w-7xl mx-auto">
          <Link className="w-full max-w-[630px]" href="/Single1">
            <img
              className="w-full cursor-pointer h-auto"
              src="/Grid.svg"
              alt=""
            />
          </Link>
          <Link className="w-full max-w-[630px]" href="/Single2">
            <img
              className="w-full cursor-pointer h-auto"
              src="/Grid (1).svg"
              alt=""
            />
          </Link>
          <Link className="w-full max-w-[630px]" href="/Single3">
            <img
              className="w-full cursor-pointer h-auto"
              src="/Grid (2).svg"
              alt=""
            />
          </Link>
          <Link className="w-full max-w-[630px]" href="/Single4">
            <img
              className="w-full cursor-pointer h-auto"
              src="/Grid (3).svg"
              alt=""
            />
          </Link>
        </div>
      </section>
      <section className='mt-[100px] md:mt-[150px] px-4'>
        <div className="text-center font-poppins">
          <p className='mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]'>THe PRocess</p>
          <h1 className="italic font-light text-[40px] sm:text-[60px] md:text-[80px] leading-tight">
            Your Website <br />
            in 5 steps
          </h1>
          <p className="mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]">
            Our process ensures that we create a website <br className="hidden sm:inline" />
            tailored to your business needs.
          </p>
          <img className='mx-auto mt-[60px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge.svg" alt="" />
          <img className='mx-auto mt-[30px] hidden lg:block' src="./Line.svg" alt="" />
        </div>
        <div className='relative flex flex-col items-center lg:block lg:min-h-[380px] mt-8 lg:mt-0'>
          <img className='mx-auto hidden lg:block' src="./Line.svg" alt="" />
          <img className='mx-auto mt-[30px] mb-[30px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge (1).svg" alt="" />
          <img className='mx-auto hidden lg:block' src="./Line.svg" alt="" />
          <div className="w-full lg:w-auto flex justify-center lg:absolute lg:top-0 lg:right-20 transition-transform duration-300 ease-in-out hover:translate-x-3 mb-[30px] lg:mb-0">
            <Box />
          </div>
        </div>
        <div className='relative flex flex-col items-center lg:block lg:min-h-[380px]'>
          <img className='mx-auto hidden lg:block' src="./Line.svg" alt="" />
          <img className='mx-auto mt-[30px] mb-[30px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge (2).svg" alt="" />
          <img className='mx-auto hidden lg:block' src="./Line.svg" alt="" />
          <div className="w-full lg:w-auto flex justify-center lg:absolute lg:top-0 lg:left-20 transition-transform duration-300 ease-in-out hover:-translate-x-3 mb-[30px] lg:mb-0">
            <Box />
          </div>
        </div>
        <div className='relative flex flex-col items-center lg:block lg:min-h-[380px]'>
          <img className='mx-auto hidden lg:block' src="./Line.svg" alt="" />
          <img className='mx-auto mt-[30px] mb-[30px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge (3).svg" alt="" />
          <img className='mx-auto hidden lg:block' src="./Line.svg" alt="" />
          <div className="w-full lg:w-auto flex justify-center lg:absolute lg:top-0 lg:right-20 transition-transform duration-300 ease-in-out hover:translate-x-3 mb-[30px] lg:mb-0">
            <Box />
          </div>
        </div>
        <div className='relative flex flex-col items-center lg:block lg:min-h-[380px]'>
          <img className='mx-auto hidden lg:block' src="./Line.svg" alt="" />
          <img className='mx-auto mt-[30px] mb-[30px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge (4).svg" alt="" />
          <img className='mx-auto hidden lg:block' src="./Line.svg" alt="" />
          <div className="w-full lg:w-auto flex justify-center lg:absolute lg:top-0 lg:left-20 transition-transform duration-300 ease-in-out hover:-translate-x-3 mb-[30px] lg:mb-0">
            <Box />
          </div>
        </div>
        <div className='relative flex flex-col items-center lg:block lg:min-h-[380px]'>
          <img className='mx-auto hidden lg:block' src="./Line.svg" alt="" />
          <img className='mx-auto mt-[30px] mb-[30px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge (5).svg" alt="" />
          <div className="w-full lg:w-auto flex justify-center lg:absolute lg:top-0 lg:right-20 transition-transform duration-300 ease-in-out hover:translate-x-3 mb-[30px] lg:mb-0">
            <Box />
          </div>
        </div>
      </section>
      <section className="px-4">
        <div className="text-center mt-[120px] md:mt-[250px] mb-[50px]">
          <h1 className="italic font-light text-[40px] sm:text-[60px] md:text-[80px] leading-tight">
            What my <br />
            clients say
          </h1>
          <p className="mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]">
            See what my clients have to say about working with me and the <br className="hidden sm:inline" />
            results I helped them achieve.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[30px] mb-[100px] max-w-7xl mx-auto">
          <div className='transition-transform duration-300 ease-in-out hover:-translate-x-3 w-full max-w-[490px]'><Box2 /></div>
          <div className='transition-transform duration-300 ease-in-out hover:translate-x-3 w-full max-w-[490px]'><Box2 /></div>
          <div className='transition-transform duration-300 ease-in-out hover:-translate-x-3 w-full max-w-[490px]'><Box2 /></div>
          <div className='transition-transform duration-300 ease-in-out hover:translate-x-3 w-full max-w-[490px]'><Box2 /></div>
          <div className='transition-transform duration-300 ease-in-out hover:-translate-x-3 w-full max-w-[490px]'><Box2 /></div>
          <div className='transition-transform duration-300 ease-in-out hover:translate-x-3 w-full max-w-[490px]'><Box2 /></div>
        </div>
      </section>
      <section className='mb-[100px] md:mb-[150px] px-4 overflow-hidden'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-6 max-w-7xl mx-auto'>
          <h1 className='italic font-light text-[36px] sm:text-[50px] md:text-[70px] leading-tight text-center lg:text-left'>Arik Andersson</h1>
          <img className='w-full max-w-[600px] h-auto' src="./bg.svg" alt="" />
          <h1 className='italic font-light text-[70px] leading-tight hidden lg:block'>Arik Andersson</h1>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-[200px] mt-[50px] max-w-7xl mx-auto'>
          <h1 className='italic font-light text-[24px] md:text-[30px] leading-tight text-center lg:text-left'>A website that leaves <br />
            a lasting impression!</h1>
          <div className="flex flex-col items-center lg:items-start gap-[10px]">
            <p className='text-[#DAC5A799] text-[16px] md:text-[18px] text-center lg:text-left max-w-[600px]'>Hi, I'm Arik Andersson - a freelancer specializing in premium web
              design, development, and SEO services. I'm passionate about
              creating unique and effective solutions for my clients, and I
              bring a personal touch to every project. Let's work together to
              bring your vision to life!</p>
            <img className="w-full max-w-[500px] h-auto mt-4" src="./Grid (4).svg" alt="" />
          </div>
        </div>
      </section>
      <img className="w-full h-auto object-cover" src="./Grid (5).svg" alt="" />
      <section className='mt-[100px] md:mt-[150px] mb-[100px] md:mb-[150px] px-4'>
        <div className="text-center font-poppins">
          <p className='mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]'>Project in mind?</p>
          <h1 className="italic font-light text-[40px] sm:text-[60px] md:text-[80px] leading-tight">
            Let’s make your <br />
            Website shine
          </h1>
          <p className="mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]">
            Premium web design, webflow, and SEO services to <br className="hidden sm:inline" /> help your business stand out.
          </p>
          <button className='transition hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer flex mx-auto mt-[30px] rounded-[5px] items-center gap-[10px] bg-[white] p-[10px] text-[black]'>GET IN TOUCH <MdArrowOutward /></button>
        </div>
      </section>
    </div>
  )
}

export default page
