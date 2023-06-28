"use client"

import React, { useState } from 'react'
import Menu from './Menu'
import CurrencyModal from './CurrencyModal'
import LanguageModal from './LanguageModal'
import Link from 'next/link';

export default function LandingNav() {

  const [currencyModal, setCurrencyModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Menu showMenu={showMenu} closeMenu={() => setShowMenu(false)} />
      <nav className='mb-[104px] xsm:mb-[32px]'>
        <div className='h-[104px] w-[100%] px-[4.444vw] md:px-[5.749vw] sm:px-[5.749vw] xsm:px-[32px] fixed top-0 bg-[white] z-[1000] flex items-center justify-between border-b border-[rgba(255,219,184,1)]'>
          <div className='flex items-center gap-[2.222vw] xsm:justify-between xsm:flex-1 sm:justify-between sm:flex-1 md:justify-between md:flex-1'>
            <Link href='/'>
              <svg width="88" height="38" viewBox="0 0 88 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.424 30.32C8.37333 30.32 5.984 29.584 4.256 28.112C2.54933 26.6187 1.64267 24.464 1.536 21.648C1.51467 21.072 1.504 20.1333 1.504 18.832C1.504 17.5093 1.51467 16.5493 1.536 15.952C1.64267 13.1787 2.57067 11.0453 4.32 9.552C6.06933 8.03733 8.43733 7.28 11.424 7.28C13.3013 7.28 14.9867 7.6 16.48 8.24C17.9733 8.85867 19.1467 9.75467 20 10.928C20.8747 12.08 21.3227 13.4347 21.344 14.992V15.056C21.344 15.2267 21.2693 15.376 21.12 15.504C20.992 15.6107 20.8427 15.664 20.672 15.664H16.352C16.0747 15.664 15.8613 15.6107 15.712 15.504C15.5627 15.376 15.4347 15.152 15.328 14.832C15.0293 13.744 14.56 12.9867 13.92 12.56C13.28 12.112 12.4373 11.888 11.392 11.888C8.87467 11.888 7.57333 13.296 7.488 16.112C7.46667 16.688 7.456 17.5733 7.456 18.768C7.456 19.9627 7.46667 20.8693 7.488 21.488C7.57333 24.304 8.87467 25.712 11.392 25.712C12.4373 25.712 13.2907 25.488 13.952 25.04C14.6133 24.5707 15.072 23.8133 15.328 22.768C15.4133 22.448 15.5307 22.2347 15.68 22.128C15.8293 22 16.0533 21.936 16.352 21.936H20.672C20.864 21.936 21.024 22 21.152 22.128C21.3013 22.256 21.3653 22.416 21.344 22.608C21.3227 24.1653 20.8747 25.5307 20 26.704C19.1467 27.856 17.9733 28.752 16.48 29.392C14.9867 30.0107 13.3013 30.32 11.424 30.32ZM33.2208 30.32C30.2128 30.32 27.8448 29.584 26.1168 28.112C24.3888 26.64 23.4714 24.4747 23.3648 21.616C23.3434 20.9973 23.3328 20.08 23.3328 18.864C23.3328 17.6267 23.3434 16.6987 23.3648 16.08C23.4714 13.264 24.3994 11.0987 26.1488 9.584C27.9194 8.048 30.2768 7.28 33.2208 7.28C36.1648 7.28 38.5221 8.048 40.2928 9.584C42.0634 11.0987 42.9914 13.264 43.0768 16.08C43.1194 17.3173 43.1408 18.2453 43.1408 18.864C43.1408 19.4613 43.1194 20.3787 43.0768 21.616C42.9701 24.4747 42.0528 26.64 40.3248 28.112C38.5968 29.584 36.2288 30.32 33.2208 30.32ZM33.2208 25.712C34.3941 25.712 35.3221 25.36 36.0048 24.656C36.7088 23.952 37.0821 22.8747 37.1248 21.424C37.1674 20.1867 37.1888 19.312 37.1888 18.8C37.1888 18.2453 37.1674 17.3707 37.1248 16.176C37.0821 14.7253 36.7088 13.648 36.0048 12.944C35.3008 12.24 34.3728 11.888 33.2208 11.888C32.0688 11.888 31.1408 12.24 30.4368 12.944C29.7541 13.648 29.3808 14.7253 29.3168 16.176C29.2954 16.7733 29.2848 17.648 29.2848 18.8C29.2848 19.9307 29.2954 20.8053 29.3168 21.424C29.3808 22.8747 29.7541 23.952 30.4368 24.656C31.1194 25.36 32.0474 25.712 33.2208 25.712ZM55.362 30.32C52.354 30.32 49.986 29.584 48.258 28.112C46.53 26.64 45.6127 24.4747 45.506 21.616C45.4847 20.9973 45.474 20.08 45.474 18.864C45.474 17.6267 45.4847 16.6987 45.506 16.08C45.6127 13.264 46.5407 11.0987 48.29 9.584C50.0607 8.048 52.418 7.28 55.362 7.28C58.306 7.28 60.6633 8.048 62.434 9.584C64.2047 11.0987 65.1327 13.264 65.218 16.08C65.2607 17.3173 65.282 18.2453 65.282 18.864C65.282 19.4613 65.2607 20.3787 65.218 21.616C65.1113 24.4747 64.194 26.64 62.466 28.112C60.738 29.584 58.37 30.32 55.362 30.32ZM55.362 25.712C56.5353 25.712 57.4633 25.36 58.146 24.656C58.85 23.952 59.2233 22.8747 59.266 21.424C59.3087 20.1867 59.33 19.312 59.33 18.8C59.33 18.2453 59.3087 17.3707 59.266 16.176C59.2233 14.7253 58.85 13.648 58.146 12.944C57.442 12.24 56.514 11.888 55.362 11.888C54.21 11.888 53.282 12.24 52.578 12.944C51.8953 13.648 51.522 14.7253 51.458 16.176C51.4367 16.7733 51.426 17.648 51.426 18.8C51.426 19.9307 51.4367 20.8053 51.458 21.424C51.522 22.8747 51.8953 23.952 52.578 24.656C53.2607 25.36 54.1887 25.712 55.362 25.712ZM69.1513 30C68.9379 30 68.7459 29.9253 68.5753 29.776C68.4259 29.6053 68.3513 29.4133 68.3513 29.2V8.4C68.3513 8.16533 68.4259 7.97333 68.5753 7.824C68.7459 7.67467 68.9379 7.6 69.1513 7.6H73.1833C73.4179 7.6 73.6099 7.67467 73.7593 7.824C73.9086 7.97333 73.9833 8.16533 73.9833 8.4V15.504L79.9033 8.208C80.1593 7.80267 80.5753 7.6 81.1513 7.6H85.7593C85.9513 7.6 86.1113 7.67467 86.2393 7.824C86.3673 7.952 86.4313 8.10133 86.4313 8.272C86.4313 8.42133 86.3993 8.54933 86.3353 8.656L78.6553 18.32L86.9113 28.944C86.9966 29.0293 87.0393 29.1573 87.0393 29.328C87.0393 29.4987 86.9753 29.6587 86.8473 29.808C86.7193 29.936 86.5593 30 86.3673 30H81.5993C81.0873 30 80.6606 29.7867 80.3193 29.36L73.9833 21.456V29.2C73.9833 29.4347 73.9086 29.6267 73.7593 29.776C73.6099 29.9253 73.4179 30 73.1833 30H69.1513Z" fill="#D27722" />
              </svg>
            </Link>
            <div className='sm:block xsm:block md:block hidden cursor-pointer'>
              <svg className='cursor-pointer' onClick={() => setShowMenu(true)} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="42" height="42" rx="10" fill="#D17721" />
                <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="14" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="20.125" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
                <rect x="10.5" y="26.25" width="21" height="2.625" rx="1.3125" fill="#FFDBB8" />
              </svg>
            </div>

            <div className='md:hidden sm:hidden h-[15px] border border-primary2 rouded-[16px] xsm:hidden'></div>
            <div className='md:hidden sm:hidden flex gap-[1.667vw] xsm:hidden'>
              <Link href='/search-tutors'>
                <div className='flex gap-[0.486vw]'>
                  <svg className='max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1287_44674)">
                      <path d="M16.793 15.0386H18.7944Z" fill="#D27722" />
                      <path d="M16.793 15.0386H18.7944" stroke="#D27722" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                      <mask id="mask0_1287_44674" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="-4" y="-5" width="33" height="33">
                        <path d="M28.002 27.9971H-3.99805V-4.00293H28.002V27.9971Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1287_44674)">
                        <path d="M12.479 18.9072H4.73563C2.37794 18.9072 0.470215 16.9948 0.470215 14.6418V14.0278H16.7444V14.6418C16.7444 16.9948 14.8367 18.9072 12.479 18.9072Z" fill="#D27722" stroke="#D27722" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22.5658 16.0038H18.9004V14.0726H22.5658C23.1002 14.0726 23.5314 14.5039 23.5314 15.0382C23.5314 15.5726 23.1002 16.0038 22.5658 16.0038Z" fill="#D27722" stroke="#D27722" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.7563 9.33321C9.67356 10.416 9.8048 12.3096 9.8048 12.3096C9.8048 12.3096 11.6985 12.4456 12.7812 11.3581C13.864 10.2754 13.7327 8.38169 13.7327 8.38169C13.7327 8.38169 11.8391 8.25045 10.7563 9.33321Z" fill="#D27722" stroke="#D27722" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.13587 11.8494C3.82958 12.5431 5.24514 12.2525 5.24514 12.2525C5.24514 12.2525 5.53575 10.8369 4.84203 10.1432C4.14363 9.44948 2.73276 9.74009 2.73276 9.74009C2.73276 9.74009 2.44215 11.1556 3.13587 11.8494Z" fill="#D27722" stroke="#D27722" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.80322 7.36521C5.80322 8.15736 6.44538 8.8042 7.24221 8.8042C8.03436 8.8042 8.68121 8.16204 8.68121 7.36521C8.68121 6.56837 8.03436 5.92621 7.24221 5.92621C6.44538 5.92621 5.80322 6.57306 5.80322 7.36521Z" fill="#D27722" stroke="#D27722" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.7271 5.92775C10.7271 6.39179 11.102 6.76208 11.5614 6.76208C12.0207 6.76208 12.4004 6.39179 12.4004 5.92775C12.4004 5.46371 12.0254 5.09342 11.5661 5.09342C11.1067 5.09342 10.7271 5.46371 10.7271 5.92775Z" fill="#D27722" stroke="#D27722" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.46777 11.0737V11.7815Z" fill="#D27722" />
                        <path d="M7.46777 11.0737V11.7815" stroke="#D27722" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1287_44674">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Cooking Classes</p>
                </div>
              </Link>

              <Link href='signup'>
                <div className='flex gap-[0.486vw]'>
                  <svg className='max-w-[20px] max-h-[20px] min-w-[20px] min-h-[20px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.50009 22.5C5.50009 22.6326 5.55277 22.7598 5.64654 22.8536C5.74031 22.9473 5.86748 23 6.00009 23H18.0001C18.1327 23 18.2599 22.9473 18.3536 22.8536C18.4474 22.7598 18.5001 22.6326 18.5001 22.5V19H5.50009V22.5ZM4.33509 12.345L5.40009 18H8.95009L8.50009 13.045C8.49418 12.9793 8.50126 12.9132 8.52093 12.8502C8.5406 12.7873 8.57247 12.7289 8.61472 12.6783C8.65697 12.6277 8.70877 12.5859 8.76718 12.5553C8.82558 12.5247 8.88943 12.5059 8.95509 12.5C9.02075 12.4941 9.08693 12.5012 9.14986 12.5208C9.21278 12.5405 9.27122 12.5724 9.32183 12.6146C9.37243 12.6569 9.41422 12.7087 9.44481 12.7671C9.4754 12.8255 9.49418 12.8893 9.50009 12.955L9.95509 18H14.0451L14.5001 12.955C14.506 12.8893 14.5248 12.8255 14.5554 12.7671C14.586 12.7087 14.6278 12.6569 14.6784 12.6146C14.729 12.5724 14.7874 12.5405 14.8503 12.5208C14.9132 12.5012 14.9794 12.4941 15.0451 12.5C15.1108 12.5059 15.1746 12.5247 15.233 12.5553C15.2914 12.5859 15.3432 12.6277 15.3855 12.6783C15.4277 12.7289 15.4596 12.7873 15.4793 12.8502C15.4989 12.9132 15.506 12.9793 15.5001 13.045L15.0501 18H18.6001L19.6651 12.345C20.2829 12.1795 20.8584 11.8842 21.3531 11.4787C21.8478 11.0733 22.2504 10.5671 22.534 9.99377C22.8177 9.42048 22.9758 8.79331 22.998 8.15407C23.0201 7.51483 22.9057 6.87822 22.6625 6.28667C22.4192 5.69512 22.0526 5.16224 21.5871 4.72354C21.1216 4.28484 20.568 3.9504 19.9631 3.74254C19.3582 3.53467 18.7159 3.45814 18.0791 3.51806C17.4423 3.57797 16.8256 3.77296 16.2701 4.09001C15.9719 3.19333 15.3989 2.4133 14.6325 1.86052C13.8661 1.30774 12.9451 1.01025 12.0001 1.01025C11.0551 1.01025 10.1341 1.30774 9.36771 1.86052C8.60129 2.4133 8.02833 3.19333 7.73009 4.09001C7.17458 3.77296 6.55786 3.57797 5.92105 3.51806C5.28424 3.45814 4.64198 3.53467 4.03708 3.74254C3.43217 3.9504 2.87854 4.28484 2.41307 4.72354C1.94761 5.16224 1.58101 5.69512 1.33773 6.28667C1.09445 6.87822 0.980065 7.51483 1.00221 8.15407C1.02435 8.79331 1.18252 9.42048 1.46615 9.99377C1.74979 10.5671 2.15238 11.0733 2.64709 11.4787C3.1418 11.8842 3.71725 12.1795 4.33509 12.345Z" fill="#D27722" />
                  </svg>
                  <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Become a Chef</p>
                </div>
              </Link>

              <Link href='/search-groups'>
                <div className='flex gap-[0.486vw]'>
                  <svg className='max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1287_44705)">
                      <path d="M23.0578 17.4609C22.8234 19.2281 21.7969 20.7843 20.1609 21.8343C18.8156 22.6781 17.2594 23.1234 15.6703 23.1093C15.2672 23.1093 14.8641 23.0812 14.4656 23.0296C12.4781 22.7953 10.6406 21.8625 9.27656 20.4046C8.42344 19.4953 7.85625 18.3562 7.64062 17.1281C3.77344 16.6875 0.890625 13.8984 0.890625 10.5421C0.890625 7.92652 2.70937 5.55465 5.46562 4.49058C5.44219 4.46246 5.42344 4.42965 5.41406 4.39683C5.35312 4.22808 5.44219 4.04058 5.61562 3.98433C6.375 3.73121 7.1625 3.56715 7.96406 3.49683C7.99687 3.38902 8.02969 3.28121 8.0625 3.17808C8.0625 3.1734 8.06719 3.16871 8.06719 3.16402C8.18906 2.77027 8.34844 2.39058 8.54062 2.02965C8.7375 1.66871 8.96719 1.32652 9.22969 1.00777C9.34687 0.871833 9.55781 0.857771 9.69375 0.974958L10.5422 1.7109C10.6781 1.82808 10.6922 2.03902 10.575 2.17496C10.2328 2.59215 9.97031 3.07027 9.80156 3.5859C10.65 3.70308 11.6672 3.92808 12.3516 4.34527C12.4922 4.42496 12.5484 4.5984 12.4828 4.7484C14.1516 5.54527 15.4219 6.83902 16.0453 8.37652C16.3359 7.88433 16.6969 7.44371 17.1187 7.05933C17.2547 6.93746 17.4609 6.95152 17.5828 7.08746L18.3281 7.93121C18.45 8.06715 18.4359 8.2734 18.3 8.39527C17.9062 8.76558 17.5828 9.20152 17.3531 9.69371C18.1781 9.91871 19.1578 10.275 19.7859 10.7812C19.8891 10.8656 19.9312 10.9968 19.8937 11.1234C19.8844 11.1468 19.875 11.1703 19.8609 11.1937C22.1344 12.6609 23.3766 15.0515 23.0578 17.4609Z" fill="#D27722" />
                      <path d="M19.8609 11.1891C19.875 11.1656 19.8844 11.1422 19.8937 11.1188C19.9312 10.9922 19.8844 10.8563 19.7859 10.7766C19.1578 10.2703 18.1781 9.91876 17.3531 9.68907C17.5828 9.20157 17.9062 8.76094 18.3 8.39063C18.4359 8.26876 18.45 8.06251 18.3281 7.92657L17.5828 7.08282C17.4609 6.94688 17.2547 6.93282 17.1187 7.05469C16.6969 7.43907 16.3359 7.87969 16.0453 8.37188C15.4219 6.83438 14.1516 5.54063 12.4828 4.74376C12.5484 4.59376 12.4922 4.42501 12.3516 4.34063C11.6625 3.92344 10.6453 3.69844 9.80156 3.58126C9.97031 3.06563 10.2281 2.58751 10.575 2.17032C10.6922 2.03438 10.6781 1.82813 10.5422 1.70626L9.69375 0.97032C9.55781 0.853132 9.35156 0.867195 9.22969 1.00313C8.96719 1.32188 8.73281 1.66407 8.54062 2.02501C8.34375 2.38594 8.18906 2.76563 8.06719 3.15938C8.06719 3.16407 8.0625 3.16876 8.0625 3.17344C8.02969 3.27657 7.99687 3.38438 7.96406 3.49219C7.1625 3.55782 6.375 3.72188 5.61562 3.97969C5.44687 4.04063 5.35781 4.22344 5.41406 4.39219C5.42344 4.42501 5.44219 4.45782 5.46562 4.48594C2.70937 5.55469 0.890625 7.93126 0.890625 10.5422C0.890625 13.8984 3.77344 16.6875 7.64062 17.1281C7.85625 18.3563 8.42812 19.4953 9.27656 20.4047C10.6406 21.8672 12.4828 22.7953 14.4656 23.0297C14.8641 23.0813 15.2672 23.1094 15.6703 23.1094C17.2594 23.1234 18.8156 22.6781 20.1609 21.8344C21.7969 20.7844 22.8234 19.2281 23.0578 17.4609C23.3766 15.0516 22.1344 12.6609 19.8609 11.1891ZM15.7828 10.5844C15.8672 10.3125 15.9656 10.05 16.0687 9.79688C16.1062 9.70782 16.1437 9.61876 16.1812 9.53438C16.1906 9.51563 16.2 9.49688 16.2094 9.47344C16.4812 8.84532 16.8562 8.26876 17.3203 7.76719L17.6297 8.11876C17.1891 8.60157 16.8375 9.15938 16.5844 9.76407C16.5094 9.92813 16.5891 10.125 16.7531 10.1953C16.7719 10.2047 16.7906 10.2094 16.8047 10.2141C17.3766 10.35 17.9344 10.5328 18.4734 10.7625C18.1359 10.7672 17.8031 10.7391 17.4703 10.6781C17.2922 10.6406 17.1187 10.7484 17.0766 10.9266C17.0484 11.0438 17.0906 11.1703 17.1844 11.25C17.4562 11.475 17.7094 11.7188 17.9484 11.9813C17.5312 11.9203 17.1328 11.7703 16.7766 11.5453C16.6359 11.4328 16.4297 11.4563 16.3172 11.6016C16.3031 11.6203 16.2891 11.6391 16.2797 11.6625C16.1016 12.0281 15.8812 12.3703 15.6281 12.6844C15.5484 12.3328 15.4781 11.9813 15.4219 11.6203C15.3937 11.4422 15.225 11.3203 15.0469 11.3484C15.0328 11.3484 15.0187 11.3531 15.0047 11.3578C14.6625 11.4516 14.3109 11.5125 13.9547 11.5359C14.1937 11.3719 14.4141 11.175 14.6016 10.9547C14.7187 10.8141 14.7 10.6078 14.5594 10.4953C14.5359 10.4766 14.5078 10.4578 14.4797 10.4438C14.2641 10.3453 14.0672 10.2234 13.8797 10.0781C14.3437 10.0219 14.8125 9.99376 15.2812 10.0031C15.2344 10.1297 15.1922 10.2563 15.1547 10.3828C15.0984 10.5563 15.1969 10.7391 15.3703 10.7953C15.5437 10.8516 15.7266 10.7578 15.7828 10.5844ZM7.79531 4.16719C7.76719 4.29844 7.73906 4.42969 7.71562 4.56094C7.68281 4.73907 7.80469 4.90782 7.98281 4.94063C8.00156 4.94532 8.02031 4.94532 8.03906 4.94532C8.19844 4.94532 8.33437 4.82813 8.3625 4.67344C8.41406 4.39219 8.475 4.12032 8.54062 3.85782C8.56406 3.76407 8.59219 3.67501 8.61562 3.58594L8.63437 3.52032C8.82187 2.86407 9.12187 2.24532 9.51562 1.68751L9.87187 1.99688C9.49687 2.53594 9.22031 3.13126 9.05156 3.76876C9 3.94219 9.10312 4.12501 9.27656 4.17657C9.29531 4.18126 9.31406 4.18594 9.33281 4.18594C9.91406 4.24688 10.4953 4.35469 11.0578 4.50938C10.725 4.56094 10.3875 4.57501 10.0547 4.55626C9.87187 4.54219 9.71719 4.67344 9.69844 4.85626C9.68906 4.97813 9.74531 5.09532 9.84844 5.16094C10.1437 5.35313 10.4297 5.55938 10.7016 5.78438C10.2797 5.77969 9.8625 5.68594 9.48281 5.50313C9.32812 5.40938 9.12656 5.46094 9.03281 5.62032C9.01875 5.63907 9.00937 5.66251 9.00469 5.68594C8.87344 6.07032 8.7 6.43594 8.48906 6.78282C8.3625 6.44532 8.25 6.10313 8.14687 5.75626C8.10469 5.61563 7.97812 5.52188 7.83281 5.52188C7.78594 5.52188 7.74375 5.53126 7.70156 5.55001C7.37344 5.68594 7.03594 5.78907 6.68437 5.85938C6.9 5.66719 7.0875 5.44219 7.24687 5.19844C7.34062 5.04376 7.29844 4.84219 7.14375 4.74376C7.11562 4.72501 7.0875 4.71563 7.05937 4.70626C6.83437 4.63594 6.62344 4.54219 6.41719 4.42032C6.86719 4.30782 7.32656 4.21876 7.79531 4.16719ZM7.60781 15.4266C7.56094 15.7688 7.54687 16.1156 7.56562 16.4578C4.11094 16.0078 1.54687 13.5188 1.54687 10.5422C1.54687 8.09063 3.35625 5.86876 6.06094 4.97344C6.18281 5.04844 6.30937 5.11407 6.44062 5.17501C6.20156 5.42813 5.92969 5.64844 5.63437 5.83126L5.53125 5.90157C5.38125 6.00469 5.34375 6.21094 5.44687 6.35626C5.48437 6.41251 5.54062 6.45469 5.60625 6.47813C6.23437 6.69844 7.125 6.45001 7.61719 6.27657C7.85156 7.01251 8.07656 7.52813 8.08594 7.55626C8.12812 7.65469 8.21719 7.72501 8.32031 7.74844C8.34375 7.75313 8.3625 7.75313 8.38594 7.75313C8.47031 7.75313 8.55 7.72032 8.61094 7.66407C9.02344 7.27032 9.33281 6.62344 9.49219 6.22501C10.2891 6.50626 11.3719 6.44063 11.4234 6.43594C11.6016 6.42657 11.7422 6.26719 11.7281 6.08907C11.7281 6.07032 11.7234 6.05157 11.7187 6.03751C11.6578 5.77501 11.3484 5.46094 10.9922 5.17501C11.1937 5.15157 11.3953 5.11876 11.5969 5.08126C13.6172 5.84532 15.1078 7.35938 15.6141 9.16407C15.5859 9.22969 15.5531 9.29063 15.525 9.35626C14.7234 9.31876 13.9219 9.37969 13.1344 9.52969C12.9562 9.56719 12.8437 9.74063 12.8812 9.91407C12.8906 9.95157 12.9047 9.98438 12.9234 10.0172C10.0594 10.7203 7.95 12.8344 7.60781 15.4266ZM22.4109 17.3766C22.2047 18.9516 21.2812 20.3391 19.8094 21.2859C18.2437 22.2609 16.3781 22.65 14.5547 22.3828C12.7219 22.1672 11.025 21.3141 9.76406 19.9641C8.5875 18.6703 8.05312 17.0906 8.25937 15.5156C8.57812 13.0875 10.6641 11.1188 13.4625 10.5844C13.575 10.6734 13.6875 10.7578 13.8094 10.8328C13.5375 11.0531 13.2422 11.2359 12.9281 11.3813C12.8859 11.4 12.8484 11.4188 12.8156 11.4375C12.6562 11.5219 12.5906 11.7188 12.675 11.8781C12.7078 11.9391 12.7594 11.9906 12.8203 12.0188C13.4109 12.3188 14.3297 12.1875 14.8359 12.0797C14.9719 12.8391 15.1266 13.3828 15.1359 13.4063C15.1875 13.5797 15.3656 13.6828 15.5437 13.6313C15.5812 13.6219 15.6141 13.6031 15.6469 13.5797C16.1062 13.2469 16.4953 12.6422 16.7062 12.2672C17.4609 12.6516 18.5437 12.7266 18.5953 12.7266C18.6891 12.7359 18.7828 12.6984 18.8531 12.6281C18.9187 12.5578 18.9516 12.4641 18.9469 12.3703C18.9234 12.1031 18.6516 11.7516 18.3375 11.4188C18.5437 11.4234 18.75 11.4188 18.9562 11.4047C21.3609 12.7078 22.7156 15.0375 22.4109 17.3766Z" fill="white" />
                      <path d="M9.54356 17.4422C9.48731 17.2688 9.3045 17.175 9.13106 17.2313C8.95763 17.2875 8.86388 17.4703 8.92013 17.6438C9.05606 18.061 9.24825 18.4641 9.48731 18.8344C9.54825 18.9282 9.65138 18.9891 9.76388 18.9844C9.82481 18.9844 9.88575 18.9657 9.93731 18.9328C10.092 18.8344 10.1342 18.6328 10.0404 18.4782C9.83419 18.1594 9.66544 17.8078 9.54356 17.4422Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1287_44705">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Group Cooking</p>
                </div>
              </Link>
            </div>
          </div>

          <div className='flex items-center gap-[1.528vw] xsm:hidden sm:hidden md:hidden'>
            <div onClick={(e) => { setLanguageModal(!languageModal); setCurrencyModal(false); e.stopPropagation(); }} className='flex items-center gap-[0.278vw] cursor-pointer group relative'>
              <LanguageModal state={languageModal} closeModal={(e) => { setLanguageModal(false) }} />
              <p className='font-outfit font-normal text-[19px] leading-[19px] select-none'>Eng</p>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722" />
              </svg>
            </div>
            <div onClick={(e) => { setCurrencyModal(!currencyModal); setLanguageModal(false); e.stopPropagation(); }} className='flex items-center gap-[0.278vw] cursor-pointer relative'>
              <CurrencyModal state={currencyModal} closeModal={(e) => { setCurrencyModal(false) }} />
              <p className='font-outfit font-normal text-[18px] leading-[18px] select-none'>USD</p>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722" />
              </svg>
            </div>
            <div className='h-[15px] border border-primary2 rouded-[16px]'></div>
            <Link href='/support'>
              <div className='custom-tooltip' data-tooltip="Support">
                <svg className='fill-[white] stroke-primary2 hover:fill-primary2 hover:stroke-[white] transition-all duration-200' width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16.5V12.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8.5H12.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
            <div className='h-[15px] border border-primary2 rouded-[16px]'></div>
            <div>
              <Link href='/signin'>
                <button className='w-[131px] group border-2 border-primary2 hover:bg-[white] hover:border-2 hover:border-primary2 hover:text-primary2 transition-all duration-200 h-[41px] bg-primary2 text-backPri font-outfit font-[500] text-[20px] leading-[25px] flex justify-center items-center gap-[0.556vw] rounded-[4px]'>
                  Log In
                  <svg className='stroke-[white] group-hover:stroke-primary2 transition-all duration-200' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.75 2.75H14.75C15.1478 2.75 15.5294 2.90804 15.8107 3.18934C16.092 3.47064 16.25 3.85218 16.25 4.25V14.75C16.25 15.1478 16.092 15.5294 15.8107 15.8107C15.5294 16.092 15.1478 16.25 14.75 16.25H11.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 13.25L11.75 9.5L8 5.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.75 9.5H2.75" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>

  )
}
