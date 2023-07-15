'use client'
import React, { useLayoutEffect, useState } from 'react';
import Image1 from '@/assets/Signin/Image1.png';
import Image2 from '@/assets/Signin/Image2.png';
import MDImage1 from '@/assets/Signin/MDImage1.png';
import MDImage2 from '@/assets/Signin/MDImage2.png';
import Facebook from "@/assets/Signup/Facebook.svg";
import Google from "@/assets/Signup/Google.svg";
import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import "@/app/globals.css"

export default function Page() {
  const session = useSession();
  const router = useRouter();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target[0].value,
      password: e.target[1].value,
    }

    const result = await signIn('credentials', data);
  }

  const googleSigninHandler = async () => {
    signIn('google', { callbackUrl: '/student-dashboard' });
  }
  const facebookSigninHandler = async () => {
    signIn('facebook');
  }
  const linkedInSigninHandler = async () => {
    signIn('linkedin');
  }

  // useLayoutEffect(()=>{
  //   if(session.status === 'authenticated'){
  //     router.push('/student-dashboard');
  //   }
  //   // signOut('credentials');
  // },[session])

  const [showPassword, setShowPassword] = useState(false)
  const [passwordError, setPasswordError] = useState(null);

  return (
    <main className='flex relative md:min-h-[1194px] sm:min-h-[1194px] xsm:h-[844px]'>
      <div className='blurSignin h-auto md:min-h-[1194px] sm:min-h-[1194px] bg-[rgba(255,219,184,1)] xsm:hidden w-[49.306vw] md:w-full sm:w-full min-h-[846px] flex gap-[13px] justify-center overflow-hidden'>
        <Image className='w-[283px] relative top-[45px] md:hidden xsm:hidden sm:hidden' src={Image1} alt="" />
        <Image className='w-[283px] md:hidden xsm:hidden sm:hidden' src={Image2} alt="" />
        <Image className='max-h-[914px] hidden md:flex xsm:flex sm:flex w-[283px] relative md:absolute md:top-[0px] md:right-[-59px] sm:absolute sm:top-[0px] sm:right-[-59px]' src={MDImage2} alt="" />
        <Image className='max-h-[603px] hidden md:flex xsm:flex sm:flex max-w-[283px] relative md:absolute md:bottom-[0px] md:left-[-60px] sm:absolute sm:bottom-[0px] sm:left-[-60px]' src={MDImage1} alt="" />
      </div>
      <div className='bg-[white] xsm:w-full md:border-2 md:border-[rgba(255,219,184,1)] md:rounded-[23px] md:h-fit sm:border-2 sm:border-[rgba(255,219,184,1)] sm:rounded-[23px] sm:h-fit w-[50.694vw] md:w-[80.24vw] sm:w-[80.24vw] h-full flex flex-col items-center pt-[105px] md:absolute sm:absolute xsm:absolute md:left-[50%] md:translate-x-[-50%] md:top-[50%] md:translate-y-[-50%] sm:left-[50%] sm:translate-x-[-50%] sm:top-[50%] sm:translate-y-[-50%]'>
        <div className='w-fit h-fit flex flex-col justify-center items-center'>
          <h1 className='font-rubik font-bold text-[32px] leading-[37.92px] tracking-[-0.02em]'>Log in to <Link href='/'><span className='text-primary2 underline'>COOK</span></Link></h1>
          <div className='flex flex-col gap-[8px] mt-[24px]'>
            <button onClick={googleSigninHandler} className='hover:bg-primaryLighten2 transition-all duration-200 flex items-center justify-center gap-[14px] w-[322px] xsm:min-w-[90vw] xsm:w-full h-[56px] border border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[30px]'>
              <Image src={Google} alt="" />
              Continue with Google
            </button>
            <button onClick={facebookSigninHandler} className='flex hover:bg-primaryLighten2  transition-all duration-200 items-center justify-center gap-[14px] w-[322px] xsm:w-full h-[56px] border border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[30px]'>
              <Image src={Facebook} alt="" />
              Continue with Facebook
            </button>
            <button onClick={linkedInSigninHandler} className='flex hover:bg-primaryLighten2  transition-all duration-200 items-center justify-center gap-[14px] w-[322px] xsm:w-full h-[56px] border border-[rgba(255,219,184,1)] font-outfit font-normal text-[20px] leading-[30px]'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="31.6838" rx="3" fill="white" />
                <path d="M27.2655 26.9967H22.5241V19.6446C22.5241 17.8914 22.4925 15.6345 20.0581 15.6345C17.5886 15.6345 17.2108 17.5447 17.2108 19.517V26.9962H12.4694V11.8773H17.0211V13.9435H17.0848C17.5404 13.1723 18.1986 12.5379 18.9895 12.1078C19.7803 11.6777 20.6742 11.4681 21.5758 11.5013C26.3815 11.5013 27.2675 14.6311 27.2675 18.7027L27.2655 26.9967ZM7.1195 9.81067C6.57531 9.81076 6.04329 9.65108 5.59076 9.3518C5.13822 9.05252 4.7855 8.62708 4.57716 8.1293C4.36882 7.63152 4.31421 7.08375 4.42029 6.55525C4.52636 6.02675 4.78833 5.54126 5.17307 5.16018C5.5578 4.7791 6.04803 4.51954 6.58174 4.41432C7.11546 4.3091 7.66869 4.36296 8.1715 4.56907C8.67431 4.77519 9.10409 5.1243 9.40651 5.57227C9.70893 6.02024 9.87041 6.54695 9.87051 7.08578C9.87057 7.44356 9.79945 7.79784 9.66124 8.1284C9.52302 8.45896 9.32043 8.75933 9.06497 9.01236C8.80952 9.26539 8.50621 9.46612 8.17241 9.6031C7.8386 9.74007 7.48083 9.8106 7.1195 9.81067ZM9.4902 26.9967H4.74386V11.8773H9.4902V26.9967ZM29.6293 0.00215867H2.36132C1.74241 -0.0047569 1.14602 0.231903 0.703253 0.660134C0.260483 1.08837 0.00755341 1.67313 0 2.28594V29.3974C0.00729489 30.0105 0.260076 30.5956 0.702831 31.0243C1.14559 31.453 1.74211 31.6901 2.36132 31.6836H29.6293C30.2497 31.6913 30.8479 31.4548 31.2924 31.0262C31.7369 30.5975 31.9914 30.0117 32 29.3974V2.28398C31.9912 1.66996 31.7365 1.08453 31.292 0.656308C30.8475 0.228088 30.2494 -0.00789643 29.6293 0.000201749" fill="#0A66C2" />
              </svg>
              Continue with Linkedin
            </button>
          </div>
        </div>
        <div className='relative my-[45px] w-full flex justify-center items-center'>
          <div className='max-h-[1px] border border-[rgba(255,219,184,1)] w-full absolute z-10'></div>
          <p className='relative z-20 font-outfit font-normal text-[14px] leading-[17.64px] text-TextColorSec w-[34px] h-[38px] bg-[white] flex justify-center items-center'>or</p>
        </div>
        <div>
          <h3 className='font-redHatDisplay font-bold text-[20px] leading-[26.46px] text-center'>Log in with email</h3>
          <form onSubmit={formSubmitHandler} className='w-[346px] xsm:w-[90vw] flex flex-col gap-[18px] items-center mt-[29px]'>
            <div className='w-full flex flex-col gap-[2px]'>
              <label className='font-outfit font-medium text-[16px] leading-[20.16px]' htmlFor="">Email</label>
              <input className='p-[10px] outline-primary2 border border-[rgba(255,219,184,1)] h-[37px]' type="text" />
            </div>
            <div className='w-full flex flex-col gap-[2px]'>
              <label className='font-outfit font-medium text-[16px] leading-[20.16px]' htmlFor="">Password</label>
              <div className='pr-[10px] flex items-center gap-[10px] outline-primary2 overflow-hidden border border-[rgba(255,219,184,1)] h-[37px]'>
                <input type={showPassword ? "text" : "password"} className='pl-[10px] m-0 w-full h-[37px] outline-none' />
                {!showPassword ?
                  <svg onClick={() => setShowPassword(true)} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#D17721" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#D17721" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  :
                  <svg onClick={() => setShowPassword(false)} className='cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1449_44632)">
                      <path d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003M9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 1L23 23" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1449_44632">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              </div>
              {
                passwordError &&
                <p className='text-primary2 font-outfit leading-normal text-[14px] text-right'>{passwordError}</p>
              }
            </div>
            <button className='text-[white] select-none hover:bg-[white] hover:text-primary2 border-2 border-primary2 transition-all duration-200 bg-primary2 h-[39px] w-[122px] rounded-[4px] font-outfit font-medium text-[18px] leading-[22.68px] mt-[11px]'>Login</button>
          </form>
          <Link href='/signup'>
            <p className='text-primary2 font-rubik text-[18px] font-medium tracking-[-0.36px] mb-[33px] md:mb-[690px] sm:mb-[69px] text-center mt-[29px]'>Don't have an account? Sign up</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
