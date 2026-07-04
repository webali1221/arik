import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const page = () => {
  return (
    <div className='text-white font-poppins'>
      <section className='mt-[100px] md:mt-[120px] mb-[50px] flex flex-col justify-center items-center text-center px-4 '>
        <div>
          <h1 className="italic font-light text-[40px] sm:text-[60px] md:text-[80px] leading-tight">
            Web Design <br />
            & Framer
          </h1>
          <p className="mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]">
            Premium web design, development, and SEO <br className="hidden sm:inline" />
            services to help your business stand out.
          </p>
        </div>
        <button className='flex items-center mt-[40px] mb-[40px] gap-[10px]'><img className='w-[40px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge.svg" alt="" /> My Services</button>
        <img className='w-full max-w-[1250px] h-auto' src="./Image (42).svg" alt="" />
      </section>
      <div className='flex flex-wrap md:flex-nowrap items-center gap-8 md:gap-[150px] justify-center px-4 mb-[50px] max-w-7xl mx-auto'>
        <div className='flex flex-col items-center'>
          <p className='mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]'>Clients</p>
          <h1 className='font-light text-[40px] md:text-[60px] leading-tight'>150+</h1>
        </div>
        <div className='flex flex-col items-center'>
          <p className='mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]'>Projects</p>
          <h1 className='font-light text-[40px] md:text-[60px] leading-tight'>300+</h1>
        </div>
        <div className='flex flex-col items-center'>
          <p className='mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]'>Happy Clients</p>
          <h1 className='font-light text-[40px] md:text-[60px] leading-tight'>100%</h1>
        </div>
        <div className='flex flex-col items-center'>
          <p className='mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]'>Followers</p>
          <h1 className='font-light text-[40px] md:text-[60px] leading-tight'>100k</h1>
        </div>
      </div>
      <section className='flex flex-col items-center mt-[60px] md:mt-[100px] mb-[100px] gap-[50px] px-4'>
        <div className='bg-[#DAC5A70D] w-full max-w-[1200px] h-auto p-6 md:p-[64px]'>
          <div className='flex flex-col gap-[10px] mb-8'>
            <p className="text-sm tracking-wider">WEBDESIGN</p>
            <h1 className='text-[36px] sm:text-[50px] md:text-[70px] font-light leading-tight'>Transforming Your Ideas into Reality</h1>
          </div>
          <img className='w-[100%] h-auto' src="./Grid.svg" alt="" />
          <div className='flex flex-col gap-8 md:gap-[100px] mt-[40px] md:mt-[70px]'>
            <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
              <h3 className='w-full md:w-[250px] text-lg font-medium text-[#DAC5A7]'>CONCEPT</h3>
              <p className='text-[#DAC5A799] text-[16px] md:text-[18px]'>I take time to understand your business needs and audience to develop a unique concept for your
                website. I'll create wireframes that serve as the foundation for your site's design and functionality.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
              <h3 className='w-full md:w-[250px] text-lg font-medium text-[#DAC5A7]'>UX / UI DESIGIN</h3>
              <p className='text-[#DAC5A799] text-[16px] md:text-[18px]'>I'll design a user-friendly interface that is visually appealing and engages your target audience. Your
                website will be created to meet your brand's needs and goals while ensuring a seamless user experience.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
              <h3 className='w-full md:w-[250px] text-lg font-medium text-[#DAC5A7]'>PROTOTYPE</h3>
              <p className='text-[#DAC5A799] text-[16px] md:text-[18px]'>With an interactive prototype, you'll have the ability to test your website's functionality before it goes live. This will ensure that your website's design and user experience are optimized for your audience's needs and preferences.</p>
            </div>
          </div>
        </div>


        <div className='bg-[#DAC5A70D] w-full max-w-[1200px] h-auto p-6 md:p-[64px]'>
          <div className='flex flex-col gap-[10px] mb-8'>
            <p className="text-sm tracking-wider">DEVELOPMENT</p>
            <h1 className='text-[36px] sm:text-[50px] md:text-[70px] font-light leading-tight'>Developing High-Performance <br className="hidden sm:inline" /> Websites and Web Applications</h1>
          </div>
          <img className='w-[100%] h-auto' src="./Grid (3).svg" alt="" />
          <div className='flex flex-col gap-8 md:gap-[100px] mt-[40px] md:mt-[70px]'>
            <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
              <h3 className='w-full md:w-[250px] text-lg font-medium text-[#DAC5A7]'>FRAMER</h3>
              <p className='text-[#DAC5A799] text-[16px] md:text-[18px]'>I take time to understand your business needs and audience to develop a unique concept for your
                website. I'll create wireframes that serve as the foundation for your site's design and functionality.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
              <h3 className='w-full md:w-[250px] text-lg font-medium text-[#DAC5A7]'>CMS INTEGRATION</h3>
              <p className='text-[#DAC5A799] text-[16px] md:text-[18px]'>I'll design a user-friendly interface that is visually appealing and engages your target audience. Your
                website will be created to meet your brand's needs and goals while ensuring a seamless user experience.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
              <h3 className='w-full md:w-[250px] text-lg font-medium text-[#DAC5A7]'>WEB DESIGIN SIYSTEM</h3>
              <p className='text-[#DAC5A799] text-[16px] md:text-[18px]'>With an interactive prototype, you'll have the ability to test your website's functionality before it goes live. This will ensure that your website's design and user experience are optimized for your audience's needs and preferences.</p>
            </div>
          </div>
        </div>
        <div className='bg-[#DAC5A70D] w-full max-w-[1200px] h-auto p-6 md:p-[64px]'>
          <div className='flex flex-col gap-[10px] mb-8'>
            <p className="text-sm tracking-wider">SEO & CONTENT</p>
            <h1 className='text-[36px] sm:text-[50px] md:text-[70px] font-light leading-tight'>Boosting Your Website's Organic <br className="hidden sm:inline" /> Search Traffic</h1>
          </div>
          <img className='w-[100%] h-auto' src="./Grid (2).svg" alt="" />
          <div className='flex flex-col gap-8 md:gap-[100px] mt-[40px] md:mt-[70px]'>
            <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
              <h3 className='w-full md:w-[250px] text-lg font-medium text-[#DAC5A7]'>RESEARCH</h3>
              <p className='text-[#DAC5A799] text-[16px] md:text-[18px]'>I take time to understand your business needs and audience to develop a unique concept for your
                website. I'll create wireframes that serve as the foundation for your site's design and functionality.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
              <h3 className='w-full md:w-[250px] text-lg font-medium text-[#DAC5A7]'>SEO RANKING</h3>
              <p className='text-[#DAC5A799] text-[16px] md:text-[18px]'>I'll design a user-friendly interface that is visually appealing and engages your target audience. Your
                website will be created to meet your brand's needs and goals while ensuring a seamless user experience.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-2 md:gap-0'>
              <h3 className='w-full md:w-[250px] text-lg font-medium text-[#DAC5A7]'>SEO SUPPORT</h3>
              <p className='text-[#DAC5A799] text-[16px] md:text-[18px]'>With an interactive prototype, you'll have the ability to test your website's functionality before it goes live. This will ensure that your website's design and user experience are optimized for your audience's needs and preferences.</p>
            </div>
          </div>
        </div>
      </section>


      <img className="w-full h-auto object-cover" src="./Grid (5).svg" alt="" />
      <section className='mt-[100px] md:mt-[150px] mb-[100px] md:mb-[150px] px-4'>
        <div className="text-center">
          <p className='mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]'>Project in mind?</p>
          <h1 className="italic font-light text-[40px] sm:text-[60px] md:text-[80px] leading-tight">
            Let’s make your <br />
            Website shine
          </h1>
          <p className="mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]">
            Premium web design, webflow, and SEO services to <br className="hidden sm:inline" /> help your business stand out.
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
