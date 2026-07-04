import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const page = () => {
  return (
    <div className='text-white font-poppins'>
      <section className='flex flex-col lg:flex-row mt-[100px] md:mt-[200px] items-center lg:items-start justify-center gap-8 px-4'>
        <img className="w-full max-w-[400px] lg:max-w-none h-auto" src="./Image (43).svg" alt="" />
        <div className="flex flex-col w-full max-w-[834px]">
          <h1 className='font-light text-[40px] sm:text-[60px] md:text-[80px] leading-tight text-center lg:text-left'>Arik <br className="hidden sm:inline" /> Andersson</h1>
          <p className='mt-5 text-[#DAC5A799] text-[16px] md:text-[18px] text-center lg:text-left'>Delivering Premium Web Design and Development <br className="hidden sm:inline" /> Services to Boost Your Online Presence.</p>
          <button className='text-[#DAC5A799] flex items-center justify-center lg:justify-start mt-[40px] mb-[40px] gap-[10px]'><img className='w-[40px] transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' src="./Badge.svg" alt="" />About Me</button>
          
          <div className='w-full max-w-[800px] h-auto p-6 md:p-[48px] bg-[#DAC5A70D] flex flex-col gap-[10px]'>
            <p className='text-[#DAC5A799]'>Arik Andersson</p>
            <h1 className='text-[24px] md:text-[40px] leading-snug'>Your Partner in Bringing Your Web Design Vision to Life</h1>
            <p className='mt-5 text-[#DAC5A799] text-[15px] md:text-[17px]'>As a freelance web designer and developer, I bring a unique combination of creativity and
              technical expertise to every project. With a keen eye for design and a passion for
              delivering user-friendly web experiences, I work closely with clients to understand their
              needs and bring their vision to life.</p>
            <p className='mt-5 text-[#DAC5A799] text-[15px] md:text-[17px]'>My approach is rooted in collaboration and communication, and I take pride in my ability
              to explain technical concepts in simple terms. Whether I'm developing a new website from
              scratch or optimizing an existing site for search engines, I always strive for excellence in
              both form and function. With a dedication to quality and a commitment to staying on
              top of the latest trends and technologies, I am confident in my ability to deliver
              exceptional results that exceed my clients' expectations.</p>

            <img className='w-full max-w-[700px] h-auto mt-[15px]' src="./img-wrr.svg" alt="" />
          </div>
          
          <div className='mt-[20px] mb-[20px] flex gap-[15px] md:gap-[33px] w-full flex-wrap justify-center lg:justify-start'>
            <div className='transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer flex w-[45%] sm:w-[245px] h-[50px] bg-[#DAC5A70D] items-center justify-center gap-[10px] md:gap-[20px] text-xs md:text-sm'>
              <img src="./inslogo.svg" alt="" /> <p>Instagram</p> <img src="./Vector (6).svg" alt="" />
            </div>
            <div className='transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer flex w-[45%] sm:w-[245px] h-[50px] bg-[#DAC5A70D] items-center justify-center gap-[10px] md:gap-[20px] text-xs md:text-sm'>
              <img src="./twiter.svg" alt="" /> <p>Twitter</p> <img src="./Vector (6).svg" alt="" />
            </div>
            <div className='transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer flex w-[45%] sm:w-[245px] h-[50px] bg-[#DAC5A70D] items-center justify-center gap-[10px] md:gap-[20px] text-xs md:text-sm'>
              <img src="./facebook.svg" alt="" /> <p>Facebook</p> <img src="./Vector (6).svg" alt="" />
            </div>
            <div className='transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer flex w-[45%] sm:w-[245px] h-[50px] bg-[#DAC5A70D] items-center justify-center gap-[10px] md:gap-[20px] text-xs md:text-sm'>
              <img src="./behance.svg" alt="" /> <p>Behance</p> <img src="./Vector (6).svg" alt="" />
            </div>
            <div className='transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer flex w-[45%] sm:w-[245px] h-[50px] bg-[#DAC5A70D] items-center justify-center gap-[10px] md:gap-[20px] text-xs md:text-sm'>
              <img src="./dribbling.svg" alt="" /> <p>Dribbble</p> <img src="./Vector (6).svg" alt="" />
            </div>
            <div className='transition hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer flex w-[45%] sm:w-[245px] h-[50px] bg-[#DAC5A70D] items-center justify-center gap-[10px] md:gap-[20px] text-xs md:text-sm'>
              <img src="./pinterest.svg" alt="" /> <p>Pinterest</p> <img src="./Vector (6).svg" alt="" />
            </div>
          </div>
          
          <div className='w-full max-w-[834px] h-auto p-6 md:p-[48px] bg-[#DAC5A70D] mb-[100px]'>
            <p className='text-[#DAC5A799] '>Awards</p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-[40px] mb-[30px] border-b-[1px] border-b-[#DAC5A726] pb-[40px]">
              <h3 className='w-full sm:w-[620px] text-lg md:text-xl'>Awwwards SOTD</h3>
              <p className="text-sm">2023</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-[40px] mb-[30px] border-b-[1px] border-b-[#DAC5A726] pb-[40px]">
              <h3 className='w-full sm:w-[620px] text-lg md:text-xl'>CSSDA SOTD</h3>
              <p className="text-sm">2023</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-[40px] mb-[30px] border-b-[1px] border-b-[#DAC5A726] pb-[40px]">
              <h3 className='w-full sm:w-[620px] text-lg md:text-xl'>Awwwards Website of the Month</h3>
              <p className="text-sm">2023</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-[40px] mb-[30px] border-b-[1px] border-b-[#DAC5A726] pb-[40px]">
              <h3 className='w-full sm:w-[620px] text-lg md:text-xl'>CSSDA SOTD</h3>
              <p className="text-sm">2023</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-[40px] mb-[30px] border-b-[1px] border-b-[#DAC5A726] pb-[40px]">
              <h3 className='w-full sm:w-[620px] text-lg md:text-xl'>Awwwards SOTD</h3>
              <p className="text-sm">2023</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-[40px] mb-[30px]">
              <h3 className='w-full sm:w-[620px] text-lg md:text-xl'>Awwwards Website of the Year</h3>
              <p className="text-sm">2023</p>
            </div>
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
