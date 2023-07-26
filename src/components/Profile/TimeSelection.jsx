import Image from 'next/image'
import React from 'react'
import AvalabilityBookLesson from './AvalabilityBookLesson'

export default function TimeSelection({ tutor, closeModal }) {

  return (
    <div className='w-[100vw] h-[100vh] fixed z-[3000] top-0 left-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center'>
      <div className='w-[399px] h-[622px] p-[24px] rounded-[14px] bg-[white] divide-y-2 divide-primaryLighten2 flex flex-col gap-[24px]'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-[16px] items-center'>
            <Image className='rounded-[7px]' loader={() => tutor?.picture || tutor?.image} src={tutor?.picture || tutor?.image} width={36} height={36} alt='' />
            <h3 className='text-[16px] font-bold leading-[24.8px] font-outfit'>Book a 60-min trial lesson</h3>
          </div>
          <svg className='cursor-pointer' onClick={closeModal} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 6L18 18" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className='pt-[24px]'>
          <div className='flex justify-between items-center'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="4" fill="#FFDBB8" />
              <path d="M19 22L13 16L19 10" stroke="#403D39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h4 className='font-kanit text-[16px] font-medium leading-[24.8px]'>Aug 2-8, 2023</h4>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="4" fill="#FFDBB8" />
              <path d="M13 22L19 16L13 10" stroke="#403D39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <AvalabilityBookLesson />
        </div>
        <div className='pt-[24px] flex items-center gap-[22px]'>
          <p className='text-[16px] font-outfit font-medium leading-[24.8px]'>The calendar is in your time zone Europe/Kiev 09:00</p>
          <button className='border border-primary2 transition-all duration-200 bg-primary2 hover:bg-[white] px-[16px] py-[8px] rounded-[4px] text-[white] hover:text-primary2 font-outfit font-medium text-[18px] leading-normal'>Confirm</button>
        </div>
      </div>
    </div>
  )
}