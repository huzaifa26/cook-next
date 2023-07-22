'use client'

import React, { useEffect, useRef, useState } from 'react';
import user from '@/assets/StudentDashboard/user.svg';
import { useRouter, useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/router';
import Image from 'next/image';
import querystring from 'querystring';
import { useDispatch, useSelector } from 'react-redux';
import { addSingleChat } from '@/redux/chatSlice';
import { useSession } from 'next-auth/react';
import { v4 as uuidv4 } from 'uuid';
import { API_URL } from '@/utils/consts';
import { io } from 'socket.io-client'

let socket;

export default function Page() {
  const [currentChat, setCurrentChat] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();
  const session = useSession();

  const conversationState = useSelector((state) => state?.conversations?.conversations || []);

  const handleCardClick = (conversation) => {
    if (window.innerWidth < 577) {
      dispatch(addSingleChat(conversation))
      router.push('/single-chat?data=' + encodeURI(JSON.stringify(conversation)))
    }
    else
      setCurrentChat(conversation);
  };

  const sendMessageHandler = async () => {
    let data = {
      id: uuidv4(),
      conversationId: currentChat._id,
      senderId: session?.data?.data?._id,
      message
    }

    const result = await fetch(API_URL + 'api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const res = await result.json();

    if (res.status === 200) {
      socket.emit('message', { receiverId: secondUserRef.current?._id, data: res.data });
      setCurrentChat(res.data);
    }
  }

  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  const secondUserRef = useRef(null)

  const socketInitializer = async () => {
    await fetch(API_URL + "/api/socket");

    try {
      socket = io(undefined, {
        path: '/api/socket',
        addTrailingSlash: false,
      });

      socket.on('connected', socket.id);
      socket.emit('joinRoom', session?.data?.data?._id);

      socket.on('new-message', (data) => {
        if (session?.data?.data?._id === data?.receiverId) {
          setCurrentChat(data)
        }
      });

      console.log('connected');
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    socketInitializer();
  })

  return (
    <div className='flex min-h-[calc(100vh-142.3px)]'>
      <div className={`w-[377px] sm:w-[260px] md:w-[260px] flex flex-col max-h-[81.3vh] overflow-auto xsm:min-w-full br-1px h-full pl-[38px] pr-[26px] pt-[38px] sm:pt-27px sm:pl-[20px] sm:pr-[20px] md:pt-27px md:pl-[20px] md:pr-[20px] xsm:pl-[32px] xsm:pr-[32px] xsm:pt-[23px] xsm:pb-0`}>
        {conversationState?.map((conversation) => {
          let localUser = null;

          if (session?.data?.data?._id === conversation?.user1._id) {
            localUser = conversation?.user2
          }
          if (session?.data?.data?._id === conversation?.user2._id) {
            localUser = conversation?.user1
          }

          return (
            <div className='card flex cursor-pointer hover:bg-[#cccccc27] overflow-hidden items-center gap-[16px] px-[23px] py-[12px] sm:px-0 md:px-0 xsm:px-0 xsm:pr-[4px]' key={conversation._id} onClick={() => handleCardClick(conversation)}>
              <Image className='rounded-full' width={56} height={56} loader={() => localUser?.image || localUser?.picture} src={localUser?.image || localUser?.picture} alt='' />
              <div className='flex flex-col gap-[7px]'>
                <h1 className='font-outfit text-[16px] leading-[18.13px] tracking-[-0.02em] font-[600]'>{localUser?.name}</h1>
                <p className='ellipsisShow font-outfit text-[16px] leading-[18.13px] tracking-[-0.02em] text-[#949494] font-[400]'>{conversation?.messages?.length > 0 ? conversation?.messages[conversation?.messages?.length - 1]?.message : "Start a conversation"}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex-1 xsm:hidden pr-[65px] sm:w-[65vw] md:w-[65vw] md:pr-0 sm:pr-0 w-[72vw]'>
        <div className={`border-primaryLighten2 border-l-[2px] border-r-[2px] sm:border-r-0  md:border-r-0`}>
          {currentChat?.length === 0 && (
            <div className='flex flex-col gap-2 min-h-[calc(100vh-142px)] justify-center items-center font-outfit text-[20px] leading-[18.13px]  text-[#949494] font-[600]'>
              <svg width='45' height='45' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H3.2L2 15.2V2H18V14Z' fill='#1E1E21' fillOpacity='0.4' />
              </svg>
              <span>{conversationState?.length === 0 ? 'No chats found' : 'Open a chat'}</span>
            </div>
          )}
          {currentChat?.length !== 0 && (
            <div className='flex flex-col '>
              <div className='z-10 max-h-[calc(100vh-228.3px)] min-h-[calc(100vh-228.3px)] sm:max-h-[calc(100vh-213.3px)] md:max-h-[calc(100vh-213.3px)] sm:min-h-[calc(100vh-213.3px)] md:min-h-[calc(100vh-213.3px)]  overflow-auto'>
                <div className='ml-[26px] mr-[41px] mt-[38px] flex flex-col sm:ml-[20px] sm:mr-[20px] md:ml-[20px] md:mr-[20px]'>
                  {currentChat?.messages?.map((chat, index) => {
                    let otherUser = null

                    if (session?.data?.data?._id === currentChat.user1._id) {
                      otherUser = currentChat.user2
                      secondUserRef.current = currentChat?.user2
                    }
                    if (session?.data?.data?._id === currentChat.user2._id) {
                      otherUser = currentChat.user1;
                      secondUserRef.current = currentChat?.user1
                    }

                    if (session?.data?.data?._id === chat?.senderId) {
                      return (
                        <div className='flex  my-[12px] justify-center ml-auto items-start' key={index}>
                          <div className='flex flex-col gap-[5px]'>
                            <div style={{ borderRadius: '16px 16px 0px 16px' }} className='flex justify-center items-center py-[12px] px-[16px] bg-primary'>
                              <p className='max-w-[528px] sm:max-w-[320px] md:max-w-[320px] xsm:text-[0.75em] text-[white] text-[16px] font-[400] font-outfit '>{chat.message}</p>
                            </div>
                          </div>
                        </div>
                      )
                    } else {
                      return (
                        <div className='flex my-[12px]' key={index}>
                          <Image loader={() => otherUser?.image || otherUser?.picture} src={otherUser?.image || otherUser?.picture} width={42} height={42} className='mr-[11px] h-[42px] w-[42px] cursor-pointer rounded-full' alt='user' />
                          <div className='flex flex-col gap-[5px] mt-[10px]'>
                            <div style={{ borderRadius: '0px 12px 12px 12px' }} className='flex justify-center items-center py-[12px] px-[16px] bg-backSec'>
                              <p className='max-w-[528px] sm:max-w-[320px] md:max-w-[320px] xsm:text-[0.75em] text-[black] text-[16px] font-[400] font-outfit'>{chat.message}</p>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })}
                </div>
              </div>

              <div className='h-[86px] sm:h-[71px] md:h-[71px] pl-[27px] pr-[40px] sm:pl-[36px] md:pl-[36px] sm:pr-[46px] md:pr-[46px]'>
                <div className='flex gap-[16px] items-center'>
                  <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="49.4383" height="50.6106" rx="24.7192" fill="#D27722" />
                    <path d="M34.4383 24.6622L25.2483 33.8522C24.1225 34.9781 22.5955 35.6106 21.0033 35.6106C19.4112 35.6106 17.8842 34.9781 16.7583 33.8522C15.6325 32.7264 15 31.1994 15 29.6072C15 28.015 15.6325 26.4881 16.7583 25.3622L25.9483 16.1722C26.6989 15.4217 27.7169 15 28.7783 15C29.8398 15 30.8578 15.4217 31.6083 16.1722C32.3589 16.9228 32.7806 17.9408 32.7806 19.0022C32.7806 20.0637 32.3589 21.0817 31.6083 21.8322L22.4083 31.0222C22.0331 31.3975 21.5241 31.6083 20.9933 31.6083C20.4626 31.6083 19.9536 31.3975 19.5783 31.0222C19.2031 30.6469 18.9922 30.138 18.9922 29.6072C18.9922 29.0765 19.2031 28.5675 19.5783 28.1922L28.0683 19.7122" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className='flex items-center flex-1 border-[2px] border-primaryLighten2 rounded-[4px] h-[44px] px-[15px] '>
                    <input onChange={(e) => setMessage(e.target.value)} placeholder='Send a message' type="text" className='outline-none h-[40px]  flex-1' />
                    <svg onClick={sendMessageHandler} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.4384 2.3053L11.4384 13.3053" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22.4384 2.3053L15.4384 22.3053L11.4384 13.3053L2.43835 9.3053L22.4384 2.3053Z" stroke="#D27722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
