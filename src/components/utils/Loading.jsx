import React from 'react'
import Loader from "@/assets/Loading.svg"
import Image from 'next/image'

export default function Loading() {
  return (
    <Image className='w-[25px] m-auto' src={Loader} alt=''/>
  )
}
