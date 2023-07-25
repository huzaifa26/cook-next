'use client'

import '@/app/globals.css'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { useSession } from 'next-auth/react'
import { redirect, useSearchParams } from 'next/navigation'
import Loading from "@/assets/Loading.svg"
import Image from 'next/image'
import AuthProvider from '@/utils/AuthProvider'
import Page from '../tutor-dashboard/page'

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
    if (session?.data?.data?.email === undefined ||session?.data?.data?.email_verified === undefined) {
      redirect(`/signin`);
    }
    redirect(`/account-type?name=${session?.data?.data?.name}&email=${session?.data?.data?.email}&email_verified=${session?.data?.data?.email_verified}`)
  }

  if (session?.data?.data?.email_verified === undefined || session?.data?.data?.email_verified === false) {
    redirect(`/verify-mail?name=${session?.data?.data?.name}&email=${session?.data?.data?.email}`);
  }

  if (session?.data?.data?.accountType === 'chef') {
    redirect(`/tutor-dashboard`);
  }

  return (
    <>
      <DashboardLayout />
      {children}
    </>
  )
}