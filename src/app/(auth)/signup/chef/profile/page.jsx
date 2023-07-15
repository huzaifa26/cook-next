import React from 'react'
import ChangeImage from "@/assets/Signup/ChangeImage.png"
import Image from 'next/image'

export default function page() {
  return (
    <>
      <div className='w-fit m-auto flex flex-col gap-[12px] pt-[37px]'>
        <h1 className='text-primary2 text-center font-rubik text-[32px] font-semibold leading-[normal]'>Profile Photo</h1>
        <p className='text-[#ADABAB] text-center font-outfit text-[16px] font-normal leading-[normal]'>Chefs who look friendly and professional get the most students</p>
      </div>

      <div className='ml-[3.264vw] mr-[3.889vw]'>
        <div>
          <Image src={ChangeImage} alt='' className='w-[328px] h-[328px]' />
          <div>
            <p className=''>Maximum size 5 MB. Allowed formats: PNG, JPG, SVG</p>
            <button className='flex justify-center items-center gap-[8px]'>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 15V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V15" stroke="#403D39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.5 8L12.5 3L7.5 8" stroke="#403D39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 3V15" stroke="#403D39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              upload
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
