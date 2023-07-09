'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function layout({ children }) {
  const pathname = usePathname()
  return (
    <div className='px-[12.153vw] flex gap-x-[20px] mt-[50px]'>
      <div className='flex flex-col gap-[25px] mt-[42px]'>
        <Link href="/student-dashboard/setting">
          <button className={pathname === '/student-dashboard/setting' ? 'text-[white] font-outfit text-[20px] font-semibold h-[55px] text-left px-[16px] w-[281px] rounded-[8px] bg-primary2' : 'text-[#252422] font-outfit text-[20px] font-semibold h-[55px] text-left px-[16px] border-b border-[#FFDBB8] w-[281px]'}>Account</button>
        </Link>
        <Link href="/student-dashboard/setting/user-info">
          <button className={pathname === '/student-dashboard/setting/user-info' ? 'text-[white] font-outfit text-[20px] font-semibold h-[55px] text-left px-[16px] w-[281px] rounded-[8px] bg-primary2' : 'text-[#252422] font-outfit text-[20px] font-semibold h-[55px] text-left px-[16px] border-b border-[#FFDBB8] w-[281px]'}>Email & Password</button>
        </Link>
        <Link href="/student-dashboard/setting/payment">
          <button className={pathname === '/student-dashboard/setting/payment' ? 'text-[white] font-outfit text-[20px] font-semibold h-[55px] text-left px-[16px] w-[281px] rounded-[8px] bg-primary2' : 'text-[#252422] font-outfit text-[20px] font-semibold h-[55px] text-left px-[16px] border-b border-[#FFDBB8] w-[281px]'}>Payment methods</button>
        </Link>
        <Link href="/student-dashboard/setting/notification">
          <button className={pathname === '/student-dashboard/setting/notification' ? 'text-[white] font-outfit text-[20px] font-semibold h-[55px] text-left px-[16px] w-[281px] rounded-[8px] bg-primary2' : 'text-[#252422] font-outfit text-[20px] font-semibold h-[55px] text-left px-[16px] border-b border-[#FFDBB8] w-[281px]'}>Notification Settings</button>
        </Link>
      </div>

      {children}
    </div>
  )
}