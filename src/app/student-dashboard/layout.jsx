'use client'

import '@/app/globals.css'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Loading from "@/assets/Loading.svg"
import Image from 'next/image'

export default function RootLayout({ children }) {
  const session=useSession({
    required:true,
    onUnauthenticated(){
      redirect('/signin')
    },
  })

  if(session.status === "loading"){
    return(
      <div className='w-screen h-screen flex justify-center items-center'>
        <Image className='m-auto' src={Loading} alt=''/>
      </div>
    ) 
  }

  return (
    <>
      <DashboardLayout />
      {children}
    </>
  )
}