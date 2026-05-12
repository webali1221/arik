import React from 'react'

function page() {
    return (
        <div>
            <div className="w-[490px] rounded-[3px] text-[#DAC5A799] font-light h-[350px] bg-[#DAC5A70D] p-[48px] flex flex-col justify-center gap-[30px]">
                <div className="">
                    <img className='w-[40px]' src="/logo 3.svg" alt="" />
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <h3 className='text-[20px] text-[#DAC5A7]'>Amazing Results with Arik’s Premium Web <br />
                        Design Services.</h3>
                    <p>Get custom web development solutions that <br />
                        are tailored to your specifications, designed <br />
                        to deliver a flawless user experience.</p>
                </div>
                <div className="flex items-center gap-[10px]">
                    <img src="./person.svg" alt="" />
                    <div >
                        <h3 className='text-[17px] text-[#DAC5A7]'>John Smith</h3>
                        <p>ABC Company</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page