'use client'

import { useState } from 'react';

export default function Page() {

  return (
    <div className='border border-primaryLighten2 xsm:border-0 min-h-[492px] rounded-[8px] w-full pl-[2.569vw] pr-[3.056vw] pt-[46px]'>
      <div className='flex items-center'>
        <h1 className='font-outfit text-[32px] font-semibold leading-[113.3%]'>Email notifications</h1>
      </div>
      <div className='w-[7.431vw] border-[2px] border-primaryLighten2 rounded-[20px] mt-[20px] mb-[56px] xsm:border-0'></div>
      <div className='flex flex-col w-full gap-[32px] mb-[58px]'>
        <div>
          <div className='flex items-center gap-[12px]'>
            <input className='myCheckbox min-w-[23px] min-h-[23px]' type="checkbox" name="" id="Lesson scheduling" />
            <label className='font-outfit font-medium text-[20px] leading-normal cursor-pointer select-none' htmlFor="Lesson scheduling">Lesson scheduling</label>
          </div>
          <p className='text-TextColorSec ml-[35px] mt-[11px] text-[16px] font-normal leading-normal font-outfit'>Alerts about new lessons and schedule changes.</p>
        </div>
        <div>
          <div className='flex items-center gap-[12px]'>
            <input className='myCheckbox min-w-[23px] min-h-[23px]' type="checkbox" name="" id="Lesson scheduling" />
            <label className='font-outfit font-medium text-[20px] leading-normal cursor-pointer select-none' htmlFor="Lesson scheduling">General reminders</label>
          </div>
          <p className='text-TextColorSec ml-[35px] mt-[11px] text-[16px] font-normal leading-normal font-outfit'>Notifications about lessons, tutor messages, and payments.</p>
        </div>
        <div>
          <div className='flex items-center gap-[12px]'>
            <input className='myCheckbox min-w-[23px] min-h-[23px]' type="checkbox" name="" id="Lesson scheduling" />
            <label className='font-outfit font-medium text-[20px] leading-normal cursor-pointer select-none' htmlFor="Lesson scheduling">Updates, tips and offers</label>
          </div>
          <p className='text-TextColorSec ml-[35px] mt-[11px] text-[16px] font-normal leading-normal font-outfit'>Stay connected with product updates, helpful tips and special offers.</p>
        </div>
        <div>
          <div className='flex items-center gap-[12px]'>
            <input className='myCheckbox min-w-[23px] min-h-[23px]' type="checkbox" name="" id="Lesson scheduling" />
            <label className='font-outfit font-medium text-[20px] leading-normal cursor-pointer select-none' htmlFor="Lesson scheduling">COOK Blog</label>
          </div>
          <p className='text-TextColorSec ml-[35px] mt-[11px] text-[16px] font-normal leading-normal font-outfit'>Occasional newsletter with the latest posts.</p>
        </div>

        <button className='hover:bg-primary2 self-start hover:text-[white] transition-all duration-200 text-primary2 border rounded-[4px] border-primary2 px-[16px] py-[6px] font-outfit text-[18px] font-medium leading-normal mt-[43px]'>Update settings</button>
      </div>
    </div>
  )
}
