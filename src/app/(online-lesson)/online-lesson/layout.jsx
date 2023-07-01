'use client'

import Video from "@/components/OnlineLesson/Video";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from 'react';

export default function RootLayout({ children }) {
  const pathname=usePathname();

  const [currentTab, setCurrentTab] = useState("chat");
  const [width, setWidth] = useState('932px');
  const [widthNumber, setWidthNumber] = useState('1024');
  const resizableDivRef = useRef(null);
  const handleDivRef = useRef(null);
  const [newWidth, setNewWidth] = useState()

  const handleDrag = (event) => {
    setNewWidth(event.clientX || (event?.touches && event?.touches[0].clientX))
    let newWidth = event.clientX || (event?.touches && event?.touches[0].clientX) + "px";
    let newWidthNumber = event.clientX || (event?.touches && event?.touches[0].clientX);
    if (newWidth !== '0px' && newWidthNumber < windowSize.width) {
      setWidth(newWidth);
      setWidthNumber(newWidthNumber)
    } else if (newWidthNumber > windowSize.width && newWidth !== '0px') {
      setWidth(windowSize.width);
      setWidthNumber(windowSize.width)
    }
  };
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      if (newWidth > window.innerWidth) {
        setWidth(window.innerWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[newWidth]);

  const [img, setImg] = useState(document.createElement("img"))

  useEffect(() => {
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  }, [img])

  const handleDragStart = (event) => {
    event.dataTransfer.setDragImage(img, 0, 0);
  };
  const handleDragEnd = (event) => {
    event.target.style.opacity = '1';
  };

  return (
    <div className='min-h-screen max-h-screen w flex md:flex-col sm:flex-col xsm:flex-col'>
      <Video divRef={resizableDivRef} widthNumber={widthNumber} windowSize={windowSize} width={width} />
      <div ref={handleDivRef} draggable onDragStart={handleDragStart} onDrag={handleDrag} onDragEnd={handleDragEnd} className='line md:hidden sm:hidden xsm:hidden transition-all duration-200 min-h-full bg-[#FFDBB8] w-[3px] cursor-e-resize'>
      </div>
      <div className='flex-1 flex flex-col min-h-screen xsm:hidden'>
        <div className='pl-[1.389vw] h-[114px] w-full flex items-center justify-between pr-[3.055vw] border-b border-b-[rgba(255,219,184,1)]'>
          <Link href='/online-lesson/members' className={pathname === "/online-lesson/members" ? "bg-primary2 text-[white] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px]" : "ml-[0px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px] text-[black]"}>
            <button onClick={() => setCurrentTab('member')} style={currentTab === 'member' ? { background: '#D27722', color: '#fff' } : {}} className='h-[46px] px-[16px] flex gap-[6px] items-center justify-center rounded-[8px]'>
              <svg className={pathname === "/online-lesson/members" ? "stroke-[white]" : "stroke-[black]"} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21.5V19.5C17 18.4391 16.5786 17.4217 15.8284 16.6716C15.0783 15.9214 14.0609 15.5 13 15.5H5C3.93913 15.5 2.92172 15.9214 2.17157 16.6716C1.42143 17.4217 1 18.4391 1 19.5V21.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 11.5C11.2091 11.5 13 9.70914 13 7.5C13 5.29086 11.2091 3.5 9 3.5C6.79086 3.5 5 5.29086 5 7.5C5 9.70914 6.79086 11.5 9 11.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 21.4999V19.4999C22.9993 18.6136 22.7044 17.7527 22.1614 17.0522C21.6184 16.3517 20.8581 15.8515 20 15.6299" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 3.62988C16.8604 3.85018 17.623 4.35058 18.1676 5.05219C18.7122 5.7538 19.0078 6.61671 19.0078 7.50488C19.0078 8.39305 18.7122 9.25596 18.1676 9.95757C17.623 10.6592 16.8604 11.1596 16 11.3799" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className='font-outfit font-medium text-[20px] leading-[30px]'>Member</p>
            </button>
          </Link>
          <div className='flex items-center gap-[16px]'>
            <Link href='/online-lesson/notes' className={pathname === "/online-lesson/notes" ? "bg-primary2 text-[white] w-[108px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px]" : "w-[108px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px] text-[black]"}>
              <button onClick={() => setCurrentTab('notes')} className='w-[108px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px]'>
                <svg className={pathname === "/online-lesson/notes" ? "stroke-[white]" : "stroke-[black]"} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4.5H4C3.46957 4.5 2.96086 4.71071 2.58579 5.08579C2.21071 5.46086 2 5.96957 2 6.5V20.5C2 21.0304 2.21071 21.5391 2.58579 21.9142C2.96086 22.2893 3.46957 22.5 4 22.5H18C18.5304 22.5 19.0391 22.2893 19.4142 21.9142C19.7893 21.5391 20 21.0304 20 20.5V13.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.5 2.99998C18.8978 2.60216 19.4374 2.37866 20 2.37866C20.5626 2.37866 21.1022 2.60216 21.5 2.99998C21.8978 3.39781 22.1213 3.93737 22.1213 4.49998C22.1213 5.06259 21.8978 5.60216 21.5 5.99998L12 15.5L8 16.5L9 12.5L18.5 2.99998Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className='font-outfit font-medium text-[20px] leading-[30px]'>Notes</p>
              </button>
            </Link>
            <Link href='/online-lesson' className={pathname === "/online-lesson" ? "bg-primary2 text-[white] w-[108px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px]" : "w-[108px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px] text-[black]"}>
              <button onClick={() => setCurrentTab('chat')} className='w-[108px] h-[46px] flex gap-[6px] items-center justify-center rounded-[8px]'>
                <svg className={pathname === "/online-lesson" ? "stroke-[white]" : "stroke-[black]"} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21.0034 13.3199 20.6951 14.6219 20.1 15.8C19.3944 17.2118 18.3098 18.3992 16.9674 19.2293C15.6251 20.0594 14.0782 20.4994 12.5 20.5C11.1801 20.5035 9.87812 20.1951 8.7 19.6L3 21.5L4.9 15.8C4.30493 14.6219 3.99656 13.3199 4 12C4.00061 10.4218 4.44061 8.87488 5.27072 7.53258C6.10083 6.19028 7.28825 5.1056 8.7 4.40003C9.87812 3.80496 11.1801 3.49659 12.5 3.50003H13C15.0843 3.61502 17.053 4.49479 18.5291 5.97089C20.0052 7.44699 20.885 9.41568 21 11.5V12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className='font-outfit font-medium text-[20px] leading-[30px]'>Chat</p>
              </button>
            </Link>
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          {children}
        </div>
      </div>
    </div>
  )
}
