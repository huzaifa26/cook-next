'use client'

import '@/app/globals.css'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { useSession } from 'next-auth/react'
import { redirect, useSearchParams } from 'next/navigation'
import Loading from "@/assets/Loading.svg"
import Image from 'next/image'
import AuthProvider from '@/utils/AuthProvider'

export default function RootLayout({ children }) {
  const searchParams = useSearchParams()
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin')
    },
  })


  if (session.status === "loading") {
    return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <Image className='m-auto' src={Loading} alt='' />
      </div>
    )
  }

  if (!session?.data?.data?.accountType && !searchParams.get("accountType")) {
    redirect(`/account-type?name=${session?.data?.data.name}&email=${session?.data?.data.email}&email_verified=${session?.data?.data.email_verified}`)
  }

  return (
    <>
      <DashboardLayout />
      {children}
    </>
  )
}