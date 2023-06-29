'use client'
import React, { useState } from 'react'
import LanguageModal from '@/components/layout/LanguageModal'
import Menu from '@/components/layout/Menu'
import Link from 'next/link';
import LandingFooter from '@/components/layout/LandingFooter';

export default function Layout({children}) {

  const [showMenu, setShowMenu] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);

  return (
    <div>
      <Menu showMenu={showMenu} closeMenu={() => setShowMenu(false)} />
      <nav className='mb-[104px]'>
        <div className='h-[104px] w-[100%] px-[64px] md:px-[48px] sm:px-[48px] xsm:px-[32px] fixed top-0 bg-[white] z-[1000] flex items-center justify-between border-b border-[rgba(255,219,184,1)]'>
          <div className='flex items-center gap-[37px]'>
            <Link href='/blog'>
              <svg width="121" height="50" viewBox="0 0 121 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.424 30.32C9.39733 30.32 7.65867 29.9893 6.208 29.328C4.77867 28.6667 3.65867 27.696 2.848 26.416C2.05867 25.136 1.62133 23.5467 1.536 21.648C1.51467 20.7733 1.504 19.8347 1.504 18.832C1.504 17.8293 1.51467 16.8693 1.536 15.952C1.62133 14.096 2.06933 12.528 2.88 11.248C3.69067 9.94667 4.82133 8.96533 6.272 8.304C7.72267 7.62133 9.44 7.28 11.424 7.28C12.832 7.28 14.1333 7.46133 15.328 7.824C16.5227 8.16533 17.568 8.67733 18.464 9.36C19.36 10.0213 20.0533 10.832 20.544 11.792C21.056 12.7307 21.3227 13.7973 21.344 14.992C21.3653 15.184 21.3013 15.344 21.152 15.472C21.024 15.6 20.864 15.664 20.672 15.664H16.352C16.0747 15.664 15.8613 15.6107 15.712 15.504C15.5627 15.376 15.4347 15.152 15.328 14.832C15.0293 13.7013 14.5387 12.9333 13.856 12.528C13.1947 12.1013 12.3733 11.888 11.392 11.888C10.2187 11.888 9.29067 12.2187 8.608 12.88C7.92533 13.52 7.552 14.5973 7.488 16.112C7.424 17.8613 7.424 19.6533 7.488 21.488C7.552 23.0027 7.92533 24.0907 8.608 24.752C9.29067 25.392 10.2187 25.712 11.392 25.712C12.3733 25.712 13.2053 25.4987 13.888 25.072C14.5707 24.6453 15.0507 23.8773 15.328 22.768C15.4133 22.448 15.5307 22.2347 15.68 22.128C15.8507 22 16.0747 21.936 16.352 21.936H20.672C20.864 21.936 21.024 22 21.152 22.128C21.3013 22.256 21.3653 22.416 21.344 22.608C21.3227 23.8027 21.056 24.88 20.544 25.84C20.0533 26.7787 19.36 27.5893 18.464 28.272C17.568 28.9333 16.5227 29.4453 15.328 29.808C14.1333 30.1493 12.832 30.32 11.424 30.32ZM33.2208 30.32C31.2581 30.32 29.5514 30 28.1008 29.36C26.6501 28.72 25.5194 27.76 24.7088 26.48C23.8981 25.1787 23.4501 23.5573 23.3648 21.616C23.3434 20.6987 23.3328 19.7813 23.3328 18.864C23.3328 17.9467 23.3434 17.0187 23.3648 16.08C23.4501 14.16 23.8981 12.5493 24.7088 11.248C25.5408 9.92533 26.6821 8.93333 28.1328 8.272C29.5834 7.61067 31.2794 7.28 33.2208 7.28C35.1408 7.28 36.8261 7.61067 38.2768 8.272C39.7488 8.93333 40.9008 9.92533 41.7328 11.248C42.5648 12.5493 43.0128 14.16 43.0768 16.08C43.1194 17.0187 43.1408 17.9467 43.1408 18.864C43.1408 19.7813 43.1194 20.6987 43.0768 21.616C42.9914 23.5573 42.5434 25.1787 41.7328 26.48C40.9221 27.76 39.7914 28.72 38.3408 29.36C36.8901 30 35.1834 30.32 33.2208 30.32ZM33.2208 25.712C34.3514 25.712 35.2688 25.3707 35.9728 24.688C36.6981 24.0053 37.0821 22.9173 37.1248 21.424C37.1674 20.4853 37.1888 19.6 37.1888 18.768C37.1888 17.936 37.1674 17.072 37.1248 16.176C37.0821 15.1733 36.8901 14.3627 36.5488 13.744C36.2288 13.104 35.7808 12.6347 35.2048 12.336C34.6288 12.0373 33.9674 11.888 33.2208 11.888C32.4954 11.888 31.8448 12.0373 31.2688 12.336C30.6928 12.6347 30.2341 13.104 29.8928 13.744C29.5514 14.3627 29.3594 15.1733 29.3168 16.176C29.2954 17.072 29.2848 17.936 29.2848 18.768C29.2848 19.6 29.2954 20.4853 29.3168 21.424C29.3808 22.9173 29.7648 24.0053 30.4688 24.688C31.1728 25.3707 32.0901 25.712 33.2208 25.712ZM55.362 30.32C53.3993 30.32 51.6927 30 50.242 29.36C48.7913 28.72 47.6607 27.76 46.85 26.48C46.0393 25.1787 45.5913 23.5573 45.506 21.616C45.4847 20.6987 45.474 19.7813 45.474 18.864C45.474 17.9467 45.4847 17.0187 45.506 16.08C45.5913 14.16 46.0393 12.5493 46.85 11.248C47.682 9.92533 48.8233 8.93333 50.274 8.272C51.7247 7.61067 53.4207 7.28 55.362 7.28C57.282 7.28 58.9673 7.61067 60.418 8.272C61.89 8.93333 63.042 9.92533 63.874 11.248C64.706 12.5493 65.154 14.16 65.218 16.08C65.2607 17.0187 65.282 17.9467 65.282 18.864C65.282 19.7813 65.2607 20.6987 65.218 21.616C65.1327 23.5573 64.6847 25.1787 63.874 26.48C63.0633 27.76 61.9327 28.72 60.482 29.36C59.0313 30 57.3247 30.32 55.362 30.32ZM55.362 25.712C56.4927 25.712 57.41 25.3707 58.114 24.688C58.8393 24.0053 59.2233 22.9173 59.266 21.424C59.3087 20.4853 59.33 19.6 59.33 18.768C59.33 17.936 59.3087 17.072 59.266 16.176C59.2233 15.1733 59.0313 14.3627 58.69 13.744C58.37 13.104 57.922 12.6347 57.346 12.336C56.77 12.0373 56.1087 11.888 55.362 11.888C54.6367 11.888 53.986 12.0373 53.41 12.336C52.834 12.6347 52.3753 13.104 52.034 13.744C51.6927 14.3627 51.5007 15.1733 51.458 16.176C51.4367 17.072 51.426 17.936 51.426 18.768C51.426 19.6 51.4367 20.4853 51.458 21.424C51.522 22.9173 51.906 24.0053 52.61 24.688C53.314 25.3707 54.2313 25.712 55.362 25.712ZM69.1513 30C68.9166 30 68.7246 29.9253 68.5753 29.776C68.4259 29.6267 68.3513 29.4347 68.3513 29.2V8.4C68.3513 8.16533 68.4259 7.97333 68.5753 7.824C68.7246 7.67467 68.9166 7.6 69.1513 7.6H73.1833C73.4179 7.6 73.6099 7.67467 73.7593 7.824C73.9086 7.97333 73.9833 8.16533 73.9833 8.4V15.504L79.9033 8.208C79.9886 8.08 80.1273 7.952 80.3193 7.824C80.5326 7.67467 80.8099 7.6 81.1513 7.6H85.7593C85.9513 7.6 86.1113 7.67467 86.2393 7.824C86.3673 7.952 86.4313 8.10133 86.4313 8.272C86.4313 8.42133 86.3886 8.54933 86.3033 8.656L78.6553 18.32L86.9113 28.944C86.9966 29.0293 87.0393 29.1573 87.0393 29.328C87.0393 29.4987 86.9646 29.6587 86.8153 29.808C86.6873 29.936 86.5379 30 86.3673 30H81.5993C81.2153 30 80.9166 29.9147 80.7033 29.744C80.5113 29.5733 80.3833 29.4453 80.3193 29.36L73.9833 21.456V29.2C73.9833 29.4347 73.9086 29.6267 73.7593 29.776C73.6099 29.9253 73.4179 30 73.1833 30H69.1513Z" fill="#D27722" />
                <path d="M94.92 31.132C95.128 31.132 95.288 31.236 95.4 31.444C95.512 31.652 95.568 31.916 95.568 32.236C95.568 32.636 95.512 32.948 95.4 33.172C95.288 33.38 95.112 33.524 94.872 33.604C93.912 33.94 92.856 34.132 91.704 34.18C91.384 35.508 90.776 36.58 89.88 37.396C89 38.212 88.024 38.62 86.952 38.62C85.336 38.62 84.16 38.004 83.424 36.772C82.688 35.54 82.32 33.756 82.32 31.42C82.32 29.356 82.576 27.116 83.088 24.7C83.6 22.268 84.344 20.204 85.32 18.508C86.312 16.796 87.488 15.94 88.848 15.94C89.584 15.94 90.176 16.26 90.624 16.9C91.072 17.524 91.296 18.34 91.296 19.348C91.296 20.66 91.048 21.964 90.552 23.26C90.056 24.556 89.232 25.916 88.08 27.34C89.152 27.42 90.024 27.868 90.696 28.684C91.368 29.484 91.768 30.476 91.896 31.66C92.648 31.612 93.544 31.452 94.584 31.18C94.68 31.148 94.792 31.132 94.92 31.132ZM88.296 18.316C87.976 18.316 87.624 18.796 87.24 19.756C86.872 20.7 86.528 21.988 86.208 23.62C85.888 25.252 85.648 27.036 85.488 28.972C86.544 27.036 87.384 25.332 88.008 23.86C88.648 22.372 88.968 21.052 88.968 19.9C88.968 19.388 88.904 18.996 88.776 18.724C88.664 18.452 88.504 18.316 88.296 18.316ZM87.048 36.076C87.544 36.076 87.984 35.868 88.368 35.452C88.752 35.036 89.008 34.436 89.136 33.652C88.64 33.316 88.256 32.876 87.984 32.332C87.728 31.788 87.6 31.212 87.6 30.604C87.6 30.38 87.632 30.076 87.696 29.692H87.624C86.968 29.692 86.416 30.02 85.968 30.676C85.536 31.316 85.32 32.18 85.32 33.268C85.32 34.18 85.488 34.876 85.824 35.356C86.176 35.836 86.584 36.076 87.048 36.076ZM102.112 33.148C102.32 33.148 102.48 33.244 102.592 33.436C102.72 33.628 102.784 33.892 102.784 34.228C102.784 34.868 102.632 35.364 102.328 35.716C101.64 36.564 100.888 37.26 100.072 37.804C99.2718 38.348 98.3598 38.62 97.3358 38.62C95.9278 38.62 94.8798 37.98 94.1918 36.7C93.5198 35.42 93.1838 33.764 93.1838 31.732C93.1838 29.78 93.4318 27.556 93.9278 25.06C94.4398 22.564 95.1838 20.42 96.1598 18.628C97.1518 16.836 98.3278 15.94 99.6878 15.94C100.456 15.94 101.056 16.3 101.488 17.02C101.936 17.724 102.16 18.74 102.16 20.068C102.16 21.972 101.632 24.18 100.576 26.692C99.5198 29.204 98.0878 31.692 96.2798 34.156C96.3918 34.812 96.5758 35.284 96.8318 35.572C97.0878 35.844 97.4238 35.98 97.8398 35.98C98.4958 35.98 99.0718 35.796 99.5678 35.428C100.064 35.044 100.696 34.396 101.464 33.484C101.656 33.26 101.872 33.148 102.112 33.148ZM99.1598 18.316C98.7918 18.316 98.3758 18.98 97.9118 20.308C97.4478 21.636 97.0398 23.284 96.6878 25.252C96.3358 27.22 96.1438 29.108 96.1118 30.916C97.2478 29.044 98.1518 27.172 98.8238 25.3C99.4958 23.412 99.8318 21.692 99.8318 20.14C99.8318 18.924 99.6078 18.316 99.1598 18.316ZM112.604 31.132C112.812 31.132 112.972 31.236 113.084 31.444C113.196 31.652 113.252 31.916 113.252 32.236C113.252 33.004 113.02 33.46 112.556 33.604C111.596 33.94 110.54 34.132 109.388 34.18C109.084 35.524 108.484 36.604 107.588 37.42C106.692 38.22 105.676 38.62 104.54 38.62C103.58 38.62 102.756 38.388 102.068 37.924C101.396 37.46 100.884 36.844 100.532 36.076C100.18 35.308 100.004 34.476 100.004 33.58C100.004 32.364 100.236 31.284 100.7 30.34C101.164 29.38 101.804 28.636 102.62 28.108C103.436 27.564 104.34 27.292 105.332 27.292C106.548 27.292 107.524 27.716 108.26 28.564C109.012 29.396 109.452 30.428 109.58 31.66C110.332 31.612 111.228 31.452 112.268 31.18C112.396 31.148 112.508 31.132 112.604 31.132ZM104.732 36.076C105.244 36.076 105.684 35.868 106.052 35.452C106.436 35.036 106.692 34.436 106.82 33.652C106.324 33.316 105.94 32.876 105.668 32.332C105.412 31.788 105.284 31.212 105.284 30.604C105.284 30.348 105.308 30.092 105.356 29.836H105.236C104.596 29.836 104.06 30.148 103.628 30.772C103.212 31.38 103.004 32.244 103.004 33.364C103.004 34.244 103.172 34.916 103.508 35.38C103.86 35.844 104.268 36.076 104.732 36.076ZM118.848 28.108C119.248 28.108 119.528 28.172 119.688 28.3C119.864 28.412 119.952 28.644 119.952 28.996C119.952 29.188 119.944 29.34 119.928 29.452C119.864 29.948 119.664 31.228 119.328 33.292C119.088 34.684 118.936 35.604 118.872 36.052C118.264 40.18 117.44 43.436 116.4 45.82C115.376 48.22 114 49.42 112.272 49.42C111.456 49.42 110.792 49.164 110.28 48.652C109.768 48.156 109.512 47.5 109.512 46.684C109.512 45.548 109.96 44.324 110.856 43.012C111.752 41.716 113.432 40.116 115.896 38.212L116.04 37.276C115.768 37.708 115.408 38.044 114.96 38.284C114.528 38.508 114.096 38.62 113.664 38.62C112.672 38.62 111.88 38.26 111.288 37.54C110.696 36.82 110.4 35.876 110.4 34.708C110.4 33.428 110.696 32.22 111.288 31.084C111.88 29.932 112.664 29.012 113.64 28.324C114.632 27.62 115.68 27.268 116.784 27.268C117.136 27.268 117.368 27.34 117.48 27.484C117.608 27.612 117.712 27.852 117.792 28.204C118.096 28.14 118.448 28.108 118.848 28.108ZM114.528 36.196C114.896 36.196 115.248 35.972 115.584 35.524C115.92 35.076 116.16 34.436 116.304 33.604L117.072 29.5C116.416 29.516 115.808 29.772 115.248 30.268C114.688 30.748 114.24 31.388 113.904 32.188C113.568 32.988 113.4 33.836 113.4 34.732C113.4 35.228 113.496 35.596 113.688 35.836C113.896 36.076 114.176 36.196 114.528 36.196ZM112.536 47.092C112.936 47.092 113.384 46.612 113.88 45.652C114.392 44.692 114.88 43.164 115.344 41.068C114.112 42.124 113.224 43.076 112.68 43.924C112.136 44.772 111.864 45.516 111.864 46.156C111.864 46.428 111.912 46.652 112.008 46.828C112.12 47.004 112.296 47.092 112.536 47.092Z" fill="#E5A161" />
              </svg>
            </Link>
            <div className='md:hidden sm:hidden xsm:hidden flex gap-[24px]'>
              <Link href='/signup'>
                <div className='flex gap-[7px]'>
                  <svg className='max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.9165 93.75C22.9165 94.3025 23.136 94.8324 23.5267 95.2231C23.9174 95.6138 24.4473 95.8333 24.9998 95.8333H74.9998C75.5523 95.8333 76.0822 95.6138 76.473 95.2231C76.8637 94.8324 77.0831 94.3025 77.0831 93.75V79.1667H22.9165V93.75ZM18.0623 51.4375L22.4998 75H37.2915L35.4165 54.3542C35.3919 54.0806 35.4214 53.8048 35.5033 53.5426C35.5853 53.2804 35.718 53.037 35.8941 52.8261C36.0701 52.6152 36.286 52.4411 36.5293 52.3137C36.7727 52.1862 37.0387 52.108 37.3123 52.0833C37.5859 52.0587 37.8617 52.0882 38.1238 52.1702C38.386 52.2521 38.6295 52.3849 38.8404 52.5609C39.0512 52.737 39.2254 52.9528 39.3528 53.1962C39.4803 53.4395 39.5585 53.7056 39.5831 53.9792L41.479 75H58.5206L60.4165 53.9792C60.4411 53.7056 60.5194 53.4395 60.6468 53.1962C60.7743 52.9528 60.9484 52.737 61.1593 52.5609C61.3701 52.3849 61.6136 52.2521 61.8758 52.1702C62.138 52.0882 62.4137 52.0587 62.6873 52.0833C62.9609 52.108 63.227 52.1862 63.4703 52.3137C63.7136 52.4411 63.9295 52.6152 64.1055 52.8261C64.2816 53.037 64.4144 53.2804 64.4963 53.5426C64.5783 53.8048 64.6078 54.0806 64.5831 54.3542L62.7081 75H77.4998L81.9373 51.4375C84.5116 50.7479 86.9094 49.5174 88.9706 47.8281C91.0319 46.1387 92.7094 44.0294 93.8912 41.6407C95.073 39.252 95.732 36.6387 95.8243 33.9753C95.9166 31.3118 95.44 28.6592 94.4263 26.1944C93.4126 23.7296 91.8852 21.5093 89.9457 19.6814C88.0063 17.8534 85.6995 16.46 83.179 15.5939C80.6586 14.7277 77.9825 14.4089 75.3291 14.6585C72.6758 14.9082 70.1061 15.7206 67.7915 17.0417C66.5488 13.3055 64.1615 10.0554 60.9681 7.75213C57.7747 5.44886 53.9372 4.20935 49.9998 4.20935C46.0624 4.20935 42.225 5.44886 39.0315 7.75213C35.8381 10.0554 33.4508 13.3055 32.2081 17.0417C29.8935 15.7206 27.3238 14.9082 24.6705 14.6585C22.0171 14.4089 19.341 14.7277 16.8206 15.5939C14.3002 16.46 11.9933 17.8534 10.0539 19.6814C8.11446 21.5093 6.58699 23.7296 5.57331 26.1944C4.55963 28.6592 4.08303 31.3118 4.1753 33.9753C4.26758 36.6387 4.92659 39.252 6.10841 41.6407C7.29023 44.0294 8.9677 46.1387 11.029 47.8281C13.0903 49.5174 15.488 50.7479 18.0623 51.4375Z" fill="#D27722" />
                  </svg>

                  <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Become tutor</p>
                </div>
              </Link>
              <Link href='/search-tutors'>
                <div className='flex gap-[7px]'>
                  <svg className='max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1283_45026)">
                      <path d="M69.9707 62.6608H78.3101Z" fill="#D27722" />
                      <path d="M69.9707 62.6608H78.3101" stroke="#D27722" strokeWidth="4" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                      <mask id="mask0_1283_45026" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="-17" y="-17" width="134" height="134">
                        <path d="M116.674 116.654H-16.6592V-16.6789H116.674V116.654Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_1283_45026)">
                        <path d="M51.9941 78.7799H19.7301C9.90635 78.7799 1.95752 70.8115 1.95752 61.0073V58.4489H69.7667V61.0073C69.7667 70.8115 61.8179 78.7799 51.9941 78.7799Z" fill="#D27722" stroke="#D27722" strokeWidth="4" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M94.0232 66.6823H78.7505V58.6358H94.0232C96.2496 58.6358 98.0464 60.4326 98.0464 62.659C98.0464 64.8855 96.2496 66.6823 94.0232 66.6823Z" fill="#D27722" stroke="#D27722" strokeWidth="4" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M44.8155 38.8881C40.304 43.3996 40.8509 51.2898 40.8509 51.2898C40.8509 51.2898 48.7411 51.8562 53.2526 47.3252C57.7641 42.8137 57.2173 34.9235 57.2173 34.9235C57.2173 34.9235 49.327 34.3766 44.8155 38.8881Z" fill="#D27722" stroke="#D27722" strokeWidth="4" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.0636 49.3722C15.9541 52.2627 21.8522 51.0518 21.8522 51.0518C21.8522 51.0518 23.0631 45.1537 20.1726 42.2632C17.2626 39.3727 11.384 40.5836 11.384 40.5836C11.384 40.5836 10.1731 46.4817 13.0636 49.3722Z" fill="#D27722" stroke="#D27722" strokeWidth="4" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.1782 30.688C24.1782 33.9887 26.8539 36.6838 30.174 36.6838C33.4746 36.6838 36.1698 34.0082 36.1698 30.688C36.1698 27.3679 33.4746 24.6922 30.174 24.6922C26.8539 24.6922 24.1782 27.3874 24.1782 30.688Z" fill="#D27722" stroke="#D27722" strokeWidth="4" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M44.6943 24.6988C44.6943 26.6323 46.2568 28.1752 48.1707 28.1752C50.0847 28.1752 51.6667 26.6323 51.6667 24.6988C51.6667 22.7653 50.1042 21.2224 48.1903 21.2224C46.2763 21.2224 44.6943 22.7653 44.6943 24.6988Z" fill="#D27722" stroke="#D27722" strokeWidth="4" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M31.1143 46.14V49.0891Z" fill="#D27722" />
                        <path d="M31.1143 46.14V49.0891" stroke="#D27722" strokeWidth="4" strokeMiterlimit="13.3333" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1283_45026">
                        <rect width="100" height="100" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p className='font-outfit font-normal text-lg leading-[22.68px] text-TextColor'>Start learning</p>
                </div>
              </Link>
            </div>
          </div>

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

          <div className='flex items-center gap-[20px] xsm:hidden sm:hidden md:hidden'>
          <div onClick={(e) => {setLanguageModal(!languageModal);e.stopPropagation();}} className='flex items-center gap-[0.278vw] cursor-pointer group relative'>
              <LanguageModal state={languageModal} closeModal={(e)=> {setLanguageModal(false)}}/>
              <p className='font-outfit font-normal text-[19px] leading-[19px] select-none'>Eng</p>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.53306 5.46142C5.23955 5.75797 4.76045 5.75797 4.46694 5.46142L1.06833 2.02759C0.599611 1.55401 0.935073 0.75 1.60139 0.75L8.39861 0.750001C9.06493 0.750001 9.40039 1.55401 8.93167 2.02759L5.53306 5.46142Z" fill="#D27722" />
              </svg>
            </div>
            <div className='relative flex items-center gap-[10px] w-[251px] px-[15px] h-[44px] rounded-[8px] border border-[rgba(255,219,184,1)]'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.9999 21L16.6499 16.65" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input className='flex-1 w-full outline-none h-full placeholder:text-primary2 bg-[rgba(0,0,0,0)]' type="text" placeholder='Search Articles' />
            </div>
          </div>
        </div>
      </nav>

      {children}
      <LandingFooter/>
    </div>
  )
}