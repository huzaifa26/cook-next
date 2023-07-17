import React from 'react'
import AmericaIcon from "@/assets/Signup/AmericaIcon.png"
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <div className='ml-[60.998px] mr-[4.931vw] flex flex-col gap-[12px] pt-[37px]'>
        <h1 className='text-primary2 text-center font-rubik text-[32px] font-semibold leading-[normal]'>About</h1>
        <p className='text-[#ADABAB] text-center font-outfit text-[16px] font-normal leading-[normal]'>Start making your tutor profile. It saves your progress as you go. You can finish your sign-up any time.</p>
      </div>

      <form className='flex flex-col gap-[52px] ml-[3.264vw] mr-[3.889vw] my-[43px]' action="">
        <div className='grid gap-[22px] grid-cols-2'>
          <div className='flex flex-col gap-[12px]'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">First Name</label>
            <input className='h-[40px] border border-primaryLighten2 outline-primary2 rounded-[4px] font-outfit text-[16px] font-normal leading-normal p-[8px] ' />
          </div>
          <div className='flex flex-col gap-[12px]'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Last Name</label>
            <input className='h-[40px] border border-primaryLighten2 outline-primary2 rounded-[4px] font-outfit text-[16px] font-normal leading-normal p-[8px] ' />
          </div>
          <div className='flex flex-col gap-[12px]'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Email</label>
            <input className='h-[40px] border border-primaryLighten2 outline-primary2 rounded-[4px] font-outfit text-[16px] font-normal leading-normal p-[8px] ' />
          </div>
          <div className='flex flex-col gap-[12px]'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Country of origin</label>
            <div className='h-[40px] border gap-[10px] border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
              <Image src={AmericaIcon} alt='' className='w-[22px] h-[22px] '/>
              <p className='font-outfit text-[16px] font-normal leading-normal flex-1'>United States</p>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
              </svg>
            </div>
          </div>
        </div>

        <div className='grid gap-[22px] grid-cols-2'>
          <div className='flex flex-col gap-[12px]'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Level</label>
            <div className='h-[40px] border border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
              <p className='font-outfit text-[16px] font-normal leading-normal flex-1'>B2</p>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
              </svg>
            </div>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Language Spoken</label>
            <div className='h-[40px] border border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
              <p className='font-outfit text-[16px] font-normal leading-normal flex-1'>English</p>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
              </svg>
            </div>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Experience level</label>
            <div className='h-[40px] border border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
              <p className='font-outfit text-[16px] font-normal leading-normal flex-1'>1-2 Years</p>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
              </svg>
            </div>
          </div>
          <div className='flex flex-col gap-[12px]'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Subject taught</label>
            <div className='h-[40px] border border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
              <p className='font-outfit text-[16px] font-normal leading-normal flex-1'>Baking</p>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
              </svg>
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-[12px]'>
            <input className='myCheckbox min-w-[23px] min-h-[23px]' type="checkbox" name="" id="ageConsent" />
            <label className='font-outfit font-normal text-[18px] leading-normal cursor-pointer select-none' htmlFor="ageConsent">I confirm I'm over 18</label>
          </div>
          <button className="transition-all duration-200 bg-primary2 hover:bg-[white] border border-primary2 text-[white] hover:text-primary w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Next</button>
        </div>
      </form>
    </div>
  )
}
