'use client'
import Image from 'next/image'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import VerifyEmail from "@/assets/VerifyEmail.png"
import "@/app/globals.css"
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation'
import { API_URL } from '@/utils/consts'

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(5);
  const router = useRouter();
  const searchParams = useSearchParams();

  const timeoutRef = useRef()
  const intervalRef = useRef()

  useEffect(() => {
    verifyEmailHander();

    return () => {
      clearTimeout(timeoutRef.current)
      clearInterval(intervalRef.current)
    }
  })

  const [error, setError] = useState(null);

  const verifyEmailHander = async () => {
    const data = {
      name: searchParams.get('name'),
      email: searchParams.get('email'),
    }

    try {
      let res = await fetch(API_URL + 'api/auth/verify-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      res = await res.json();

      if (res.status === 200) {
        setLoading(false);
        timeoutRef.current = setTimeout(() => {
          if (searchParams.get('accountType') === 'chef') {
            router.push(`/signup/chef?name=${searchParams.get("name")}&email=${searchParams.get("email")}&accountType=${searchParams.get("accountType")}`);
            return
          }
          router.push('/signin')
        }, 5000);

        intervalRef.current = setInterval(() => {
          setCounter((prev) => {
            if (prev > 0) {
              return prev - 1
            } else {
              return prev
            }
          })
        }, [1000])
      }
      res.status === 500 && setError("Error occured while creating account");

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

      <div className='absolute top-[54px]'>
        <svg width="114" height="31" viewBox="0 0 114 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.994 30.42C9.99 30.42 6.854 29.454 4.586 27.522C2.346 25.562 1.156 22.734 1.016 19.038C0.988 18.282 0.974 17.05 0.974 15.342C0.974 13.606 0.988 12.346 1.016 11.562C1.156 7.922 2.374 5.122 4.67 3.162C6.966 1.174 10.074 0.179998 13.994 0.179998C16.458 0.179998 18.67 0.599999 20.63 1.44C22.59 2.252 24.13 3.428 25.25 4.968C26.398 6.48 26.986 8.258 27.014 10.302V10.386C27.014 10.61 26.916 10.806 26.72 10.974C26.552 11.114 26.356 11.184 26.132 11.184H20.462C20.098 11.184 19.818 11.114 19.622 10.974C19.426 10.806 19.258 10.512 19.118 10.092C18.726 8.664 18.11 7.67 17.27 7.11C16.43 6.522 15.324 6.228 13.952 6.228C10.648 6.228 8.94 8.076 8.828 11.772C8.8 12.528 8.786 13.69 8.786 15.258C8.786 16.826 8.8 18.016 8.828 18.828C8.94 22.524 10.648 24.372 13.952 24.372C15.324 24.372 16.444 24.078 17.312 23.49C18.18 22.874 18.782 21.88 19.118 20.508C19.23 20.088 19.384 19.808 19.58 19.668C19.776 19.5 20.07 19.416 20.462 19.416H26.132C26.384 19.416 26.594 19.5 26.762 19.668C26.958 19.836 27.042 20.046 27.014 20.298C26.986 22.342 26.398 24.134 25.25 25.674C24.13 27.186 22.59 28.362 20.63 29.202C18.67 30.014 16.458 30.42 13.994 30.42ZM42.6022 30.42C38.6542 30.42 35.5462 29.454 33.2782 27.522C31.0102 25.59 29.8062 22.748 29.6662 18.996C29.6382 18.184 29.6242 16.98 29.6242 15.384C29.6242 13.76 29.6382 12.542 29.6662 11.73C29.8062 8.034 31.0242 5.192 33.3202 3.204C35.6442 1.188 38.7382 0.179998 42.6022 0.179998C46.4662 0.179998 49.5602 1.188 51.8842 3.204C54.2082 5.192 55.4262 8.034 55.5382 11.73C55.5942 13.354 55.6222 14.572 55.6222 15.384C55.6222 16.168 55.5942 17.372 55.5382 18.996C55.3982 22.748 54.1942 25.59 51.9262 27.522C49.6582 29.454 46.5502 30.42 42.6022 30.42ZM42.6022 24.372C44.1422 24.372 45.3602 23.91 46.2562 22.986C47.1802 22.062 47.6702 20.648 47.7262 18.744C47.7822 17.12 47.8102 15.972 47.8102 15.3C47.8102 14.572 47.7822 13.424 47.7262 11.856C47.6702 9.952 47.1802 8.538 46.2562 7.614C45.3322 6.69 44.1142 6.228 42.6022 6.228C41.0902 6.228 39.8722 6.69 38.9482 7.614C38.0522 8.538 37.5622 9.952 37.4782 11.856C37.4502 12.64 37.4362 13.788 37.4362 15.3C37.4362 16.784 37.4502 17.932 37.4782 18.744C37.5622 20.648 38.0522 22.062 38.9482 22.986C39.8442 23.91 41.0622 24.372 42.6022 24.372ZM71.6626 30.42C67.7146 30.42 64.6066 29.454 62.3386 27.522C60.0706 25.59 58.8666 22.748 58.7266 18.996C58.6986 18.184 58.6846 16.98 58.6846 15.384C58.6846 13.76 58.6986 12.542 58.7266 11.73C58.8666 8.034 60.0846 5.192 62.3806 3.204C64.7046 1.188 67.7986 0.179998 71.6626 0.179998C75.5266 0.179998 78.6206 1.188 80.9446 3.204C83.2686 5.192 84.4866 8.034 84.5986 11.73C84.6546 13.354 84.6826 14.572 84.6826 15.384C84.6826 16.168 84.6546 17.372 84.5986 18.996C84.4586 22.748 83.2546 25.59 80.9866 27.522C78.7186 29.454 75.6106 30.42 71.6626 30.42ZM71.6626 24.372C73.2026 24.372 74.4206 23.91 75.3166 22.986C76.2406 22.062 76.7306 20.648 76.7866 18.744C76.8426 17.12 76.8706 15.972 76.8706 15.3C76.8706 14.572 76.8426 13.424 76.7866 11.856C76.7306 9.952 76.2406 8.538 75.3166 7.614C74.3926 6.69 73.1746 6.228 71.6626 6.228C70.1506 6.228 68.9326 6.69 68.0086 7.614C67.1126 8.538 66.6226 9.952 66.5386 11.856C66.5106 12.64 66.4966 13.788 66.4966 15.3C66.4966 16.784 66.5106 17.932 66.5386 18.744C66.6226 20.648 67.1126 22.062 68.0086 22.986C68.9046 23.91 70.1226 24.372 71.6626 24.372ZM89.761 30C89.481 30 89.229 29.902 89.005 29.706C88.809 29.482 88.711 29.23 88.711 28.95V1.65C88.711 1.342 88.809 1.09 89.005 0.893999C89.229 0.697998 89.481 0.599998 89.761 0.599998H95.053C95.361 0.599998 95.613 0.697998 95.809 0.893999C96.005 1.09 96.103 1.342 96.103 1.65V10.974L103.873 1.398C104.209 0.865998 104.755 0.599998 105.511 0.599998H111.559C111.811 0.599998 112.021 0.697998 112.189 0.893999C112.357 1.062 112.441 1.258 112.441 1.482C112.441 1.678 112.399 1.846 112.315 1.986L102.235 14.67L113.071 28.614C113.183 28.726 113.239 28.894 113.239 29.118C113.239 29.342 113.155 29.552 112.987 29.748C112.819 29.916 112.609 30 112.357 30H106.099C105.427 30 104.867 29.72 104.419 29.16L96.103 18.786V28.95C96.103 29.258 96.005 29.51 95.809 29.706C95.613 29.902 95.361 30 95.053 30H89.761Z" fill="#D27722" />
        </svg>
      </div>
      <div className='flex flex-col items-center justify-center h-full'>
        {loading ?
          <h1 className='font-rubik text-[42px] font-medium leading-[-0.84px] mt-[38px] xsm:text-[36px] xsm:leading-[135.5%] xsm:tracking-[-0.72px]'>Verifing your email...</h1>
          :
          <>
            <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="132" height="132" rx="66" fill="#FFDBB8" />
              <path d="M106.093 39L52.5 92.593L25 65.093" stroke="#D27722" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h1 className='font-rubik text-[42px] font-medium leading-[-0.84px] mt-[38px] xsm:text-[36px] xsm:leading-[135.5%] xsm:tracking-[-0.72px]'>Your email was verified!</h1>
            <p className='font-outfit text-[24px] font-normal leading-[-0.48px] mt-[16px] lg:w-[500px] text-center xsm:leading-[160%] xsm:tracking-[-0.48px]'>Thank you for verifying your email. You'll be redirected in {counter} seconds.</p>
            <p className='font-outfit text-[24px] font-normal leading-[-0.48px] mt-[16px] lg:w-[500px] text-center xsm:leading-[160%] xsm:tracking-[-0.48px]'>{error}</p>
            <button onClick={() => {
              if (searchParams.get('accountType') === 'chef') {
                router.push(`/signup/chef?name=${searchParams.get("name")}&email=${searchParams.get("email")}&accountType=${searchParams.get("accountType")}`);
                return
              }
              router.push('/signin')
            }} className='hover:text-primary2 hover:bg-[white] transition-all duration-200 group bg-primary2 text-[white] border rounded-[4px] border-primary2 px-[16px] py-[6px] font-outfit text-[18px] font-medium leading-normal flex gap-[8px] items-center mt-[38px]'>
              Continue
            </button>
          </>
        }
      </div>
    </div>
  )
}
