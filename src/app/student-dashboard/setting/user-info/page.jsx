'use client'

import { useState } from 'react';

export default function Page() {
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  return (
    <div className='border border-primaryLighten2 min-h-[492px] rounded-[8px] w-full pl-[2.569vw] pr-[3.056vw] pt-[46px]'>
      <div className='flex items-center'>
        <h1 className='font-outfit text-[32px] font-semibold leading-[113.3%]'>Email & Password</h1>
      </div>
      <div className='w-[7.431vw] border-[2px] border-primaryLighten2 rounded-[20px] mt-[20px] mb-[46px]'></div>
      <div className='flex flex-col w-fit gap-[14px]'>
        <div className='flex flex-col gap-[32px] w-fit'>
          <div className='flex flex-col gap-[12px]'>
            <label className='text-TextColorSec font-outfit text-[16px] font-semibold leading-[113.3%]'>Email</label>
            <input className='w-[26.875vw] font-outfit text-[20px] font-normal leading-[113.3%] p-[12px] rounded-[4px] border border-primaryLighten2' placeholder='Email' />
          </div>

          <div className='flex gap-[32px]'>
            <div className='flex flex-col gap-[12px]'>
              <label className='text-TextColorSec font-outfit text-[16px] font-semibold leading-[113.3%]'>Old Password</label>
              <div className='w-[21.806vw] pr-[10px] flex items-center rounded-[4px] gap-[10px] outline-primary2 overflow-hidden border border-[rgba(255,219,184,1)]'>
                <input type={showPassword ? "text" : "password"} className='font-outfit text-[20px] font-normal leading-[113.3%] pl-[10px] m-0 w-full p-[12px] outline-none' />
                {!showPassword ?
                  <svg onClick={() => setShowPassword(true)} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#D17721" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#D17721" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  :
                  <svg onClick={() => setShowPassword(false)} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1449_44632)">
                      <path d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003M9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 1L23 23" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1449_44632">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              </div>
            </div>
            <div className='flex flex-col gap-[12px]'>
              <label className='text-TextColorSec font-outfit text-[16px] font-semibold leading-[113.3%]'>New Password</label>
              <div className='w-[21.806vw] pr-[10px] flex items-center center rounded-[4px] gap-[10px] outline-primary2 overflow-hidden border border-[rgba(255,219,184,1)]'>
                <input type={showPassword2 ? "text" : "password"} className='font-outfit text-[20px] font-normal leading-[113.3%] pl-[10px] m-0 w-full p-[12px] outline-none' />
                {!showPassword2 ?
                  <svg onClick={() => setShowPassword2(true)} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#D17721" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#D17721" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  :
                  <svg onClick={() => setShowPassword2(false)} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1449_44632)">
                      <path d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003M9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 1L23 23" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1449_44632">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              </div>
            </div>
          </div>
        </div>
        <p className='self-end font-outfit text-primary text-[18px] font-medium leading-normal'>Forget your password?</p>
      </div>
      <button className='hover:bg-primary2 hover:text-[white] transition-all duration-200 text-primary2 border rounded-[4px] border-primary2 px-[16px] py-[6px] font-outfit text-[18px] font-medium leading-normal mt-[9px]'>Update</button>
    </div>
  )
}
