'use client'
import React, { useState } from 'react'
import AmericaIcon from "@/assets/Signup/AmericaIcon.png"
import Image from 'next/image'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addSignup } from '@/redux/signupSlice';
import { useRouter } from 'next/navigation';

const schema = Yup.object().shape({
  firstName: Yup.string().trim().required('First name is required').test('non-null', 'First name is required', value => value !== null && value.trim() !== '' && value !== 'Select option'),
  lastName: Yup.string().trim().required('Last name is required').test('non-null', 'Last name is required', value => value !== null && value.trim() !== '' && value !== 'Select option'),
  email: Yup.string().trim().email('Invalid email').required('Email is required').test('non-null', 'Email is required', value => value !== null && value.trim() !== '' && value !== 'Select option'),
  country: Yup.string().trim().required('Country is required').test('non-null', 'Country is required', value => value !== null && value.trim() !== '' && value !== 'Select option'),
  level: Yup.string().trim().required('Level is required').test('non-null', 'Level is required', value => value !== null && value.trim() !== '' && value !== 'Select option'),
  language: Yup.string().trim().required('Language is required').test('non-null', 'Language is required', value => value !== null && value.trim() !== '' && value !== 'Select option'),
  experience: Yup.string().trim().required('Experience is required').test('non-null', 'Experience is required', value => value !== null && value.trim() !== '' && value !== 'Select option'),
  subject: Yup.string().trim().required('Subject is required').test('non-null', 'Subject is required', value => value !== null && value.trim() !== '' && value !== 'Select option'),
  ageConsent: Yup.boolean().oneOf([true], 'Age consent is required').required('Age consent is required'),
}).strict();


export default function Page() {
  const dispatch=useDispatch();
  const router=useRouter();

  const state=useSelector((state)=> state.signup.signup);

  const [country, setCountry] = useState(state?.country || null);
  const [level, setLevel] = useState(state?.level || null);
  const [language, setLanguage] = useState(state?.language || null);
  const [experience, setExperience] = useState(state?.experience || null)
  const [subject, setSubject] = useState(state?.subject || null);

  const [showcountry, setshowcountry] = useState(false);
  const [showlevel, setshowlevel] = useState(false);
  const [showlanguage, setshowlanguage] = useState(false);
  const [showexperience, setshowexperience] = useState(false)
  const [showsubject, setshowsubject] = useState(false);



  const aboutFormHandler = async (e) => {
    e.preventDefault();
    setError(null)

    const data = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      country: country,
      level: level,
      language: language,
      experience: experience,
      subject: subject,
      ageConsent:e.target[3].checked
    }

    try {
      await schema.validate(data, { abortEarly: false });
      console.log(data);
      dispatch(addSignup(data));
      router.push('/signup/chef/photo')
    } catch (errors) {
      console.log(errors?.inner[0]);
      setError(errors?.inner[0].message + "")
    }

  }

  const [error, setError] = useState(null)

  return (
    <div>
      <div className='ml-[60.998px] mr-[4.931vw] flex flex-col gap-[12px] pt-[37px]'>
        <h1 className='text-primary2 text-center font-rubik text-[32px] font-semibold leading-[normal]'>About</h1>
        <p className='text-[#ADABAB] text-center font-outfit text-[16px] font-normal leading-[normal]'>Start making your tutor profile. It saves your progress as you go. You can finish your sign-up any time.</p>
      </div>

      <form onSubmit={aboutFormHandler} className='flex flex-col gap-[52px] ml-[3.264vw] mr-[3.889vw] my-[43px]' action="">
        <div className='grid gap-[22px] grid-cols-2'>
          <div className='flex flex-col gap-[12px]'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">First Name</label>
            <input defaultValue={state?.firstName} className='h-[40px] border border-primaryLighten2 outline-primary2 rounded-[4px] font-outfit text-[16px] font-normal leading-normal p-[8px] ' />
          </div>
          <div className='flex flex-col gap-[12px]'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Last Name</label>
            <input defaultValue={state?.lastName} className='h-[40px] border border-primaryLighten2 outline-primary2 rounded-[4px] font-outfit text-[16px] font-normal leading-normal p-[8px] ' />
          </div>
          <div className='flex flex-col gap-[12px]'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Email</label>
            <input defaultValue={state?.email} className='h-[40px] border border-primaryLighten2 outline-primary2 rounded-[4px] font-outfit text-[16px] font-normal leading-normal p-[8px] ' />
          </div>

          <div className='flex flex-col gap-[12px] relative'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Country of origin</label>
            <div style={showcountry ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}} onClick={() => setshowcountry(!showcountry)} className='cursor-pointer h-[40px] border gap-[10px] border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
              <Image src={AmericaIcon} alt='' className='w-[22px] h-[22px] ' />
              <p className='font-outfit text-[16px] font-normal leading-normal flex-1'>{country || "Select option"}</p>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
              </svg>
            </div>
            <div style={showcountry ? { maxHeight: "1000px" } : { maxHeight: "0px", border: "0px solid #000" }} className='overflow-hidden z-[2000]  absolute w-full left-0 top-full border border-t-0 bg-[white] divide-y divide-primaryLighten2 border-primaryLighten2 rounded-br-[4px] rounded-bl-[4px]'>
              <p onClick={() => { setCountry("Select option"); setshowcountry(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{"Select option"}</p>
              {['United States', 'Pakistan'].map((item) => {
                return (
                  <p onClick={() => { setCountry(item); setshowcountry(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{item}</p>
                )
              })}
            </div>
          </div>
        </div>

        <div className='grid gap-[22px] grid-cols-2'>
          <div className='flex flex-col gap-[12px] relative'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Level</label>
            <div style={showlevel ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}} onClick={() => setshowlevel(!showlevel)} className='cursor-pointer h-[40px] border gap-[10px] border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
              <p className='font-outfit text-[16px] font-normal leading-normal flex-1'>{level || "Select option"}</p>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
              </svg>
            </div>
            <div style={showlevel ? { maxHeight: "1000px" } : { maxHeight: "0px", border: "0px solid #000" }} className='overflow-hidden z-[2000]  absolute w-full left-0 top-full border border-t-0 bg-[white] divide-y divide-primaryLighten2 border-primaryLighten2 rounded-br-[4px] rounded-bl-[4px]'>
              <p onClick={() => { setLevel("Select option"); setshowlevel(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{"Select option"}</p>
              {['B2', 'B3'].map((item) => {
                return (
                  <p onClick={() => { setLevel(item); setshowlevel(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{item}</p>
                )
              })}
            </div>
          </div>

          <div className='flex flex-col gap-[12px] relative'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Language Spoken</label>
            <div style={showlanguage ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}} onClick={() => setshowlanguage(!showlanguage)} className='cursor-pointer h-[40px] border gap-[10px] border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
              <p className='font-outfit text-[16px] font-normal leading-normal flex-1'>{language || "Select option"}</p>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
              </svg>
            </div>
            <div style={showlanguage ? { maxHeight: "1000px" } : { maxHeight: "0px", border: "0px solid #000" }} className='overflow-hidden z-[2000]  absolute w-full left-0 top-full border border-t-0 bg-[white] divide-y divide-primaryLighten2 border-primaryLighten2 rounded-br-[4px] rounded-bl-[4px]'>
              <p onClick={() => { setLanguage("Select option"); setshowlanguage(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{"Select option"}</p>
              {['English', 'German'].map((item) => {
                return (
                  <p onClick={() => { setLanguage(item); setshowlanguage(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{item}</p>
                )
              })}
            </div>
          </div>
          <div className='flex flex-col gap-[12px] relative'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Experience Level</label>
            <div style={showexperience ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}} onClick={() => setshowexperience(!showexperience)} className='cursor-pointer h-[40px] border gap-[10px] border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
              <p className='font-outfit text-[16px] font-normal leading-normal flex-1'>{experience || "Select option"}</p>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
              </svg>
            </div>
            <div style={showexperience ? { maxHeight: "1000px" } : { maxHeight: "0px", border: "0px solid #000" }} className='overflow-hidden z-[2000] absolute w-full left-0 top-full border border-t-0 bg-[white] divide-y divide-primaryLighten2 border-primaryLighten2 rounded-br-[4px] rounded-bl-[4px]'>
              <p onClick={() => { setExperience("Select option"); setshowexperience(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{"Select option"}</p>
              {['1-2 years', '2-3 years'].map((item) => {
                return (
                  <p onClick={() => { setExperience(item); setshowexperience(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{item}</p>
                )
              })}
            </div>
          </div>
          <div className='flex flex-col gap-[12px] relative'>
            <label className='font-outfit text-[14px] font-semibold leading-[normal]' htmlFor="">Subject taught</label>
            <div style={showsubject ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}} onClick={() => setshowsubject(!showsubject)} className='cursor-pointer h-[40px] border gap-[10px] border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
              <p className='font-outfit text-[16px] font-normal leading-normal flex-1'>{subject || "Select option"}</p>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
              </svg>
            </div>
            <div style={showsubject ? { maxHeight: "1000px" } : { maxHeight: "0px", border: "0px solid #000" }} className='overflow-hidden z-[2000] absolute w-full left-0 top-full border border-t-0 bg-[white] divide-y divide-primaryLighten2 border-primaryLighten2 rounded-br-[4px] rounded-bl-[4px]'>
              <p onClick={() => { setSubject("Select option"); setshowsubject(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{"Select option"}</p>
              {['Baking', 'Cooking'].map((item) => {
                return (
                  <p onClick={() => { setSubject(item); setshowsubject(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{item}</p>
                )
              })}
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center relative'>
          <div className='flex items-center gap-[12px]'>
            <input defaultChecked={state?.ageConsent} className='myCheckbox min-w-[23px] min-h-[23px]' type="checkbox" name="" id="ageConsent" />
            <label className='font-outfit font-normal text-[18px] leading-normal cursor-pointer select-none' htmlFor="ageConsent">I confirm I'm over 18</label>
          </div>
          <button className="transition-all duration-200 bg-primary2 hover:bg-[white] border border-primary2 text-[white] hover:text-primary w-[128px] py-[8px] font-outfit text-[18px] leading-normal font-medium rounded-[4px]">Next</button>
          {error &&
            <div className='absolute top-full right-0 flex justify-end items-center'>
              <p className='font-outfit text-[16px] leading-normal font-normal text-primary2'>{error}</p>
            </div>
          }
        </div>
      </form>
    </div>
  )
}
