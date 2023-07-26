'use client'
import AvailabilityCard from "@/components/Signup/AvailabilityCard";
import { addSignup } from "@/redux/signupSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as yup from 'yup';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "@/utils/firebase";

// const schema = yup.object().shape({
//   timeZone: yup.string().required('Time Zone is required'),
//   monday: yup.array().of(yup.object()),
//   tuesday: yup.array().of(yup.object()),
//   wednesday: yup.array().of(yup.object()),
//   thursday: yup.array().of(yup.object()),
//   friday: yup.array().of(yup.object()),
//   saturday: yup.array().of(yup.object()),
//   sunday: yup.array().of(yup.object()),
// }).test('has-day', 'At least one day must have a value', function (value) {
//   const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = value;
//   if (monday.length === 0 && tuesday.length === 0 && wednesday.length === 0 && thursday.length === 0 && friday.length === 0 && saturday.length === 0 && sunday.length === 0) {
//     throw new yup.ValidationError('At least one day must have a value', null, this.path);
//   }
//   return true;
// });

const schema = yup.object().shape({
  timeZone: yup.string().required('Time Zone is required'),
  availability: yup.object().shape({
    monday: yup.array().of(yup.object()),
    tuesday: yup.array().of(yup.object()),
    wednesday: yup.array().of(yup.object()),
    thursday: yup.array().of(yup.object()),
    friday: yup.array().of(yup.object()),
    saturday: yup.array().of(yup.object()),
    sunday: yup.array().of(yup.object()),
  })
});

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const state = useSelector(state => state.signup.signup);
  const [timeZone, setTimeZone] = useState(state?.timeZone || null);
  const [showTimeZone, setShowTimeZone] = useState(false);

  const [monday, setMonday] = useState(state?.availability?.monday || []);
  const [tuesday, settuesday] = useState(state?.availability?.tuesday || []);
  const [wednesday, setwednesday] = useState(state?.availability?.wednesday || []);
  const [thursday, setthursday] = useState(state?.availability?.thursday || []);
  const [friday, setfriday] = useState(state?.availability?.friday || []);
  const [saturday, setsaturday] = useState(state?.availability?.saturday || []);
  const [sunday, setsunday] = useState(state?.availability?.sunday || []);


  const availabilityFormHandler = async () => {
    let data = {
      timeZone: timeZone,
      availability: {
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
        saturday: saturday,
        sunday: sunday,
      }
    }

    try {
      await schema.validate(data, { abortEarly: false });
      console.log(data);
      dispatch(addSignup(data));
      router.push('/signup/chef/pricing')
    } catch (errors) {
      console.log(errors)
      setError(errors?.inner[0].message + "")
    }
  }

  const [error, setError] = useState(null)

  return (
    <>
      <div className='w-fit m-auto flex flex-col gap-[12px] pt-[37px] px-[5.139vw] xsm:px-0'>
        <h1 className='text-primary2 text-center font-rubik text-[32px] font-semibold leading-[normal]'>Availability</h1>
      </div>

      <div className='ml-[3.264vw] mr-[3.889vw] my-[43px] xsm:ml-0 xsm:mr-0'>
        <div>
          <h2 className="font-rubik text-[20px] font-semibold leading-normal ">Choose your timezone</h2>
          <p className="text-[#ADABAB] font-outfit text-[20px] font-normal leading-[160%] mt-[12px]">To get more students to your profile, we recommend a base price of $ per hour for new tutors in your subject and with your experience level.</p>

          <div className='relative mt-[20px]'>
            <div style={showTimeZone ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}} onClick={() => setShowTimeZone(!showTimeZone)} className='cursor-pointer h-[40px] border gap-[10px] border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
              <p className='font-outfit text-[16px] font-medium leading-normal flex-1'>{timeZone || "Select option"}</p>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
              </svg>
            </div>
            <div style={showTimeZone ? { maxHeight: "400px" } : { maxHeight: "0px", border: "0px solid #000" }} className='overflow-auto z-[2000] absolute w-full left-0 top-full border border-t-0 bg-[white] divide-y divide-primaryLighten2 border-primaryLighten2 rounded-br-[4px] rounded-bl-[4px]'>
              <p onClick={() => { setTimeZone("Select option"); setShowTimeZone(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-medium leading-normal flex-1'>{"Select option"}</p>
              {['GMT -12', 'GMT -11', 'GMT -10', 'GMT -9', 'GMT -8', 'GMT -7', 'GMT -6', 'GMT -5', 'GMT -4', 'GMT -3', 'GMT -2', 'GMT -1', 'GMT +0', 'GMT +1', 'GMT +2', 'GMT +3', 'GMT +4', 'GMT +5', 'GMT +6', 'GMT +7', 'GMT +8', 'GMT +9', 'GMT +10', 'GMT +11', 'GMT +12'].map((item, index) => {
                return (
                  <p key={item + index} onClick={() => { setTimeZone(item); setShowTimeZone(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-medium leading-normal flex-1'>{item}</p>
                )
              })}
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[45px] h-fit mt-[64px]'>
          <div className="flex flex-col gap-[12px]">
            <h2 className="font-rubik text-[20px] font-semibold leading-normal ">COOK's commissions</h2>
            <p className="text-[#ADABAB] font-outfit text-[20px] font-normal leading-[160%] ">Availability shows your potential working hours.</p>
          </div>

          <div className="flex flex-col gap-[38px]">
            <AvailabilityCard clearTimings={() => setMonday([])} setTimings={(time) => setMonday((prev) => {
              const existingItemIndex = prev.findIndex(item => item.id === time.id);
              if (existingItemIndex !== -1) {
                const updatedArray = [...prev];
                updatedArray[existingItemIndex] = time;
                return updatedArray;
              } else {
                return [...prev, time];
              }
            })} title={"Monday"}
              removeItem={(id) => { setMonday((prev) => prev.filter((time) => time.id !== id)) }} arrayLength={monday.length} data={monday}
            />

            <AvailabilityCard clearTimings={() => settuesday([])} setTimings={(time) => settuesday((prev) => {
              const existingItemIndex = prev.findIndex(item => item.id === time.id);
              if (existingItemIndex !== -1) {
                const updatedArray = [...prev];
                updatedArray[existingItemIndex] = time;
                return updatedArray;
              } else {
                return [...prev, time];
              }
            })} title={"Tuesday"}
              removeItem={(id) => { settuesday((prev) => prev.filter((time) => time.id !== id)) }} arrayLength={tuesday.length} data={tuesday}
            />

            <AvailabilityCard clearTimings={() => setwednesday([])} setTimings={(time) => setwednesday((prev) => {
              const existingItemIndex = prev.findIndex(item => item.id === time.id);
              if (existingItemIndex !== -1) {
                const updatedArray = [...prev];
                updatedArray[existingItemIndex] = time;
                return updatedArray;
              } else {
                return [...prev, time];
              }
            })} title={"Wednesday"}
              removeItem={(id) => { setwednesday((prev) => prev.filter((time) => time.id !== id)) }} arrayLength={wednesday.length} data={wednesday}
            />


            <AvailabilityCard clearTimings={() => setthursday([])} setTimings={(time) => setthursday((prev) => {
              const existingItemIndex = prev.findIndex(item => item.id === time.id);
              if (existingItemIndex !== -1) {
                const updatedArray = [...prev];
                updatedArray[existingItemIndex] = time;
                return updatedArray;
              } else {
                return [...prev, time];
              }
            })} title={"Thursday"}
              removeItem={(id) => { setthursday((prev) => prev.filter((time) => time.id !== id)) }} arrayLength={thursday.length} data={thursday}
            />


            <AvailabilityCard clearTimings={() => setfriday([])} setTimings={(time) => setfriday((prev) => {
              const existingItemIndex = prev.findIndex(item => item.id === time.id);
              if (existingItemIndex !== -1) {
                const updatedArray = [...prev];
                updatedArray[existingItemIndex] = time;
                return updatedArray;
              } else {
                return [...prev, time];
              }
            })} title={"Friday"}
              removeItem={(id) => { setfriday((prev) => prev.filter((time) => time.id !== id)) }} arrayLength={friday.length} data={friday}
            />

            <AvailabilityCard clearTimings={() => setsaturday([])} setTimings={(time) => setsaturday((prev) => {
              const existingItemIndex = prev.findIndex(item => item.id === time.id);
              if (existingItemIndex !== -1) {
                const updatedArray = [...prev];
                updatedArray[existingItemIndex] = time;
                return updatedArray;
              } else {
                return [...prev, time];
              }
            })} title={"Saturday"}
              removeItem={(id) => { setsaturday((prev) => prev.filter((time) => time.id !== id)) }} arrayLength={saturday.length} data={saturday}
            />

            <AvailabilityCard clearTimings={() => setsunday([])} setTimings={(time) => setsunday((prev) => {
              const existingItemIndex = prev.findIndex(item => item.id === time.id);
              if (existingItemIndex !== -1) {
                const updatedArray = [...prev];
                updatedArray[existingItemIndex] = time;
                return updatedArray;
              } else {
                return [...prev, time];
              }
            })} title={"Sunday"}
              removeItem={(id) => { setsunday((prev) => prev.filter((time) => time.id !== id)) }} arrayLength={sunday.length} data={sunday}
            />

          </div>
        </div>

        <div className='mt-[95px] xsm:mt-[42px] flex justify-between relative'>
          <button onClick={() => router.back()} className="transition-all duration-200 bg-[rgba(0,0,0,0)] hover:bg-primary2 border-2 border-primary2 text-primary2 hover:text-[white] w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Back</button>
          <button onClick={() => availabilityFormHandler()} className="transition-all duration-200 bg-primary2 hover:bg-[rgba(0,0,0,0)] border-2 border-primary2 text-[white] hover:text-primary2 w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Next</button>
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
