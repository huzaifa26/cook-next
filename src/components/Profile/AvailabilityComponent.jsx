import React from 'react'

export default function AvailabilityComponent({ timeSlots, days }) {


  return (
    <div className='flex justify-between mt-[25px]'>
      {days.map((day, index) => (
        <div key={index} className='w-[84px] px-[0.972vw] '>
          <div className='border-t-8 border-primary2'>
            <div className=' m-auto mt-[12px] mb-[24px]'>
              <p className='px-[14px] font-outfit font-normal text-[18px] leading-[27.9px] text-center'>{day}</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
              {timeSlots.map((timeSlot, idx) => (
                <p onClick={() => { console.log(day + " " + timeSlot) }} key={idx} className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>{timeSlot}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
