'use client'
import AvailabilityCard from "@/components/Signup/AvailabilityCard";
import { API_URL } from "@/utils/consts";
import { storage } from "@/utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const state = useSelector((state) => state.signup.signup)
  console.log(state);
  const [price, setPrice] = useState(20);

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const [error, setError] = useState(null)

  const priceFormHandler = async () => {
    let data = {
      price: +price,
      ...state
    }

    if (data.image && data.image instanceof File) {
      const url = await uploadImage(data.image)
      console.log(url)
      data.image = url;
    }
    if (data.video && data.video instanceof File) {
      const url = await uploadVideo(data.image)
      console.log(url)
      data.video = url;
    }

    try {
      let res = await fetch(API_URL + 'api/auth/tutor-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      res = await res.json();

      res.status === 201 && router.push(`/tutor-dashboard?email=${data.email}`);
      res.status === 500 && setError("Error occured while completing account");
      setLoading(false);

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  async function uploadImage(file) {
    const storageRef = ref(storage, `/images/${file.name}`);

    const uploadTask = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    return url;
  }

  async function uploadVideo(file) {
    const storageRef = ref(storage, `/videos/${file.name}`);

    const uploadTask = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    return url;
  }

  return (
    <>
      <div className='w-fit m-auto flex flex-col gap-[12px] pt-[37px] px-[5.139vw]'>
        <h1 className='text-primary2 text-center font-rubik text-[32px] font-semibold leading-[normal]'>Pricing</h1>
      </div>

      <div className='ml-[3.264vw] mr-[3.889vw] my-[43px]'>
        <div>
          <h2 className="font-rubik text-[20px] font-semibold leading-normal ">Set your hourly rate</h2>
          <p className="text-[#ADABAB] font-outfit text-[20px] font-normal leading-[160%] mt-[12px]">Having the right timezone is crucial for effectively organizing lessons with students from around the world.</p>
          <div className="flex items-center gap-[12px]">
            <input onChange={(e) => setPrice(e.target.value)} className="!w-[102px] h-[38px] p-[9px] flex justify-center items-center font-outfit text-[16px] font-medium leading-normal border border-primaryLighten2 outline-primary2 text-center" placeholder="20" type="number" />
            <p className="font-outfit font-medium leading-normal text-[16px]">$</p>
          </div>
        </div>

        <div className='mt-[95px] flex justify-between relative'>
          <button onClick={()=> router.back()} className="transition-all duration-200 bg-[white] hover:bg-primary2 border-2 border-primary2 text-primary2 hover:text-[white] w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Back</button>
          <button onClick={() => priceFormHandler()} className="transition-all duration-200 bg-primary2 hover:bg-[white] border-2 border-primary2 text-[white] hover:text-primary2 w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Finish</button>
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
