import React from 'react'
import ChangeImage from "@/assets/Signup/ChangeImage.png"
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <div className='w-fit m-auto flex flex-col gap-[12px] pt-[37px] px-[5.139vw]'>
        <h1 className='text-primary2 text-center font-rubik text-[32px] font-semibold leading-[normal]'>Description</h1>
        <p className='text-[#ADABAB] text-center font-outfit text-[16px] font-normal leading-[normal]'>The information you provide will be displayed on your public profile. Please ensure to write it in the language you intend to teach</p>
      </div>

      <div className='ml-[3.264vw] mr-[3.889vw] my-[43px]'>
        <div className='flex flex-col gap-[91px] items-center h-fit'>

          <div className='w-full flex flex-col gap-[24px] '>
            <h2 className='font-rubik text-[20px] font-semibold leading-normal'>1. Introduce yourself</h2>
            <textarea className='resize-none border border-primaryLighten2 p-[16px] rounded-[8px] w-full font-outfit text-[16px] font-normal leading-normal' placeholder='Start writing here...' name="" id="" cols="30" rows="10"></textarea>
            <div className='flex gap-[8px] items-center mt-[-4px]'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1617_48979)">
                  <path d="M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332Z" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 6.6665V9.99984" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 13.3335H10.0083" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1617_48979">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className='font-outfit text-[16px] font-normal leading-normal'>Avoid using your last name or making it look like a resume</p>
            </div>
          </div>

          <div className='w-full flex flex-col gap-[24px] '>
            <h2 className='font-rubik text-[20px] font-semibold leading-normal'>2. Professional experience</h2>
            <textarea className='resize-none border border-primaryLighten2 p-[16px] rounded-[8px] w-full font-outfit text-[16px] font-normal leading-normal' placeholder='Start writing here...' name="" id="" cols="30" rows="10"></textarea>
          </div>

          <div className='w-full flex flex-col gap-[24px] '>
            <h2 className='font-rubik text-[20px] font-semibold leading-normal'>3. Create a catchy headline</h2>
            <textarea className='resize-none border border-primaryLighten2 p-[16px] rounded-[8px] w-full font-outfit text-[16px] font-normal leading-normal' placeholder='Start writing here...' name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>

        <div className='mt-[95px] flex justify-between'>
          <button className="transition-all duration-200 bg-[white] hover:bg-primary2 border-2 border-primary2 text-primary2 hover:text-[white] w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Back</button>
          <button className="transition-all duration-200 bg-primary2 hover:bg-[white] border-2 border-primary2 text-[white] hover:text-primary2 w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Next</button>
        </div>
      </div>
    </>
  )
}
