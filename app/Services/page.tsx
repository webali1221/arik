import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const page = () => {
  return (
    <div className='text-white'>
      <section className='mt-[120px] mb-[50px] flex flex-col justify-center items-center text-center px-4 '>
        <div>
          <h1 className="italic font-light text-[80px] leading-tight">
            Web Design <br />
            & Framer
          </h1>
          <p className="mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins">
            Premium web design, development, and SEO <br />
            services to help your business stand out.
          </p>
        </div>
        <button className='flex items-center mt-[60px] mb-[60px] gap-[10px]'><img className='w-[40px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge.svg" alt="" /> My Services</button>
        <img className='w-[1250px]' src="./Image (42).svg" alt="" />
      </section>
      <div className='flex items-center gap-[150px] justify-center'>
        <div className='flex flex-col items-center'>
          <p className='mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>Clients</p>
          <h1 className='font-light text-[60px] leading-tight'>150+</h1>
        </div>
        <div className='flex flex-col items-center'>
          <p className='mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>Projects</p>
          <h1 className='font-light text-[60px] leading-tight'>300+</h1>
        </div>
        <div className='flex flex-col items-center'>
          <p className='mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>Happy Clients</p>
          <h1 className='font-light text-[60px] leading-tight'>100%</h1>
        </div>
        <div className='flex flex-col items-center'>
          <p className='mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>Followers</p>
          <h1 className='font-light text-[60px] leading-tight'>100k</h1>
        </div>
      </div>
      <section className='flex flex-col items-center mt-[100px] mb-[100px] gap-[50px]'>
        <div className='bg-[#DAC5A70D] w-[1200px] h-[1560px] p-[64px]'>
          <div className='flex flex-col gap-[10px]'>
            <p>WEBDESIGN</p>
            <h1 className='text-[70px] font-light'>Transforming Your Ideas into Reality</h1>
          </div>
          <img className='w-[100%]' src="./Grid.svg" alt="" />
          <div className='flex flex-col gap-[100px] mt-[70px]'>
            <div className='flex'>
              <h3 className='w-[250px]'>CONCEPT</h3>
              <p className='text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>I take time to understand your business needs and audience to develop a unique concept for your <br />
                website. I'll create wireframes that serve as the foundation for your site's design and functionality.</p>
            </div>
            <div className='flex'>
              <h3 className='w-[250px]'>UX / UI DESIGIN</h3>
              <p className='text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>I'll design a user-friendly interface that is visually appealing and engages your target audience. Your <br />
                website will be created to meet your brand's needs and goals while ensuring a seamless user experience.</p>
            </div>
            <div className='flex'>
              <h3 className='w-[250px]'>PROTOTYPE</h3>
              <p className='text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>With an interactive prototype, you'll have the ability to test your website's functionality before it goes <br /> live. This will ensure that your website's design and user experience are optimized for your audience's <br /> needs and preferences.</p>
            </div>
          </div>
        </div>


        <div className='bg-[#DAC5A70D] w-[1200px] h-[1650px] p-[64px]'>
          <div className='flex flex-col gap-[10px]'>
            <p>WEBDESIGN</p>
            <h1 className='text-[70px] font-light'>Developing High-Performance <br /> Websites and Web Applications</h1>
          </div>
          <img className='w-[100%]' src="./Grid (3).svg" alt="" />
          <div className='flex flex-col gap-[100px] mt-[70px]'>
            <div className='flex'>
              <h3 className='w-[250px]'>FRAMER</h3>
              <p className='text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>I take time to understand your business needs and audience to develop a unique concept for your <br />
                website. I'll create wireframes that serve as the foundation for your site's design and functionality.</p>
            </div>
            <div className='flex'>
              <h3 className='w-[250px]'>CMS INTEGRATION</h3>
              <p className='text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>I'll design a user-friendly interface that is visually appealing and engages your target audience. Your <br />
                website will be created to meet your brand's needs and goals while ensuring a seamless user experience.</p>
            </div>
            <div className='flex'>
              <h3 className='w-[250px]'>WEB DESIGIN SIYSTEM</h3>
              <p className='text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>With an interactive prototype, you'll have the ability to test your website's functionality before it goes <br /> live. This will ensure that your website's design and user experience are optimized for your audience's <br /> needs and preferences.</p>
            </div>
          </div>
        </div>
        <div className='bg-[#DAC5A70D] w-[1200px] h-[1560px] p-[64px]'>
          <div className='flex flex-col gap-[10px]'>
            <p>SEO & CONTENT</p>
            <h1 className='text-[70px] font-light'>Boosting Your Website's Organic <br /> Search Traffic</h1>
          </div>
          <img className='w-[100%]' src="./Grid (2).svg" alt="" />
          <div className='flex flex-col gap-[100px] mt-[70px]'>
            <div className='flex'>
              <h3 className='w-[250px]'>RESEARCH</h3>
              <p className='text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>I take time to understand your business needs and audience to develop a unique concept for your <br />
                website. I'll create wireframes that serve as the foundation for your site's design and functionality.</p>
            </div>
            <div className='flex'>
              <h3 className='w-[250px]'>SEO RANKING</h3>
              <p className='text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>I'll design a user-friendly interface that is visually appealing and engages your target audience. Your <br />
                website will be created to meet your brand's needs and goals while ensuring a seamless user experience.</p>
            </div>
            <div className='flex'>
              <h3 className='w-[250px]'>SEO SUPPORT</h3>
              <p className='text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>With an interactive prototype, you'll have the ability to test your website's functionality before it goes <br /> live. This will ensure that your website's design and user experience are optimized for your audience's <br /> needs and preferences.</p>
            </div>
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
          <button className='transition hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer flex mx-auto mt-[30px] rounded-[5px] items-center gap-[10px] bg-[white] p-[10px] text-[black]'>
            GET IN TOUCH <MdArrowOutward />
          </button>
        </div>
      </section>
    </div>
  )
}

export default page
