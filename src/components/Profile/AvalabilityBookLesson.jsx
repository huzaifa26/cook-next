import React from 'react'

export default function AvalabilityBookLesson({ days, timeSlots, setTime }) {
  // const [daysArray,setDaysArray]=useState(days);

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
                <p onClick={() => { setTime(day + " " + timeSlot) }} key={idx} className='cursor-pointer font-outfit font-medium text-[14px] leading-[21.7px] text-center text-primary2'>{timeSlot}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}