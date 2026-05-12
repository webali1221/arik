import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const page = () => {
  return (
    <div className='text-white'>
      <section className='mt-[120px] mb-[100px] flex flex-col justify-center items-center text-center px-4'>
        <h1 className='font-light text-[80px] leading-tight'>Space</h1>
        <p className='mt-5 text-[#DAC5A799] text-[16px] text-[18px] font-poppins'>Modern and visually appealing website that <br />
          reflected the client's brand.</p>
        <div className='flex gap-[50px] justify-center items-center mt-[50px] mb-[50px]'>
          <div className='transition hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-[220px] h-[75px] bg-[#DAC5A70D] flex flex-col items-center justify-center'>
            <p className='text-[#DAC5A799] text-[16px] font-poppins'>Client</p>
            <h3 className='text-[18px] font-poppins'>Pawel Gola</h3>
          </div>
          <div className='transition hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-[220px] h-[75px] bg-[#DAC5A70D] flex flex-col items-center justify-center'>
            <p className='text-[#DAC5A799] text-[16px] font-poppins'>Timeline</p>
            <h3 className='text-[18px] font-poppins'>3 Weeks</h3>
          </div>
          <div className='transition hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-[220px] h-[75px] bg-[#DAC5A70D] flex flex-col items-center justify-center'>
            <p className='text-[#DAC5A799] text-[16px] font-poppins'>Services</p>
            <h3 className='text-[18px] font-poppins'>Template</h3>
          </div>
          <div className='transition hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer w-[220px] h-[75px] bg-[#DAC5A70D] flex flex-col items-center justify-center'>
            <p className='text-[#DAC5A799] text-[16px] font-poppins'>Website</p>
            <h3 className='text-[18px] font-poppins'>gola.io</h3>
          </div>
        </div>
        <button className='flex items-center mb-[30px] gap-[10px]'>
          <img className='w-[40px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge.svg" alt="" />
          My Services
        </button>
        <img className='w-[1000px]' src="./Grid.svg" alt="" />
      </section>
      <section className='flex items-start justify-center mb-[80px]'>
        <div className='w-[600px]'>
          <p className='text-[#DAC5A799] text-[16px] font-poppins'>About</p>
          <h2 className='text-[35px]'>Concept, Design, and <br />
            Development. All-in-one.</h2>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <div className='bg-[#DAC5A70D] w-[650px] h-[230px] p-[48px] flex flex-col gap-[16px] cursor-pointer transition-all duration-300 hover:scale-105'>
            <h2 className='text-[#DAC5A7] text-[20px]'>Challenge</h2>
            <p className='text-[#DAC5A799] text-[16px] font-poppins'>Our client was struggling to attract and retain customers due to an <br />
              outdated and non-responsive website that didn't align with their <br />
              brand identity.</p>
          </div>
          <div className='bg-[#DAC5A70D] w-[650px] h-[230px] p-[48px] flex flex-col gap-[16px] cursor-pointer transition-all duration-300 hover:scale-105'>
            <h2 className='text-[#DAC5A7] text-[20px]'>Goal</h2>
            <p className='text-[#DAC5A799] text-[16px] font-poppins'>Our goal was to create a modern and visually appealing website that <br />
              reflected the client's brand and delivered a seamless user experience. <br />
              The website needed to be responsive, easy to navigate, and optimized <br />
              for search engines to improve their online visibility.</p>
          </div>
          <div className='bg-[#DAC5A70D] w-[650px] h-[300px] p-[48px] flex flex-col gap-[16px] cursor-pointer transition-all duration-300 hover:scale-105'>
            <h2 className='text-[#DAC5A7] text-[20px]'>Result</h2>
            <p className='text-[#DAC5A799] text-[16px] font-poppins'>Our team developed a custom website design that was not only <br />
              visually stunning but also user-friendly and optimized for search <br />
              engines. The client's website now showcases their products and <br />
              services in a professional and engaging manner, and has seen a <br />
              significant increase in organic traffic and customer engagement. The <br />
              client is thrilled with the final result and has received positive feedback <br />
              from their customers.</p>
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
