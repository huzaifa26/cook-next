'use client'
import CurrencyModal from '@/components/layout/CurrencyModal';
import LanguageModal from '@/components/layout/LanguageModal';
import Loading from '@/components/utils/Loading';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const session = useSession();

  const [currencyModal, setCurrencyModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);

  const pathname = usePathname();

  const [screenWidth, setScreenWidth] = useState(window && typeof window !== undefined && window.innerWidth);

  useEffect(() => {
    // Function to update the screenWidth state whenever the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (session.status === "loading") {
    return <Loading />
  }

  if (session.status === 'authenticated') {
    if (session?.data?.data?.accountType === 'student') {
      redirect('/student-dashboard')
    }
    if (session?.data?.data?.accountType === 'student') {
      redirect('/tutor-dashboard')
    }
  }

  return (
    <>
      <nav className='z-40 h-[84px] w-[100%] px-[4.444vw] md:px-[53.006px] sm:px-[53.006px] xsm:px-[8.204vw] flex items-center bg-primary2 justify-between'>
        <svg width="87" height="24" viewBox="0 0 87 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.424 23.32C8.39733 23.32 6.65867 22.9893 5.208 22.328C3.77867 21.6667 2.65867 20.696 1.848 19.416C1.05867 18.136 0.621333 16.5467 0.536 14.648C0.514667 13.7733 0.504 12.8347 0.504 11.832C0.504 10.8293 0.514667 9.86933 0.536 8.952C0.621333 7.096 1.06933 5.528 1.88 4.248C2.69067 2.94667 3.82133 1.96533 5.272 1.304C6.72267 0.621332 8.44 0.279999 10.424 0.279999C11.832 0.279999 13.1333 0.461332 14.328 0.823999C15.5227 1.16533 16.568 1.67733 17.464 2.36C18.36 3.02133 19.0533 3.832 19.544 4.792C20.056 5.73067 20.3227 6.79733 20.344 7.992C20.3653 8.184 20.3013 8.344 20.152 8.472C20.024 8.6 19.864 8.664 19.672 8.664H15.352C15.0747 8.664 14.8613 8.61067 14.712 8.504C14.5627 8.376 14.4347 8.152 14.328 7.832C14.0293 6.70133 13.5387 5.93333 12.856 5.528C12.1947 5.10133 11.3733 4.888 10.392 4.888C9.21867 4.888 8.29067 5.21867 7.608 5.88C6.92533 6.52 6.552 7.59733 6.488 9.112C6.424 10.8613 6.424 12.6533 6.488 14.488C6.552 16.0027 6.92533 17.0907 7.608 17.752C8.29067 18.392 9.21867 18.712 10.392 18.712C11.3733 18.712 12.2053 18.4987 12.888 18.072C13.5707 17.6453 14.0507 16.8773 14.328 15.768C14.4133 15.448 14.5307 15.2347 14.68 15.128C14.8507 15 15.0747 14.936 15.352 14.936H19.672C19.864 14.936 20.024 15 20.152 15.128C20.3013 15.256 20.3653 15.416 20.344 15.608C20.3227 16.8027 20.056 17.88 19.544 18.84C19.0533 19.7787 18.36 20.5893 17.464 21.272C16.568 21.9333 15.5227 22.4453 14.328 22.808C13.1333 23.1493 11.832 23.32 10.424 23.32ZM32.2208 23.32C30.2581 23.32 28.5514 23 27.1008 22.36C25.6501 21.72 24.5194 20.76 23.7088 19.48C22.8981 18.1787 22.4501 16.5573 22.3648 14.616C22.3434 13.6987 22.3328 12.7813 22.3328 11.864C22.3328 10.9467 22.3434 10.0187 22.3648 9.08C22.4501 7.16 22.8981 5.54933 23.7088 4.248C24.5408 2.92533 25.6821 1.93333 27.1328 1.272C28.5834 0.610666 30.2794 0.279999 32.2208 0.279999C34.1408 0.279999 35.8261 0.610666 37.2768 1.272C38.7488 1.93333 39.9008 2.92533 40.7328 4.248C41.5648 5.54933 42.0128 7.16 42.0768 9.08C42.1194 10.0187 42.1408 10.9467 42.1408 11.864C42.1408 12.7813 42.1194 13.6987 42.0768 14.616C41.9914 16.5573 41.5434 18.1787 40.7328 19.48C39.9221 20.76 38.7914 21.72 37.3408 22.36C35.8901 23 34.1834 23.32 32.2208 23.32ZM32.2208 18.712C33.3514 18.712 34.2688 18.3707 34.9728 17.688C35.6981 17.0053 36.0821 15.9173 36.1248 14.424C36.1674 13.4853 36.1888 12.6 36.1888 11.768C36.1888 10.936 36.1674 10.072 36.1248 9.176C36.0821 8.17333 35.8901 7.36267 35.5488 6.744C35.2288 6.104 34.7808 5.63467 34.2048 5.336C33.6288 5.03733 32.9674 4.888 32.2208 4.888C31.4954 4.888 30.8448 5.03733 30.2688 5.336C29.6928 5.63467 29.2341 6.104 28.8928 6.744C28.5514 7.36267 28.3594 8.17333 28.3168 9.176C28.2954 10.072 28.2848 10.936 28.2848 11.768C28.2848 12.6 28.2954 13.4853 28.3168 14.424C28.3808 15.9173 28.7648 17.0053 29.4688 17.688C30.1728 18.3707 31.0901 18.712 32.2208 18.712ZM54.362 23.32C52.3993 23.32 50.6927 23 49.242 22.36C47.7913 21.72 46.6607 20.76 45.85 19.48C45.0393 18.1787 44.5913 16.5573 44.506 14.616C44.4847 13.6987 44.474 12.7813 44.474 11.864C44.474 10.9467 44.4847 10.0187 44.506 9.08C44.5913 7.16 45.0393 5.54933 45.85 4.248C46.682 2.92533 47.8233 1.93333 49.274 1.272C50.7247 0.610666 52.4207 0.279999 54.362 0.279999C56.282 0.279999 57.9673 0.610666 59.418 1.272C60.89 1.93333 62.042 2.92533 62.874 4.248C63.706 5.54933 64.154 7.16 64.218 9.08C64.2607 10.0187 64.282 10.9467 64.282 11.864C64.282 12.7813 64.2607 13.6987 64.218 14.616C64.1327 16.5573 63.6847 18.1787 62.874 19.48C62.0633 20.76 60.9327 21.72 59.482 22.36C58.0313 23 56.3247 23.32 54.362 23.32ZM54.362 18.712C55.4927 18.712 56.41 18.3707 57.114 17.688C57.8393 17.0053 58.2233 15.9173 58.266 14.424C58.3087 13.4853 58.33 12.6 58.33 11.768C58.33 10.936 58.3087 10.072 58.266 9.176C58.2233 8.17333 58.0313 7.36267 57.69 6.744C57.37 6.104 56.922 5.63467 56.346 5.336C55.77 5.03733 55.1087 4.888 54.362 4.888C53.6367 4.888 52.986 5.03733 52.41 5.336C51.834 5.63467 51.3753 6.104 51.034 6.744C50.6927 7.36267 50.5007 8.17333 50.458 9.176C50.4367 10.072 50.426 10.936 50.426 11.768C50.426 12.6 50.4367 13.4853 50.458 14.424C50.522 15.9173 50.906 17.0053 51.61 17.688C52.314 18.3707 53.2313 18.712 54.362 18.712ZM68.1513 23C67.9166 23 67.7246 22.9253 67.5753 22.776C67.4259 22.6267 67.3513 22.4347 67.3513 22.2V1.4C67.3513 1.16533 67.4259 0.973332 67.5753 0.823999C67.7246 0.674665 67.9166 0.599998 68.1513 0.599998H72.1833C72.4179 0.599998 72.6099 0.674665 72.7593 0.823999C72.9086 0.973332 72.9833 1.16533 72.9833 1.4V8.504L78.9033 1.208C78.9886 1.08 79.1273 0.951999 79.3193 0.823999C79.5326 0.674665 79.8099 0.599998 80.1513 0.599998H84.7593C84.9513 0.599998 85.1113 0.674665 85.2393 0.823999C85.3673 0.951999 85.4313 1.10133 85.4313 1.272C85.4313 1.42133 85.3886 1.54933 85.3033 1.656L77.6553 11.32L85.9113 21.944C85.9966 22.0293 86.0393 22.1573 86.0393 22.328C86.0393 22.4987 85.9646 22.6587 85.8153 22.808C85.6873 22.936 85.5379 23 85.3673 23H80.5993C80.2153 23 79.9166 22.9147 79.7033 22.744C79.5113 22.5733 79.3833 22.4453 79.3193 22.36L72.9833 14.456V22.2C72.9833 22.4347 72.9086 22.6267 72.7593 22.776C72.6099 22.9253 72.4179 23 72.1833 23H68.1513Z" fill="#FFDBB8" />
        </svg>

        <div className='flex items-center'>
          <div className='flex gap-[1.528vw] items-center'>
            <div onClick={(e) => { setLanguageModal(!languageModal); setCurrencyModal(false); e.stopPropagation(); }} className='flex items-center gap-[4px] relative cursor-pointer'>
              <LanguageModal state={languageModal} closeModal={(e) => { setLanguageModal(false) }} />
              <p className='font-outfit font-normal text-[19px] leading-[19px] text-[white]'>Eng</p>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#FFDBB8" />
              </svg>
            </div>
            <div onClick={(e) => { setCurrencyModal(!currencyModal); setLanguageModal(false); e.stopPropagation(); }} className='flex items-center gap-[4px] relative cursor-pointer'>
              <CurrencyModal state={currencyModal} closeModal={(e) => { setCurrencyModal(false) }} />
              <p className='font-outfit font-normal text-[18px] leading-[18px] text-[white]'>USD</p>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#FFDBB8" />
              </svg>
            </div>
          </div>

          <Link href='/support'>
            <div className='custom-tooltip mx-[2.778vw] xsm:hidden' data-tooltip="Support">
              <svg className='stroke-primaryLighten2 group fill-primary2 hover:fill-primaryLighten2' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path className='group-hover:stroke-primary2 transition-all duration-200 stroke-primaryLighten2' d="M12 16.5V12.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path className='group-hover:stroke-primary2 transition-all duration-200 stroke-primaryLighten2' d="M12 8.5H12.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
          {session.status === "authenticated" &&
            <button className='px-[16px] py-[4px] xsm:ml-[9.994px] bg-primaryLighten2 hover:bg-primary2 hover:text-primaryLighten2 rounded-[4px] text-primary2 border border-primaryLighten2 transition-all duration-200 font-outfit leading-normal font-normal text-[18px]'>Logout</button>
          }
        </div>
      </nav>

      <main className='w-full  bg-[#FFFBF6] pb-[112px] pt-[36px]'>
        <div className='w-fit h-[45px] flex gap-[0.417vw] m-auto xsm:hidden'>
          <div style={screenWidth > 768 || pathname === '/signup/chef' ? { display: 'flex' } : { display: "none" }} className='flex gap-[0.556vw] items-center'>
            <p className={pathname === '/signup/chef' ? 'w-[25px] h-[25px] text-[white] bg-primary2 border border-primary2 flex justify-center items-center rounded-full font-outfit text-[14px] font-medium leading-normal' : 'w-[25px] h-[25px] text-primaryLighten2 border border-primaryLighten2 flex justify-center items-center rounded-full font-outfit text-[14px] font-medium leading-normal'}>1</p>
            <p className={pathname === '/signup/chef' ? 'text-[14px] font-medium leading-normal text-primary2' : 'text-[14px] font-medium leading-normal text-TextColor opacity-[0.4]'}>About</p>
            <div className='w-[22px] h-[23px] ml-[-2px] flex justify-center items-center'>
              <svg className={pathname === '/signup/chef' ? 'stroke-primary2' : 'stroke-primaryLighten2'} width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 9L5.5 5L1.5 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>

          <div style={screenWidth > 768 || pathname === '/signup/chef/photo' ? { display: 'flex' } : { display: "none" }} className='flex gap-[0.556vw] items-center'>
            <p className={pathname === '/signup/chef/photo' ? 'w-[25px] h-[25px] text-[white] bg-primary2 border border-primary2 flex justify-center items-center rounded-full font-outfit text-[14px] font-medium leading-normal' : 'w-[25px] h-[25px] text-primaryLighten2 border border-primaryLighten2 flex justify-center items-center rounded-full font-outfit text-[14px] font-medium leading-normal'}>2</p>
            <p className={pathname === '/signup/chef/photo' ? 'text-[14px] font-medium leading-normal text-primary2' : 'text-[14px] font-medium leading-normal text-TextColor opacity-[0.4]'}>Photo</p>
            <div className='w-[22px] h-[23px] ml-[-2px] flex justify-center items-center'>
              <svg className={pathname === '/signup/chef/photo' ? 'stroke-primary2' : 'stroke-primaryLighten2'} width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 9L5.5 5L1.5 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>

          <div style={screenWidth > 768 || pathname === '/signup/chef/description' ? { display: 'flex' } : { display: "none" }} className='flex gap-[0.556vw] items-center'>
            <p className={pathname === '/signup/chef/description' ? 'w-[25px] h-[25px] text-[white] bg-primary2 border border-primary2 flex justify-center items-center rounded-full font-outfit text-[14px] font-medium leading-normal' : 'w-[25px] h-[25px] text-primaryLighten2 border border-primaryLighten2 flex justify-center items-center rounded-full font-outfit text-[14px] font-medium leading-normal'}>3</p>
            <p className={pathname === '/signup/chef/description' ? 'text-[14px] font-medium leading-normal text-primary2' : 'text-[14px] font-medium leading-normal text-TextColor opacity-[0.4]'}>Description</p>
            <div className='w-[22px] h-[23px] ml-[-2px] flex justify-center items-center'>
              <svg className={pathname === '/signup/chef/description' ? 'stroke-primary2' : 'stroke-primaryLighten2'} width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 9L5.5 5L1.5 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>

          <div style={screenWidth > 768 || pathname === '/signup/chef/video' ? { display: 'flex' } : { display: "none" }} className='flex gap-[0.556vw] items-center'>
            <p className={pathname === '/signup/chef/video' ? 'w-[25px] h-[25px] text-[white] bg-primary2 border border-primary2 flex justify-center items-center rounded-full font-outfit text-[14px] font-medium leading-normal' : 'w-[25px] h-[25px] text-primaryLighten2 border border-primaryLighten2 flex justify-center items-center rounded-full font-outfit text-[14px] font-medium leading-normal'}>4</p>
            <p className={pathname === '/signup/chef/video' ? 'text-[14px] font-medium leading-normal text-primary2' : 'text-[14px] font-medium leading-normal text-TextColor opacity-[0.4]'}>Video</p>
            <div className='w-[22px] h-[23px] ml-[-2px] flex justify-center items-center'>
              <svg className={pathname === '/signup/chef/video' ? 'stroke-primary2' : 'stroke-primaryLighten2'} width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 9L5.5 5L1.5 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>

          <div style={screenWidth > 768 || pathname === '/signup/chef/availability' ? { display: 'flex' } : { display: "none" }} className='flex gap-[0.556vw] items-center'>
            <p className={pathname === '/signup/chef/availability' ? 'w-[25px] h-[25px] text-[white] bg-primary2 border border-primary2 flex justify-center items-center rounded-full font-outfit text-[14px] font-medium leading-normal' : 'w-[25px] h-[25px] text-primaryLighten2 border border-primaryLighten2 flex justify-center items-center rounded-full font-outfit text-[14px] font-medium leading-normal'}>5</p>
            <p className={pathname === '/signup/chef/availability' ? 'text-[14px] font-medium leading-normal text-primary2' : 'text-[14px] font-medium leading-normal text-TextColor opacity-[0.4]'}>Availability</p>
            <div className='w-[22px] h-[23px] ml-[-2px] flex justify-center items-center'>
              <svg className={pathname === '/signup/chef/availability' ? 'stroke-primary2' : 'stroke-primaryLighten2'} width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 9L5.5 5L1.5 1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>

          <div style={screenWidth > 768 || pathname === '/signup/chef/pricing' ? { display: 'flex' } : { display: "none" }} className='flex gap-[0.556vw] items-center'>
            <p className={pathname === '/signup/chef/pricing' ? 'w-[25px] h-[25px] text-[white] bg-primary2 border border-primary2 flex justify-center items-center rounded-full font-outfit text-[14px] font-medium leading-normal' : 'w-[25px] h-[25px] text-primaryLighten2 border border-primaryLighten2 flex justify-center items-center rounded-full font-outfit text-[14px] font-medium leading-normal'}>6</p>
            <p className={pathname === '/signup/chef/pricing' ? 'text-[14px] font-medium leading-normal text-primary2' : 'text-[14px] font-medium leading-normal text-TextColor opacity-[0.4]'}>Pricing</p>
          </div>
        </div>

        <div className='px-[20.694vw] md:px-[3.681vw] sm:px-[3.681vw] xsm:px-[8.204vw] mt-[90px] xsm:mt-[0px]'>
          <div className='w-full border border-primaryLighten2 rounded-[16px] m-auto bg-[white] xsm:border-0 xsm:bg-[rgba(0,0,0,0)]'>
            {children}
          </div>
        </div>
      </main>
    </>
  )
}
