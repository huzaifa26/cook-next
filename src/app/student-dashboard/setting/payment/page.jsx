'use client'

import { useState } from 'react';

export default function Page() {

  return (
    <div className='border border-primaryLighten2 xsm:border-0 min-h-[492px] rounded-[8px] w-full pl-[2.569vw] pr-[3.056vw] pt-[46px]'>
      <div className='flex items-center'>
        <h1 className='font-outfit text-[32px] font-semibold leading-[113.3%]'>Link a card</h1>
      </div>
      <div className='w-[7.431vw] border-[2px] border-primaryLighten2 rounded-[20px] mt-[20px] mb-[56px] xsm:border-0'></div>
      <div className='flex flex-col w-full gap-[14px]'>
        <div className='border border-primaryLighten2 px-[1.667vw] py-[16px] flex justify-between items-center w-full'>
          <div className='flex items-center gap-[1.528vw]'>
            <svg width="63" height="39" viewBox="0 0 63 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1456_47827)">
                <path d="M40.0168 4.1709H22.9824V34.8292H40.0168V4.1709Z" fill="#FF5F00" />
                <path d="M24.064 19.4999C24.064 13.5415 26.8219 7.85404 31.4726 4.1707C23.0365 -2.4918 10.8151 -1.0293 4.16357 7.47487C-2.48794 15.9249 -1.02785 28.1665 7.46228 34.829C14.5464 40.4082 24.4425 40.4082 31.5267 34.829C26.8219 31.1457 24.064 25.4582 24.064 19.4999Z" fill="#EB001B" />
                <path d="M62.9998 19.4999C62.9998 30.279 54.2934 38.9999 43.532 38.9999C39.1517 38.9999 34.9337 37.5374 31.5269 34.829C39.9629 28.1665 41.423 15.9249 34.7715 7.4207C33.7981 6.22904 32.7166 5.09154 31.5269 4.1707C39.9629 -2.4918 52.2384 -1.0293 58.8359 7.47487C61.5397 10.8874 62.9998 15.1124 62.9998 19.4999Z" fill="#F79E1B" />
                <path d="M61.1613 31.5791V30.9291H61.4316V30.8208H60.7827V30.9291H61.0531V31.5791H61.1613ZM62.405 31.5791V30.8208H62.1887L61.9724 31.3625L61.7561 30.8208H61.5398V31.5791H61.702V30.9833L61.9183 31.4708H62.0806L62.2969 30.9833V31.5791H62.405Z" fill="#F79E1B" />
              </g>
              <defs>
                <clipPath id="clip0_1456_47827">
                  <rect width="63" height="39" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className='text-[black] font-outfit text-[24px] font-semibold leading-[113.3%]'>*1234</p>
          </div>
          <button className='hover:text-primary2 hover:bg-[white] transition-all duration-200 group bg-primary2 text-[white] border rounded-[4px] border-primary2 px-[16px] py-[6px] font-outfit text-[18px] font-medium leading-normal flex gap-[8px] items-center'>
            Remove
          </button>
        </div>
        <div className='border border-primaryLighten2 px-[1.667vw] py-[16px] flex justify-between items-center w-full'>
          <div className='flex items-center gap-[1.528vw]'>
            <svg width="63" height="39" viewBox="0 0 63 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1456_47827)">
                <path d="M40.0168 4.1709H22.9824V34.8292H40.0168V4.1709Z" fill="#FF5F00" />
                <path d="M24.064 19.4999C24.064 13.5415 26.8219 7.85404 31.4726 4.1707C23.0365 -2.4918 10.8151 -1.0293 4.16357 7.47487C-2.48794 15.9249 -1.02785 28.1665 7.46228 34.829C14.5464 40.4082 24.4425 40.4082 31.5267 34.829C26.8219 31.1457 24.064 25.4582 24.064 19.4999Z" fill="#EB001B" />
                <path d="M62.9998 19.4999C62.9998 30.279 54.2934 38.9999 43.532 38.9999C39.1517 38.9999 34.9337 37.5374 31.5269 34.829C39.9629 28.1665 41.423 15.9249 34.7715 7.4207C33.7981 6.22904 32.7166 5.09154 31.5269 4.1707C39.9629 -2.4918 52.2384 -1.0293 58.8359 7.47487C61.5397 10.8874 62.9998 15.1124 62.9998 19.4999Z" fill="#F79E1B" />
                <path d="M61.1613 31.5791V30.9291H61.4316V30.8208H60.7827V30.9291H61.0531V31.5791H61.1613ZM62.405 31.5791V30.8208H62.1887L61.9724 31.3625L61.7561 30.8208H61.5398V31.5791H61.702V30.9833L61.9183 31.4708H62.0806L62.2969 30.9833V31.5791H62.405Z" fill="#F79E1B" />
              </g>
              <defs>
                <clipPath id="clip0_1456_47827">
                  <rect width="63" height="39" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className='text-[black] font-outfit text-[24px] font-semibold leading-[113.3%]'>*1234</p>
          </div>
          <button className='hover:text-primary2 hover:bg-[white] transition-all duration-200 group bg-primary2 text-[white] border rounded-[4px] border-primary2 px-[16px] py-[6px] font-outfit text-[18px] font-medium leading-normal flex gap-[8px] items-center'>
            Remove
          </button>
        </div>

        <button className='hover:bg-primary2 self-end xsm:self-start hover:text-[white] transition-all duration-200 text-primary2 border rounded-[4px] border-primary2 px-[16px] py-[6px] font-outfit text-[18px] font-medium leading-normal mt-[43px]'>Add new card</button>
      </div>
    </div>
  )
}
