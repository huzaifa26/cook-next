import React from 'react'
import Facebook from "@/assets/Signup/Facebook.svg";
import Google from "@/assets/Signup/Google.svg";
import Image from 'next/image';

export default function page() {
  return (
    <div className='border border-primaryLighten2 min-h-[648px] rounded-[8px] w-full pl-[2.569vw] pr-[3.056vw] pt-[46px]'>
      <div className='flex justify-between items-center'>
        <h1 className='font-outfit text-[32px] font-semibold leading-[113.3%]'>Account Settings</h1>
        <p className='text-primary2 font-outfit text-[20px] font-semibold leading-[150%]'>Student</p>
      </div>
      <div className='w-[7.431vw] border-[2px] border-primaryLighten2 rounded-[20px] mt-[20px] mb-[46px]'></div>

      <div className='flex justify-between'>
        <div className='flex flex-col gap-[32px]'>
          <div className='flex flex-col gap-[12px]'>
            <label className='text-TextColorSec font-outfit text-[16px] font-semibold leading-[113.3%]'>Name</label>
            <input className='w-[26.875vw] font-outfit text-[20px] font-normal leading-[113.3%] p-[12px] rounded-[4px] border border-primaryLighten2' placeholder='Name' />
          </div>
          <div className='flex flex-col gap-[12px]'>
            <label className='text-TextColorSec font-outfit text-[16px] font-semibold leading-[113.3%]'>Timezone</label>

            <div style={false ? { borderBottomLeftRadius: "0", borderBottomRightRadius: "0" } : {}} onClick={''} className='w-[26.875vw] cursor-pointer p-[12px] rounded-[4px] flex relative border border-primaryLighten2'>
              <p name="" className='text-[20px] font-normal leading-[113.3%] flex-1' id="">Kyiv GMT +3:00</p>
              <svg style={false ? { transform: "rotate(-45deg)" } : {}} className='transition-all duration-200 self-center mr-[20px]' width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.18205 6.40236C5.79792 6.76062 5.20208 6.76062 4.81795 6.40236L0.861155 2.71208C0.197273 2.09292 0.635403 0.980775 1.5432 0.980775L9.4568 0.980776C10.3646 0.980776 10.8027 2.09292 10.1388 2.71208L6.18205 6.40236Z" fill="#D27722" />
              </svg>
            </div>

          </div>
        </div>
        <svg width="226" height="226" viewBox="0 0 226 226" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="113" cy="113" r="113" fill="#D9D9D9" />
        </svg>
      </div>

      <div className='mt-[29px] flex flex-col gap-[29px]'>
        <h2 className='text-TextColorSec font-outfit text-[16px] font-semibold leading-[113.3%]'>Connected services</h2>
        <div className='flex gap-[16px]'>
          <button className='flex hover:bg-primaryLighten2  transition-all duration-200 items-center justify-left px-[12px] gap-[14px] w-[15.625vw] xsm:w-full py-[6px] border border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[150%]'>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="31.6838" rx="3" fill="white" />
              <path d="M27.2655 26.9967H22.5241V19.6446C22.5241 17.8914 22.4925 15.6345 20.0581 15.6345C17.5886 15.6345 17.2108 17.5447 17.2108 19.517V26.9962H12.4694V11.8773H17.0211V13.9435H17.0848C17.5404 13.1723 18.1986 12.5379 18.9895 12.1078C19.7803 11.6777 20.6742 11.4681 21.5758 11.5013C26.3815 11.5013 27.2675 14.6311 27.2675 18.7027L27.2655 26.9967ZM7.1195 9.81067C6.57531 9.81076 6.04329 9.65108 5.59076 9.3518C5.13822 9.05252 4.7855 8.62708 4.57716 8.1293C4.36882 7.63152 4.31421 7.08375 4.42029 6.55525C4.52636 6.02675 4.78833 5.54126 5.17307 5.16018C5.5578 4.7791 6.04803 4.51954 6.58174 4.41432C7.11546 4.3091 7.66869 4.36296 8.1715 4.56907C8.67431 4.77519 9.10409 5.1243 9.40651 5.57227C9.70893 6.02024 9.87041 6.54695 9.87051 7.08578C9.87057 7.44356 9.79945 7.79784 9.66124 8.1284C9.52302 8.45896 9.32043 8.75933 9.06497 9.01236C8.80952 9.26539 8.50621 9.46612 8.17241 9.6031C7.8386 9.74007 7.48083 9.8106 7.1195 9.81067ZM9.4902 26.9967H4.74386V11.8773H9.4902V26.9967ZM29.6293 0.00215867H2.36132C1.74241 -0.0047569 1.14602 0.231903 0.703253 0.660134C0.260483 1.08837 0.00755341 1.67313 0 2.28594V29.3974C0.00729489 30.0105 0.260076 30.5956 0.702831 31.0243C1.14559 31.453 1.74211 31.6901 2.36132 31.6836H29.6293C30.2497 31.6913 30.8479 31.4548 31.2924 31.0262C31.7369 30.5975 31.9914 30.0117 32 29.3974V2.28398C31.9912 1.66996 31.7365 1.08453 31.292 0.656308C30.8475 0.228088 30.2494 -0.00789643 29.6293 0.000201749" fill="#0A66C2" />
            </svg>
            Linkedin
            <div className='flex-1 flex justify-end'>
              <svg className='' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </button>
          <button className='flex hover:bg-primaryLighten2  transition-all duration-200 items-center justify-left px-[12px] gap-[14px] w-[15.625vw] xsm:w-full py-[6px] border border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[150%]'>
            <Image src={Facebook} alt="" />
            Facebook
          </button>
          <button className='hover:bg-primaryLighten2 transition-all duration-200 flex items-center justify-left px-[12px] gap-[14px] w-[15.625vw] xsm:min-w-[90vw] xsm:w-full py-[6px] border border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[150%]'>
            <Image src={Google} alt="" />
            Google
          </button>
        </div>
      </div>


      <div className='flex justify-between mt-[74px] mb-[66px]'>
        <button className='hover:bg-primary2 hover:text-[white] transition-all duration-200 text-primary2 border rounded-[4px] border-primary2 px-[16px] py-[6px] font-outfit text-[18px] font-medium leading-normal '>Update</button>
        <button className='hover:text-primary2 hover:bg-[white] transition-all duration-200 group bg-primary2 text-[white] border rounded-[4px] border-primary2 px-[16px] py-[6px] font-outfit text-[18px] font-medium leading-normal flex gap-[8px] items-center'>
          Delete
          <svg className='group-hover:stroke-primary2 transition-all duration-200 stroke-[white]' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.25 5H3.75H15.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.25 5V15.5C14.25 15.8978 14.092 16.2794 13.8107 16.5607C13.5294 16.842 13.1478 17 12.75 17H5.25C4.85218 17 4.47064 16.842 4.18934 16.5607C3.90804 16.2794 3.75 15.8978 3.75 15.5V5M6 5V3.5C6 3.10218 6.15804 2.72064 6.43934 2.43934C6.72064 2.15804 7.10218 2 7.5 2H10.5C10.8978 2 11.2794 2.15804 11.5607 2.43934C11.842 2.72064 12 3.10218 12 3.5V5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.5 8.75V13.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.5 8.75V13.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
