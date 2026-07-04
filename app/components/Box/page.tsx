import React from 'react'
import { TbPointFilled } from "react-icons/tb";


function page() {
    return (
        <div>
            <div className="w-full max-w-[550px] rounded-[3px] text-[#DAC5A799] font-light min-h-[350px] h-auto bg-[#DAC5A70D] p-6 md:p-[48px] flex flex-col justify-center gap-[30px]">
                <div className="">
                    <h5>Do we Match?</h5>
                    <h3 className='text-[20px] text-[#DAC5A7]'>Development</h3>
                </div>
                <p>Before we start, we determine if and how I can help you. What
                    are your requirements for your new website? Why do you need a
                    new website? What goals do you have, and what problems can
                    we solve with a new website?</p>
                <ul>
                    <li className='flex items-center gap-[10px]'><TbPointFilled /> We get to know each other better</li>
                    <li className='flex items-center gap-[10px]'><TbPointFilled /> Determine how I can best assist you</li>
                    <li className='flex items-center gap-[10px]'><TbPointFilled /> Understand the goals you have for your website</li>
                </ul>
            </div>
        </div>
    )
}

export default page