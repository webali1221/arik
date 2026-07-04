import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const page = () => {
  return (
    <div className='text-white font-poppins'>
      <section className='mt-[100px] md:mt-[120px] mb-[100px] flex flex-col justify-center items-center text-center px-4'>
        <h1 className='font-light text-[40px] sm:text-[60px] md:text-[80px] leading-tight'>Space</h1>
        <p className='mt-5 text-[#DAC5A799] text-[16px] md:text-[18px]'>Modern and visually appealing website that <br className="hidden sm:inline" /> reflected the client's brand.</p>
        <div className='grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-[50px] justify-center items-center mt-[50px] mb-[50px] px-4 w-full max-w-[1000px]'>
          <div className='transition hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-full md:w-[220px] h-[75px] bg-[#DAC5A70D] flex flex-col items-center justify-center'>
            <p className='text-[#DAC5A799] text-[14px] md:text-[16px]'>Client</p>
            <h3 className='text-[16px] md:text-[18px] font-medium'>Pawel Gola</h3>
          </div>
          <div className='transition hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-full md:w-[220px] h-[75px] bg-[#DAC5A70D] flex flex-col items-center justify-center'>
            <p className='text-[#DAC5A799] text-[14px] md:text-[16px]'>Timeline</p>
            <h3 className='text-[16px] md:text-[18px] font-medium'>3 Weeks</h3>
          </div>
          <div className='transition hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-full md:w-[220px] h-[75px] bg-[#DAC5A70D] flex flex-col items-center justify-center'>
            <p className='text-[#DAC5A799] text-[14px] md:text-[16px]'>Services</p>
            <h3 className='text-[16px] md:text-[18px] font-medium'>Template</h3>
          </div>
          <div className='transition hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-full md:w-[220px] h-[75px] bg-[#DAC5A70D] flex flex-col items-center justify-center'>
            <p className='text-[#DAC5A799] text-[14px] md:text-[16px]'>Website</p>
            <h3 className='text-[16px] md:text-[18px] font-medium'>gola.io</h3>
          </div>
        </div>
        <button className='flex items-center mb-[30px] gap-[10px]'>
          <img className='w-[40px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge.svg" alt="" />
          My Services
        </button>
        <img className='w-full max-w-[1000px] h-auto px-4' src="./Grid.svg" alt="" />
      </section>
      <section className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 mb-[80px] px-4 max-w-7xl mx-auto'>
        <div className='w-full lg:w-[40%] max-w-[600px] text-center lg:text-left'>
          <p className='text-[#DAC5A799] text-[16px]'>About</p>
          <h2 className='text-[28px] md:text-[35px] leading-tight'>Concept, Design, and <br className="hidden sm:inline" /> Development. All-in-one.</h2>
        </div>
        <div className='flex flex-col gap-[20px] w-full lg:w-[60%] max-w-[650px]'>
          <div className='bg-[#DAC5A70D] w-full min-h-[230px] h-auto p-6 md:p-[48px] flex flex-col gap-[16px] cursor-pointer transition-all duration-300 hover:scale-105'>
            <h2 className='text-[#DAC5A7] text-[20px]'>Challenge</h2>
            <p className='text-[#DAC5A799] text-[15px] md:text-[16px]'>Our client was struggling to attract and retain customers due to an outdated and non-responsive website that didn't align with their brand identity.</p>
          </div>
          <div className='bg-[#DAC5A70D] w-full min-h-[230px] h-auto p-6 md:p-[48px] flex flex-col gap-[16px] cursor-pointer transition-all duration-300 hover:scale-105'>
            <h2 className='text-[#DAC5A7] text-[20px]'>Goal</h2>
            <p className='text-[#DAC5A799] text-[15px] md:text-[16px]'>Our goal was to create a modern and visually appealing website that reflected the client's brand and delivered a seamless user experience. The website needed to be responsive, easy to navigate, and optimized for search engines to improve their online visibility.</p>
          </div>
          <div className='bg-[#DAC5A70D] w-full min-h-[300px] h-auto p-6 md:p-[48px] flex flex-col gap-[16px] cursor-pointer transition-all duration-300 hover:scale-105'>
            <h2 className='text-[#DAC5A7] text-[20px]'>Result</h2>
            <p className='text-[#DAC5A799] text-[15px] md:text-[16px]'>Our team developed a custom website design that was not only visually stunning but also user-friendly and optimized for search engines. The client's website now showcases their products and services in a professional and engaging manner, and has seen a significant increase in organic traffic and customer engagement. The client is thrilled with the final result and has received positive feedback from their customers.</p>
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
          <button className='transition hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer flex mx-auto mt-[30px] rounded-[5px] items-center gap-[10px] bg-[white] p-[10px] text-[black]'>
            GET IN TOUCH <MdArrowOutward />
          </button>
        </div>
      </section>
    </div>
  )
}

export default page
