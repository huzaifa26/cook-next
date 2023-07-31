'use client'
import ProfileReviewCard from '@/components/Profile/ProfileReviewCard';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import ReviewProfilePic from "@/assets/Profile/ReviewProfilePic.png"

export default function Page() {
  const searchParams = useSearchParams()
  const [tutor, setTutor] = useState(JSON.parse(searchParams.get("data")));

  const [cardType, setCardType] = useState('');
  const [showCardType, setShowCardType] = useState('');


  const [isCardAvailable, setIsCardAvailable] = useState(true);

  const [cards, setCards] = useState(false);
  const [showCards, setShowCards] = useState(false);

  return (
    <div className='flex gap-[46px]'>
      <div className='w-[401px] min-h-[628px] h-fit bg-[white] p-[24px] rounded-[12px] border border-primaryLighten2 flex flex-col gap-[32px]'>
        <div className='flex items-center gap-[32px]'>
          <Image className='rounded-[12px]' loader={() => tutor?.picture} width={83} height={83} src={tutor?.picture} alt=''></Image>
          <div>
            <p className='text-primary2 font-outfit text-[16px] font-normal leading-normal'>Cooking</p>
            <h4 className='font-outfit text-[24px] font-bold leading-[24px] mt-[4px]'>{tutor?.name}</h4>
            <div className='flex items-center gap-[12px] mt-[16px]'>
              <div className='flex items-center gap-[3px]'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.54739 0.964187C7.72735 0.58081 8.27265 0.58081 8.45261 0.964188L10.3588 5.02479C10.4295 5.17558 10.5708 5.28122 10.7354 5.30652L15.0389 5.96794C15.441 6.02975 15.6049 6.52034 15.3207 6.81144L12.1764 10.0318C12.0655 10.1454 12.0151 10.3049 12.0406 10.4616L12.7782 14.9836C12.8454 15.3956 12.4081 15.7036 12.0428 15.5016L8.24196 13.3998C8.0914 13.3166 7.9086 13.3166 7.75804 13.3998L3.95722 15.5016C3.59194 15.7036 3.15459 15.3956 3.22178 14.9836L3.95936 10.4616C3.98492 10.3049 3.93454 10.1454 3.82363 10.0318L0.679348 6.81145C0.395122 6.52035 0.559019 6.02975 0.961143 5.96794L5.26459 5.30652C5.42923 5.28122 5.57046 5.17558 5.64125 5.02479L7.54739 0.964187Z" fill="#D3CD39" />
                </svg>
                <p className='font-outfit text-[24px] leading-normal font-normal '>5</p>
              </div>
              <p className='font-outfit text-[24px] leading-normal font-normal '>(100 reviews)</p>
            </div>
          </div>
        </div>

        <div className='border border-primaryLighten2 w-full'></div>

        <div>
          <h3 className='font-outfit text-[18px] font-medium leading-normal'>Friday, July 28 at 15:30</h3>
          <p className='font-outfit text-[16px] font-normal leading-normal'>Time is based on your location</p>
        </div>

        <div className='border border-primaryLighten2 w-full'></div>

        <div>
          <h3 className='font-outfit text-[20px] font-bold leading-normal'>Your order</h3>
          <div className='flex flex-col gap-[21px] mt-[21px]'>
            <div className='flex justify-between items-center'>
              <p className='font-outfit text-[18px] font-normal leading-normal'>50-min lesson</p>
              <p className='font-outfit text-[18px] font-medium leading-normal'>USD 90</p>
            </div>
            <div className='flex justify-between items-center'>
              <p className='font-outfit text-[18px] font-normal leading-normal'>Processing fee</p>
              <p className='font-outfit text-[18px] font-medium leading-normal'>USD 10</p>
            </div>
          </div>
        </div>

        <div className='border border-primaryLighten2 w-full'></div>

        <div>
          <div className='flex justify-between items-center'>
            <p className='font-outfit text-[20px] font-bold leading-normal'>Total</p>
            <p className='font-outfit text-[18px] font-bold text-primary2 leading-normal'>USD 100</p>
          </div>

          <div className='p-[16px] rounded-[12px] bg-primaryLighten2 mt-[32px]'>
            <div className='flex flex-col gap-[16px]'>
              <div className='flex items-center gap-[12px]'>
                <input className='myCheckbox min-w-[23px] min-h-[23px]' type="checkbox" name="" id="updates" />
                <label className='font-outfit font-bold text-[20px] leading-normal cursor-pointer select-none' htmlFor="updates">Free replacement and refund</label>
              </div>

              <p className='font-outfit text-[18px] font-normal leading-[28.8px]'>Try another chef for free or get a  refund</p>
            </div>
          </div>
        </div>
      </div>




      <div className='flex-1'>
        <div className='bg-[white] p-[24px] rounded-[12px] border border-primaryLighten2 flex flex-col gap-[32px] h-fit'>

          <h3 className='font-outfit text-[18px] font-semibold leading-normal mb-[-20px]'>Payment method</h3>

          {isCardAvailable ?
            <div className=''>
              <div className='flex flex-col gap-[12px] mt-[12px]'>
                <div className=' relative'>
                  <div style={showCards ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}} onClick={() => setShowCards(!showCards)} className='cursor-pointer h-[40px] border gap-[10px] border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
                    <p className='font-outfit text-[16px] font-normal leading-normal flex-1 flex gap-[10px] items-center'>{cards ||
                      <>
                        <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1828_46703)">
                            <path d="M20.3262 2.13885H11.6738V17.8611H20.3262V2.13885Z" fill="#FF5F00" />
                            <path d="M12.2231 9.99999C12.2231 6.94444 13.624 4.02777 15.9862 2.13888C11.7013 -1.27779 5.49353 -0.527785 2.11499 3.83333C-1.26355 8.16666 -0.521921 14.4444 3.79052 17.8611C7.38881 20.7222 12.4154 20.7222 16.0137 17.8611C13.624 15.9722 12.2231 13.0555 12.2231 9.99999Z" fill="#EB001B" />
                            <path d="M31.9999 9.99999C31.9999 15.5278 27.5776 20 22.1115 20C19.8866 20 17.7441 19.25 16.0137 17.8611C20.2987 14.4444 21.0403 8.16666 17.6617 3.80555C17.1673 3.19444 16.618 2.6111 16.0137 2.13888C20.2987 -1.27779 26.5338 -0.527785 29.8849 3.83333C31.2583 5.58333 31.9999 7.74999 31.9999 9.99999Z" fill="#F79E1B" />
                            <path d="M31.0661 16.1944V15.8611H31.2034V15.8055H30.8738V15.8611H31.0111V16.1944H31.0661ZM31.6978 16.1944V15.8055H31.5879L31.4781 16.0833L31.3682 15.8055H31.2583V16.1944H31.3407V15.8889L31.4506 16.1389H31.533L31.6429 15.8889V16.1944H31.6978Z" fill="#F79E1B" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1828_46703">
                              <rect width="32" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        *1234
                      </>}
                    </p>
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
                    </svg>
                  </div>
                  <div style={showCards ? { maxHeight: "300px" } : { maxHeight: "0px", border: "0px solid #000" }} className='overflow-auto z-[2000]  absolute w-full left-0 top-full border border-t-0 bg-[white] divide-y divide-primaryLighten2 border-primaryLighten2 rounded-br-[4px] rounded-bl-[4px]'>
                    <p onClick={() => { setCards("Select option"); setShowCards(false) }} className='px-[8px] flex gap-[12px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{
                      <>
                        <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1828_46703)">
                            <path d="M20.3262 2.13885H11.6738V17.8611H20.3262V2.13885Z" fill="#FF5F00" />
                            <path d="M12.2231 9.99999C12.2231 6.94444 13.624 4.02777 15.9862 2.13888C11.7013 -1.27779 5.49353 -0.527785 2.11499 3.83333C-1.26355 8.16666 -0.521921 14.4444 3.79052 17.8611C7.38881 20.7222 12.4154 20.7222 16.0137 17.8611C13.624 15.9722 12.2231 13.0555 12.2231 9.99999Z" fill="#EB001B" />
                            <path d="M31.9999 9.99999C31.9999 15.5278 27.5776 20 22.1115 20C19.8866 20 17.7441 19.25 16.0137 17.8611C20.2987 14.4444 21.0403 8.16666 17.6617 3.80555C17.1673 3.19444 16.618 2.6111 16.0137 2.13888C20.2987 -1.27779 26.5338 -0.527785 29.8849 3.83333C31.2583 5.58333 31.9999 7.74999 31.9999 9.99999Z" fill="#F79E1B" />
                            <path d="M31.0661 16.1944V15.8611H31.2034V15.8055H30.8738V15.8611H31.0111V16.1944H31.0661ZM31.6978 16.1944V15.8055H31.5879L31.4781 16.0833L31.3682 15.8055H31.2583V16.1944H31.3407V15.8889L31.4506 16.1389H31.533L31.6429 15.8889V16.1944H31.6978Z" fill="#F79E1B" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1828_46703">
                              <rect width="32" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        *1234
                      </>
                    }</p>
                    {/* {languagesArray.map((item, index) => {
                return (
                  <p key={item + index} onClick={() => { setLanguage(item); setshowlanguage(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{item}</p>
                )
              })} */}
                  </div>
                </div>
              </div>
            </div>
            :
            <div>
              <div className='flex flex-col gap-[12px]'>
                <div className=' relative'>
                  <div style={showCardType ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}} onClick={() => setShowCardType(!showCardType)} className='cursor-pointer h-[40px] border gap-[10px] border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]'>
                    <p className='font-outfit text-[16px] font-normal leading-normal flex-1'>{cardType || "New card"}</p>
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.03306 4.96142C4.73955 5.25797 4.26045 5.25797 3.96694 4.96142L0.568333 1.52759C0.0996107 1.05401 0.435073 0.25 1.10139 0.25L7.89861 0.250001C8.56493 0.250001 8.90039 1.05401 8.43167 1.52759L5.03306 4.96142Z" fill="#D27722" />
                    </svg>
                  </div>
                  <div style={showCardType ? { maxHeight: "300px" } : { maxHeight: "0px", border: "0px solid #000" }} className='overflow-auto z-[2000]  absolute w-full left-0 top-full border border-t-0 bg-[white] divide-y divide-primaryLighten2 border-primaryLighten2 rounded-br-[4px] rounded-bl-[4px]'>
                    <p onClick={() => { setCardType("Select option"); setShowCardType(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{"New card"}</p>
                    {/* {languagesArray.map((item, index) => {
                return (
                  <p key={item + index} onClick={() => { setLanguage(item); setshowlanguage(false) }} className='px-[8px] py-[8px] cursor-pointer font-outfit text-[16px] font-normal leading-normal flex-1'>{item}</p>
                )
              })} */}
                  </div>
                </div>
                <input placeholder='1234 1234 1234 1234' className='w-full cursor-pointer h-[40px] border gap-[10px] border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]' />
                <div className='flex gap-[12px]'>
                  <input placeholder='MM/YY' className='w-full cursor-pointer h-[40px] border gap-[10px] border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]' />
                  <input placeholder='CVC' className='w-full cursor-pointer h-[40px] border gap-[10px] border-primaryLighten2 outline-primary2 rounded-[4px] flex items-center p-[8px]' />
                </div>
              </div>
              <div className='flex items-center gap-[12px] mt-[32px]'>
                <input className='myCheckbox min-w-[23px] min-h-[23px]' type="checkbox" name="" id="updates" />
                <label className='font-outfit font-normal text-[18px] leading-normal cursor-pointer select-none' htmlFor="updates">Save this card for future payments</label>
              </div>
            </div>
          }


          <button className='w-full bg-primary2 hover:bg-[white] border border-primary2 h-[43px] text-[white] hover:text-primary2 rounded-[4px] transition-all duration-[200] font-kanit text-[18px] font-normal leading-normal'>Confirm payment • 10 USD</button>
          <div className='border border-primaryLighten2 w-full'></div>

          <div className='flex flex-col gap-[7px]'>
            <h5 className='font-outfit text-[18px] font-medium leading-normal'>By clicking  “Confirm payment”, you agree to </h5>
            <p className='font-outfit text-[16px] font-normal leading-normal'>COOK's Refund & Payment Policy </p>
          </div>
          <div className='flex gap-[8px] items-center'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9.75C15.75 8.92157 15.0784 8.25 14.25 8.25Z" stroke="#D27722" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5.25 8.25V5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V8.25" stroke="#D27722" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className='font-outfit text-[12px] font-normal leading-normal text-primary2'>COOK's Refund & Payment Policy </p>
          </div>
        </div>

        <div className='bg-[white] p-[24px] rounded-[12px] border border-primaryLighten2 flex-1 flex flex-col gap-[32px] h-fit mt-[32px]'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-[12px] items-center'>
              <div className='flex gap-[3px] items-center px-[12px] border border-primaryLighten2 rounded-[3px]'>
                <p>5</p>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.77369 0.482094C5.86368 0.290405 6.13632 0.290405 6.22631 0.482094L7.79738 3.8289C7.83277 3.9043 7.90338 3.95712 7.9857 3.96977L11.5194 4.51289C11.7205 4.54379 11.8024 4.78909 11.6603 4.93464L9.08818 7.56899C9.03273 7.62579 9.00754 7.70554 9.02032 7.78389L9.62511 11.4918C9.65871 11.6978 9.44003 11.8518 9.25739 11.7508L6.12098 10.0164C6.0457 9.9748 5.9543 9.9748 5.87902 10.0164L2.74261 11.7508C2.55997 11.8518 2.34129 11.6978 2.37489 11.4918L2.97968 7.78389C2.99246 7.70554 2.96727 7.62579 2.91182 7.56899L0.339674 4.93464C0.197561 4.78909 0.279509 4.54379 0.480572 4.51289L4.0143 3.96977C4.09662 3.95712 4.16723 3.9043 4.20262 3.8289L5.77369 0.482094Z" fill="#D3CD39" />
                </svg>
              </div>
              <p className='font-outfit font-normal leading-normal text-[16px]'>(100 reviews)</p>
            </div>

            <div className='flex gap-[12px] items-center'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" fill="#FFDBB8" />
                <path d="M19 22L13 16L19 10" stroke="#403D39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="4" fill="#FFDBB8" />
                <path d="M13 22L19 16L13 10" stroke="#403D39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>

          <div className='border border-primaryLighten2 w-full'></div>

          <div className='w-full flex flex-col items-start'>
            <div className='w-full flex gap-[19px]'>
              <Image className='w-[50px]' width={50} height={50} src={ReviewProfilePic} alt="" />
              <div className='w-full flex items-center justify-between'>
                <div>
                  <p className='font-outfit font-normal text-[14px] leading-[17.64px]'>Apr 21, 2023</p>
                  <h5 className='font-rubik font-semibold text-[22px] leading-[26.07px]'>Jenny Doe</h5>
                </div>
                <div className='flex items-center gap-[4px] '>
                  <p className='font-kanit font-medium text-[32px] leading-[47.84px]'>5</p>
                  <svg width="22" height="22" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6037 0.561416C17.9709 -0.180611 19.0291 -0.180611 19.3963 0.561417L24.2928 10.4574C24.4385 10.7519 24.7196 10.956 25.0448 11.0034L35.9922 12.5997C36.8129 12.7194 37.1396 13.7285 36.5448 14.3064L28.628 21.9989C28.3914 22.2288 28.2834 22.5605 28.3393 22.8856L30.2079 33.7542C30.3483 34.5709 29.4915 35.1942 28.7578 34.8092L18.9646 29.6714C18.6737 29.5188 18.3263 29.5188 18.0354 29.6714L8.24224 34.8092C7.50847 35.1942 6.65172 34.5709 6.79212 33.7542L8.66071 22.8856C8.71659 22.5605 8.60859 22.2288 8.37204 21.9989L0.455202 14.3064C-0.139597 13.7285 0.187125 12.7194 1.00779 12.5997L11.9552 11.0034C12.2804 10.956 12.5615 10.7519 12.7072 10.4574L17.6037 0.561416Z" fill="#D3CD39" />
                  </svg>
                </div>
              </div>
            </div>
            <p className='font-outfit font-normal text-[16px] leading-[24.8px] text-TextColorSec mt-[13px]'>Lorem ipsum dolor sit amet consectetur. Nisi urna arcu tempor in dui. At rhoncus senectus vel ullamcorper eget at id est. Imperdiet penatibus purus augue ut vitae interdum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
