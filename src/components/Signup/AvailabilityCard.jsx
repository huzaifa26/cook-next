'use client'
import { useState } from 'react';
import Time from './Time';

export default function AvailabilityCard({ title, setTimings, clearTimings,removeItem }) {
  const [showTime, setShowTime] = useState(false)
  const [array, setArray] = useState([0])

  return (
    <div className='flex flex-col gap-[16px]'>
      <div className='flex items-center gap-[12px]'>
        <input onChange={(e) => { setShowTime(e.target.checked); if (e.target.checked === false) { clearTimings() } }} className='myCheckbox min-w-[23px] min-h-[23px]' type="checkbox" name="" id="monday" />
        <label className='font-outfit font-normal text-[18px] leading-normal cursor-pointer select-none' htmlFor="monday">{title}</label>
      </div>

      {
        showTime &&
        array.map((a, index) => {
          return (
            <Time setTimings={setTimings} index={index} setArray={setArray} array={array} removeItem={removeItem}/>
          )
        })
      }
    </div>
  )
}
