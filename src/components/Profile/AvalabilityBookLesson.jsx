import React from 'react'

export default function AvalabilityBookLesson() {
  const days = ["SAT 22", "SUN 23", "MON 24", "TUE 25", "WED 26", "THU 27", "FRI 28"];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"
  ];

  return (
    <div className='flex justify-between mt-[25px]'>
      {days.map((day, index) => (
        <div key={index} className='w-[38px]'>
          <div className='border-t-8 border-primary2'>
            <div className=' m-auto mt-[12px] mb-[24px]'>
              <p className='px-[0px] font-outfit font-normal text-[16px] leading-[24.8px] text-center'>{day}</p>
            </div>
            <div className='flex flex-col gap-[10px]'>
              {timeSlots.map((timeSlot, idx) => (
                <p key={idx} className='font-outfit font-medium text-[14px] leading-[21.7px] text-center text-primary2'>{timeSlot}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
