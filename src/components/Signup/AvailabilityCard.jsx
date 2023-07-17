'use client'
import React, { useState } from 'react'

export default function AvailabilityCard({ title }) {
  const [showTime, setShowTime] = useState(false)
  const [array, setArray] = useState([0])
  return (
    <div className='flex flex-col gap-[16px]'>
      <div className='flex items-center gap-[12px]'>
        <input onChange={(e) => setShowTime(e.target.checked)} className='myCheckbox min-w-[23px] min-h-[23px]' type="checkbox" name="" id="monday" />
        <label className='font-outfit font-normal text-[18px] leading-normal cursor-pointer select-none' htmlFor="monday">{title}</label>
      </div>

      {
        showTime &&
        array.map((a, index) => {
          return (
            <div className='flex items-center h-fit gap-[16px] mt-[20px]'>
              <div className='w-[124px] h-[40px] border border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px] '>
                <p className='font-outfit text-[16px] font-medium leading-normal flex-1'>4:00 PM</p>
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
                </svg>
              </div>
              <svg width="7" height="2" viewBox="0 0 7 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.188 1.684V0.154H6.11V1.684H0.188Z" fill="#D27722" />
              </svg>
              <div className='w-[124px] h-[40px] border border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px] '>
                <p className='font-outfit text-[16px] font-medium leading-normal flex-1'>8:00 PM</p>
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
                </svg>
              </div>
              {index === 0 ?
                <svg className='cursor-pointer' onClick={() => setArray((prev) => [...prev, 0])} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#D27722" />
                  <path d="M12 7V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7 12H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg> :
                <svg className='cursor-pointer' onClick={(e) => setArray((prev) => { return prev.filter((it, ind) => { return ind !== index })})} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#FFDBB8" />
                  <path d="M7 12H17" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              }
            </div >
          )
        })
      }
    </div>
  )
}
