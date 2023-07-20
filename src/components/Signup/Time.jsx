'use client'
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DropDown from './DropDown';


export default function Time({ setTimings, index, array, setArray, removeItem, propId, proptimeZone, proptimeZone2 }) {

  const [timeZone, setTimeZone] = useState(proptimeZone || null);

  const [timeZone2, setTimeZone2] = useState(proptimeZone2 || null);

  console.log(timeZone,timeZone2)

  const [id, setId] = useState(propId || uuidv4());

  useEffect(() => {
    if (timeZone !== null && timeZone2 !== null) {
      setTimings({ id: id, startTime: timeZone, endTime: timeZone2 });
    }
  }, [timeZone, timeZone2])

  return (
    <div className='flex items-center h-fit gap-[16px] mt-[20px]'>
      <DropDown timeZone={timeZone} setTimeZone={(item) => setTimeZone(item)} timing={['4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM']} />
      <svg width="7" height="2" viewBox="0 0 7 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.188 1.684V0.154H6.11V1.684H0.188Z" fill="#D27722" />
      </svg>
      <DropDown timeZone={timeZone2} setTimeZone={(item) => setTimeZone2(item)} timing={['8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM', '12:00 AM', '01:00 PM']} />
      {index === 0 ?
        <svg className='cursor-pointer' onClick={() => setArray((prev) => [...prev, 0])} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#D27722" />
          <path d="M12 7V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7 12H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg> :
        <svg className='cursor-pointer' onClick={(e) => { setArray((prev) => { return prev.filter((it, ind) => { return ind !== index }) }); removeItem(id) }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="12" fill="#FFDBB8" />
          <path d="M7 12H17" stroke="#D27722" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      }
    </div >
  )
}
