'use client'
import React, { useState } from 'react';

export default function DropDown({timeZone,setTimeZone,timing}) {
  const [showTimeZone, setShowTimeZone] = useState(false);

  return (
    <div className='relative'>
      <div style={showTimeZone ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}} onClick={() => setShowTimeZone(!showTimeZone)} className='cursor-pointer w-[124px] h-[40px] border gap-[10px] border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
        <p className='font-outfit text-[16px] font-medium leading-normal flex-1'>{timeZone || '4:00 PM'}</p>
        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
        </svg>
      </div>
      <div style={showTimeZone ? { maxHeight: "204px" } : { maxHeight: "0px", border: "0px solid #000" }} className='overflow-auto overflow-x-hidden z-[2000] absolute w-full left-0 top-full border border-t-0 bg-[white] divide-y divide-primaryLighten2 border-primaryLighten2 rounded-br-[4px] rounded-bl-[4px]'>
        {timing.map((item,index) => {
          return (
            <p key={item+index} onClick={() => { setTimeZone(item); setShowTimeZone(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-medium leading-normal flex-1'>{item}</p>
          )
        })}
      </div>
    </div>
  )
}
