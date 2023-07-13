'use client'
import "@/app/globals.css"
import GroupIcon from "@/assets/AccountType/GroupIcon.png"
import StudentIcon from "@/assets/AccountType/StudentIcon.png"
import { API_URL } from "@/utils/consts"
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter()

  const accountTypeHandler = async (type) => {
    const data = {
      name: searchParams.get('name'),
      email: searchParams.get('email'),
      accountType: type
    }

    try {
      let res = await fetch(API_URL+'/api/auth/account-type', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      res = await res.json()

      if (res.status === 201) {
        if(searchParams.get('email_verified')){
          setTimeout(()=>{
            router.push(`/student-dashboard`);
          },3000)
        }else{
          router.push(`/verify-mail?name=${data.name}&email=${data.email}`);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex flex-col items-center justify-center w-scree h-screen relative'>
      <svg className='absolute top-[0px] left-[0px] max-h-screen min-h-screen md:hidden sm:hidden xsm:hidden' viewBox="0 0 266 833" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="266" height="833" fill="#FFDBB8" />
        <path d="M106 859C106 888.271 82.2711 912 53 912C23.7289 912 2.07445e-06 888.271 4.63341e-06 859L3.09477e-05 558C58.5422 558 106 605.458 106 664L106 859Z" fill="#D27722" />
        <path d="M160 -31C160 -60.2711 183.729 -84 213 -84C242.271 -84 266 -60.2711 266 -31V270C207.458 270 160 222.542 160 164V-31Z" fill="#D27722" />
        <path d="M64.5 17C64.5 -38.5046 109.495 -83.5 165 -83.5C220.505 -83.5 265.5 -38.5046 265.5 17V442.5H197C123.822 442.5 64.5 383.178 64.5 310V17Z" stroke="#D27722" />
      </svg>

      <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='font-rubik text-[32px] font-bold leading-normal tracking-[-0.64px]'>I want to be...</h1>
        <div onClick={() => accountTypeHandler("student")} className='w-[641px] h-[116px] border border-primaryLighten2 rounded-[8px] p-[16px] flex gap-[20px] mt-[41px] hover:scale-[1.02] transition-all duration-200 cursor-pointer' style={{ boxShadow: '0px 0px 0px 0px rgba(39, 122, 3, 0.03), 0px 5px 11px 0px rgba(39, 122, 3, 0.03), 0px 21px 21px 0px rgba(39, 122, 3, 0.03), 0px 47px 28px 0px rgba(39, 122, 3, 0.02), 0px 83px 33px 0px rgba(39, 122, 3, 0.00), 0px 130px 36px 0px rgba(39, 122, 3, 0.00)' }}>
          <Image src={StudentIcon} className='w-[64px] h-[64px]' alt=''></Image>
          <div>
            <h2 className='text-[24px] font-rubik font-semibold tracking-[-0.48px] leading-normal'>Student</h2>
            <p className='text-[16px] font-outfit font-normal leading-[160%]'>Learn directly from professionals, expand your cooking skills, and interact with passionate chefs from all around the world.</p>
          </div>
        </div>

        <div onClick={() => accountTypeHandler("chef")} className='w-[641px] h-[116px] border border-primaryLighten2 rounded-[8px] p-[16px] flex gap-[20px] mt-[20px] hover:scale-[1.02] transition-all duration-200 cursor-pointer' style={{ boxShadow: '0px 0px 0px 0px rgba(39, 122, 3, 0.03), 0px 5px 11px 0px rgba(39, 122, 3, 0.03), 0px 21px 21px 0px rgba(39, 122, 3, 0.03), 0px 47px 28px 0px rgba(39, 122, 3, 0.02), 0px 83px 33px 0px rgba(39, 122, 3, 0.00), 0px 130px 36px 0px rgba(39, 122, 3, 0.00)' }}>
          <Image src={GroupIcon} className='w-[64px] h-[64px]' alt=''></Image>
          <div>
            <h2 className='text-[24px] font-rubik font-semibold tracking-[-0.48px] leading-normal'>Chef</h2>
            <p className='text-[16px] font-outfit font-normal leading-[160%]'>Create your own groups, engage with students, and earn an income from your passion for teaching.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
