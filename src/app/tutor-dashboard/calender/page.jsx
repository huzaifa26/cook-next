'use client'
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function Page() {
  return (
    <div className='flex gap-[70px] pl-[64px]'>
      <div className='flex gap-[10px] flex-col mt-[62px]'>
        <button className='w-[271px] h-[39px] border-2 border-primary2 rounded-[4px] text-primary2 hover:bg-primary2 hover:text-[white] transition-all duration-200 font-outfit text-[18px] font-medium leading-normal'>Add timeoff</button>
        <button className='w-[271px] h-[39px] border-2 border-primary2 rounded-[4px] bg-primary2 text-[white] hover:bg-[white] hover:text-primary2 transition-all duration-200 font-outfit text-[18px] font-medium leading-normal'>Set up availability</button>
      </div>
      <div className='flex-1'>
        <FullCalendar
          plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
          initialView="timeGridWeek"
          height={'70vh'}
        />
      </div>
    </div>
  )
}
