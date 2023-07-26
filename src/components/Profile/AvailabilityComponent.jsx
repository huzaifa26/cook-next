import React from 'react'

export default function AvailabilityComponent() {
  const days = ["SAT 22", "SUN 23", "MON 24", "TUE 25", "WED 26", "THU 27", "FRI 28"];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"
  ];

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
                <p key={idx} className='font-outfit font-medium text-[16px] leading-[24.8px] text-center text-primary2'>{timeSlot}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
