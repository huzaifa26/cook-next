"use client"

import Image from "next/image"
import ChineseIcon from "../../assets/LandingPage/ChineseIcon.png"
import EnglishIcon from "../../assets/LandingPage/EnglishIcon.png"
import GermanIcon from "../../assets/LandingPage/GermanIcon.png"
import HebrewIcon from "../../assets/LandingPage/HebrewIcon.png"
import ItalianIcon from "../../assets/LandingPage/ItalianIcon.png"
import { useRef } from 'react'
import { useEffect } from 'react'

export default function LanguageModal({ state, closeModal, mobileNav=false }) {

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideLanguage = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('click', handleClickOutsideLanguage);

    return () => {
      document.removeEventListener('click', handleClickOutsideLanguage);
    };
  }, [closeModal]);


  return (
    <div ref={modalRef} style={state ? { maxHeight: "272px", border: "1px" } : { maxHeight: "0px", border: "0px" }} onClick={(e) => e.stopPropagation()} className={mobileNav ? 'landingExploreAndLearnOrangePerma transition-all duration-300  left-0 overflow-hidden absolute top-[30px] rounded-[6px] w-[255px] border border-[rgba(255,219,184,1)] bg-[white] z-[1000]': 'landingExploreAndLearnOrangePerma transition-all duration-300 right-0 overflow-hidden absolute top-[30px] rounded-[6px] w-[255px] border border-[rgba(255,219,184,1)] bg-[white] z-[1000]'}>
      <div className='m-[16px]'>
        <h5 className='font-outfit font-bold text-[18px] leading-[22.68px] text-TextColor'>Select a language</h5>
        <div className='mt-[17px] flex flex-col gap-[5px]'>
          <div className='flex gap-[10px] items-center h-[36px] bg-[rgba(255,219,184,1)] px-[12px] '>
            <Image className="min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]" src={EnglishIcon} alt="" />
            {/* <p>{String.fromCodePoint(0x1F1EC, 0x1F1E7)} </p> */}
            <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>English</p>
          </div>
          <div className='flex gap-[10px] items-center h-[36px] px-[12px]'>
            <Image className="min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]" src={GermanIcon} alt="" />
            <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>German</p>
          </div>
          <div className='flex gap-[10px] items-center h-[36px] px-[12px] border-t border-t-[rgba(255,219,184,1)]'>
            <Image className="min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]" src={ChineseIcon} alt="" />
            <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>Chinese</p>
          </div>
          <div className='flex gap-[10px] items-center h-[36px] px-[12px] border-t border-t-[rgba(255,219,184,1)]'>
            <Image className="min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]" src={ItalianIcon} alt="" />
            <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>Italian</p>
          </div>
          <div className='flex gap-[10px] items-center h-[36px] px-[12px] border-t border-t-[rgba(255,219,184,1)]'>
            <Image className="min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px]" src={HebrewIcon} alt="" />
            <p className='font-outfit font-medium text-[16px] leading-[20.16px] text-TextColorSec'>Hebrew</p>
          </div>
        </div>
      </div>
    </div>
  )
}
