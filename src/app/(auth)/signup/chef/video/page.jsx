'use client'
import React, { useRef, useState } from 'react'
import ChangeVideo from "@/assets/Signup/ChangeVideo.png"
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addSignup } from '@/redux/signupSlice';

export default function Page() {
  const state = useSelector((state) => state.signup.signup);
  const dispatch = useDispatch();
  const router = useRouter()

  const [video, setVideo] = useState(state?.video || null);
  const [error, setError] = useState(null);

  const imageSubmitHandler = () => {

    if (video === null) {
      setError("Please add video")
      return
    }

    let data = {
      video,
    }
    console.log(data);
    dispatch(addSignup(data));
    router.push('/signup/chef/availability')
  }

  const videoFileHandler = (e) => {
    setVideo(e.target.files[0])
  }

  const youtubeLinkHandler = (e) => {
    setVideo(e.target.value)
  }

  const checkFileType = (file) => {
    return file instanceof File
  }

  return (
    <>
      <div className='w-fit m-auto flex flex-col gap-[12px] pt-[37px]'>
        <h1 className='text-primary2 text-center font-rubik text-[32px] font-semibold leading-[normal]'>Profile Photo</h1>
        <p className='text-[#ADABAB] text-center font-outfit text-[16px] font-normal leading-[normal]'>Chefs who look friendly and professional get the most students</p>
      </div>

      <div className='ml-[3.264vw] mr-[3.889vw] my-[43px]'>
        <div className='flex gap-[21px] items-center h-fit'>
          {video ?
            ((typeof window !== "undefined" && !checkFileType(video)) && video?.includes('www.youtube.com') ?
              <iframe width="375" height="265" src={video}></iframe>
              : (typeof window !== "undefined" && checkFileType(video)) ?
                <video src={URL.createObjectURL(video)} className='w-[375px] h-[265px]' controls></video>
                : <iframe width="375" height="265" src={video}></iframe>
            )
            : <Image src={ChangeVideo} alt='' className='w-[375px] h-[265px]' />
          }
          <div>
            <input onChange={videoFileHandler} className='hidden' id='video' type='file' />
            <label htmlFor='video' className="group flex items-center gap-[8px] justify-center w-[163px] transition-all duration-200 bg-[white] hover:bg-primary2 border border-primary2 text-primary2 hover:text-[white] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">
              Record
              <svg className='stroke-primary2 group-hover:stroke-[white] transition-all duration-200' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 7L16 12L23 17V7Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19H14C15.1046 19 16 18.1046 16 17V7C16 5.89543 15.1046 5 14 5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </label>
            <div className='mt-[51px] flex flex-col gap-[22px]'>
              <p className='font-outfit text-[16px] font-normal leading-[160%]'>Or paste a youtube link</p>
              <input defaultValue={(typeof window !== "undefined" && checkFileType(video)) ? null : video} onChange={youtubeLinkHandler} className='w-[23.889vw] h-[46px] p-[10px] border border-primaryLighten2 outline-primary2 rounded-[8px] font-outfit text-[16px] font-normal leading-[160%]' placeholder={'https:'} />
            </div>
          </div>
        </div>

        <div className='mt-[95px] flex justify-between relative'>
          <button onClick={() => router.back()} className="transition-all duration-200 bg-[white] hover:bg-primary2 border-2 border-primary2 text-primary2 hover:text-[white] w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Back</button>
          <button onClick={imageSubmitHandler} className="transition-all duration-200 bg-primary2 hover:bg-[white] border-2 border-primary2 text-[white] hover:text-primary2 w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Next</button>
          {error &&
            <div className='absolute top-full right-0 flex justify-end items-center'>
              <p className='font-outfit text-[16px] leading-normal font-normal text-primary2'>{error}</p>
            </div>
          }
        </div>
      </div>
    </>
  )
}