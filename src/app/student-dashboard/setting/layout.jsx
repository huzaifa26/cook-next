'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (
    <div className='px-[12.153vw] md:px-[6.347vw] sm:px-[6.347vw] xsm:px-[8.205vw] flex xsm:flex-col gap-x-[1.389vw] mt-[50px] xsm:mt-[37px] mb-[183px]'>

      <div className='flex flex-col gap-[25px] mt-[42px] xsm:mt-[0px] xsm:hidden'>
        <Link href="/student-dashboard/setting">
          <button className={pathname === '/student-dashboard/setting' ? 'text-[white] font-outfit text-[20px] font-semibold h-[55px] text-left px-[1.111vw] w-[19.514vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] min-w-[210px] sm:min-w-[170px] rounded-[8px] bg-primary2' : 'text-[#252422] font-outfit text-[20px] font-semibold h-[55px] text-left px-[1.111vw] border-b border-[#FFDBB8] w-[19.514vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] min-w-[210px] sm:min-w-[170px]'}>Account</button>
        </Link>
        <Link href="/student-dashboard/setting/user-info">
          <button className={pathname === '/student-dashboard/setting/user-info' ? 'text-[white] font-outfit text-[20px] font-semibold h-[55px] text-left px-[1.111vw] w-[19.514vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] min-w-[210px] sm:min-w-[170px] rounded-[8px] bg-primary2 ' : 'text-[#252422] font-outfit text-[20px] font-semibold h-[55px] text-left px-[1.111vw] border-b border-[#FFDBB8] w-[19.514vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] min-w-[210px] sm:min-w-[170px]'}>Email & Password</button>
        </Link>
        <Link href="/student-dashboard/setting/payment">
          <button className={pathname === '/student-dashboard/setting/payment' ? 'text-[white] font-outfit text-[20px] font-semibold h-[55px] text-left px-[1.111vw] w-[19.514vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] min-w-[210px] sm:min-w-[170px] rounded-[8px] bg-primary2' : 'text-[#252422] font-outfit text-[20px] font-semibold h-[55px] text-left px-[1.111vw] border-b border-[#FFDBB8] w-[19.514vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] min-w-[210px] sm:min-w-[170px]'}>Payment methods</button>
        </Link>
        <Link href="/student-dashboard/setting/notification">
          <button className={pathname === '/student-dashboard/setting/notification' ? 'text-[white] font-outfit text-[20px] font-semibold h-[55px] text-left px-[1.111vw] w-[19.514vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] min-w-[210px] sm:min-w-[170px] rounded-[8px] bg-primary2' : 'text-[#252422] font-outfit text-[20px] font-semibold h-[55px] text-left px-[1.111vw] border-b border-[#FFDBB8] w-[19.514vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] min-w-[210px] sm:min-w-[170px]'}>Notification Settings</button>
        </Link>
      </div>


      <div className='hidden grid-cols-2 gap-[12px] mt-[42px] xsm:mt-[0px] xsm:grid'>
        <Link href="/student-dashboard/setting">
          <button className={pathname === '/student-dashboard/setting' ? 'text-[white] font-outfit text-[20px] font-semibold h-[36px] px-[0.556vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] bg-primary2 w-full text-center border border-primary2 rounded-[4px]' : 'w-full text-[#252422] text-center border border-primaryLighten2 rounded-[4px] font-outfit text-[20px] font-semibold h-[36px] px-[0.556vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] '}>Account</button>
        </Link>
        <Link href="/student-dashboard/setting/user-info">
          <button className={pathname === '/student-dashboard/setting/user-info' ? 'text-[white] font-outfit text-[20px] font-semibold h-[36px] px-[0.556vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] bg-primary2 w-full text-center border border-primary2 rounded-[4px]' : 'w-full text-[#252422] text-center border border-primaryLighten2 rounded-[4px] font-outfit text-[20px] font-semibold h-[36px] px-[0.556vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] '}>Email & Password</button>
        </Link>
        <Link href="/student-dashboard/setting/payment">
          <button className={pathname === '/student-dashboard/setting/payment' ? 'text-[white] font-outfit text-[20px] font-semibold h-[36px] px-[0.556vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] bg-primary2 w-full text-center border border-primary2 rounded-[4px]' : 'w-full text-[#252422] text-center border border-primaryLighten2 rounded-[4px] font-outfit text-[20px] font-semibold h-[36px] px-[0.556vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] '}>Payment methods</button>
        </Link>
        <Link href="/student-dashboard/setting/notification">
          <button className={pathname === '/student-dashboard/setting/notification' ? 'text-[white] font-outfit text-[20px] font-semibold h-[36px] px-[0.556vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] bg-primary2 w-full text-center border border-primary2 rounded-[4px]' : 'w-full text-[#252422] text-center border border-primaryLighten2 rounded-[4px] font-outfit text-[20px] font-semibold h-[36px] px-[0.556vw] md:text-[16px] sm:text-[16px] xsm:text-[14px] '}>Notification Settings</button>
        </Link>
      </div>

      {children}
    </div>
  )
}