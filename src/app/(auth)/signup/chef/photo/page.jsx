'use client'
import React, { useState } from 'react'
import ChangeImage from "@/assets/Signup/ChangeImage.png"
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { addSignup } from '@/redux/signupSlice'
import { useRouter } from 'next/navigation'

export default function Page() {
  const state = useSelector((state) => state.signup.signup);
  const dispatch=useDispatch();
  const router=useRouter()

  const [image, setImage] = useState(state?.image || null);
  const [error, setError] = useState(null);

  const imageSubmitHandler = () => {
    console.log(state)
    let data = {
      image,
    }
    dispatch(addSignup(data));
    router.push('/signup/chef/description')
  }


  const imageFileHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      const allowedTypes = ['image/png', 'image/jpeg', 'image/svg+xml'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (file.size > maxSize) {
        console.log('Image size exceeds 5MB');
        return;
      }

      if (!allowedTypes.includes(file.type)) {
        console.log('Invalid image file type');
        return;
      }

      // Perform further processing or store the image file
      console.log('Image passed validation:', file);
    }

    setImage(e.target.files[0])
  }

  return (
    <>
      <div className='w-fit m-auto flex flex-col gap-[12px] pt-[37px]'>
        <h1 className='text-primary2 text-center font-rubik text-[32px] font-semibold leading-[normal]'>Profile Photo</h1>
        <p className='text-[#ADABAB] text-center font-outfit text-[16px] font-normal leading-[normal]'>Chefs who look friendly and professional get the most students</p>
      </div>

      <div className='ml-[3.264vw] mr-[3.889vw] my-[43px]'>
        <div className='flex gap-[42px] items-center h-fit'>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Selected Image" className="w-[328px] h-[328px] rounded-[23px]" />
          ) :
            <Image src={ChangeImage} alt='' className='w-[328px] h-[328px]' />
          }

          <div>
            <p className='text-[#ADABAB] font-outfit text-[16px] font-normal leading-normal'>Maximum size 5 MB. Allowed formats: PNG, JPG, SVG</p>
            <input onChange={imageFileHandler} type='file' id='image' className='hidden' accept=".png, .jpg, .svg" />
            <label htmlFor='image' className='cursor-pointer w-[128px] flex justify-center items-center gap-[8px] mt-[28px] border border-[#403D39] rounded-[4px] px-[16px] py-[8px] font-outfit text-[18px] leading-normal font-medium'>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 15V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V15" stroke="#403D39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.5 8L12.5 3L7.5 8" stroke="#403D39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 3V15" stroke="#403D39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              upload
            </label>
          </div>
        </div>

        <div className='mt-[95px] flex justify-between'>
          <button onClick={()=> router.back()} className="transition-all duration-200 bg-[white] hover:bg-primary2 border-2 border-primary2 text-primary2 hover:text-[white] w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Back</button>
          <button onClick={imageSubmitHandler} className="transition-all duration-200 bg-primary2 hover:bg-[white] border-2 border-primary2 text-[white] hover:text-primary2 w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Next</button>
        </div>
      </div>
    </>
  )
}
