'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import VideoImage from "@/assets/OnlineLesson/VideoImage.png"
import { API_URL } from '@/utils/consts'
import { io } from 'socket.io-client'
import { useSession } from 'next-auth/react'
import Peer from 'simple-peer';
import SimplePeer from 'simple-peer'

let socket;

export default function Video({ divRef, widthNumber, windowSize, width }) {
  const socketRef = useRef();
  const userVideoRef = useRef();
  const partnerVideoRef = useRef();
  const peerRef = useRef();
  const [isCalling, setIsCalling] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [isBothUsersJoined, setIsBothUsersJoined] = useState(false);
  const [stream, setStream] = useState();

  const session = useSession();

  // const socketInitializer = async () => {
  //   await fetch(API_URL + "/api/socket");

  //   try {
  //     socket = io(undefined, {
  //       path: '/api/socket',
  //       addTrailingSlash: false,
  //     });

  //     // socketRef.current = socket

  //     socket.on('connected', socket.id);

  //     setRoomId(session?.data?.data?._id)
  //     socket.emit('join-room', session?.data?.data?._id)

  //     socket.on('start-call', () => {
  //       setIsBothUsersJoined(true);
  //       startPeerConnection();
  //     });;

  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const startPeerConnection = () => {
  //   navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  //     .then((stream) => {
  //       userVideoRef.current.srcObject = stream;

  //       const peer = new SimplePeer({
  //         initiator: true, // The user initiating the call should be the initiator
  //         trickle: false,
  //         config: {
  //           iceServers: [
  //             { urls: 'stun:stun.l.google.com:19302' },
  //             { urls: 'stun:stun1.l.google.com:19302' },
  //             { urls: 'stun:stun2.l.google.com:19302' },
  //             { urls: 'stun:stun3.l.google.com:19302' },
  //             { urls: 'stun:stun4.l.google.com:19302' },
  //             {
  //               url: 'turn:turn.bistri.com:80',
  //               credential: 'homeo',
  //               username: 'homeo',
  //             },
  //             {
  //               url: 'turn:turn.anyfirewall.com:443?transport=tcp',
  //               credential: 'webrtc',
  //               username: 'webrtc',
  //             },
  //           ],
  //         },
  //         stream
  //       });

  //       peerRef.current = peer;

  //       // peer.once('signal', (signals, roomId) => {
  //       //   console.log(signals, roomId);
  //       //   peerRef.current.signal(signals);
  //       // });

  //       peer.once('signal', (signals, roomId) => {
  //         console.log(signals, roomId);
  //         console.log(peer);
  //         peer.signal(signals);
  //       });


  //       peer.on('stream', (stream) => {
  //         console.log("steaming.......", stream);
  //         partnerVideoRef.current.srcObject = stream;
  //       });

  //       peer.on('icecandidate', (candidate) => {
  //         console.log('ICE candidate:', candidate);
  //       });
  //     })
  //     .catch((error) => console.error('Error accessing media devices:', error));
  // };


  const socketInitializer = async () => {
    await fetch(API_URL + "/api/socket");

    try {
      socket = io(undefined, {
        path: '/api/socket',
        addTrailingSlash: false,
      });

      socket.on('connected', () => {
        console.log('Connected to socket:', socket.id);
        setRoomId(session?.data?.data?._id);
      });

      socket.emit('join-room', session?.data?.data?._id);

      socket.on('start-call', () => {
        setIsBothUsersJoined(true);
        startPeerConnection();
      });

    } catch (err) {
      console.log(err)
    }
  }

  const [showOtherUser,setShowOtherUser]=useState();

  const startPeerConnection = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        console.log("own stream",stream);
        userVideoRef.current.srcObject = stream;

        const configuration = {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' },
            { urls: 'stun:stun2.l.google.com:19302' },
            { urls: 'stun:stun3.l.google.com:19302' },
            { urls: 'stun:stun4.l.google.com:19302' },
            {
              urls: 'turn:turn.bistri.com:80',
              credential: 'homeo',
              username: 'homeo',
            },
            {
              urls: 'turn:turn.anyfirewall.com:443?transport=tcp',
              credential: 'webrtc',
              username: 'webrtc',
            },
          ],
        };

        const peer = new RTCPeerConnection(configuration);

        stream.getTracks().forEach(track => {
          console.log("other user stream",stream);
          peer.addTrack(track, stream);
        });

        peerRef.current = peer;

        peer.onicecandidate = (event) => {
          if (event.candidate) {
            // Send the ICE candidate to the other peer via the signaling server (socket.io)
            socket.emit('ice-candidate', { candidate: event.candidate, roomId: session?.data?.data?._id });
          }
        };

        peer.ontrack = (event) => {
          console.log("Streaming...",stream);
          
          partnerVideoRef.current.srcObject = event.streams[0];
          setShowOtherUser(event.streams[0]);
        };

        socket.on('remote-ice-candidate', (data) => {
          // When receiving ICE candidate from the other peer via the signaling server (socket.io)
          const candidate = new RTCIceCandidate(data.candidate);
          peer.addIceCandidate(candidate)
            .catch(error => console.error('Error adding ICE candidate:', error));
        });

        socket.on('answer-sdp', (data) => {
          // When receiving answer SDP from the other peer via the signaling server (socket.io)
          const remoteDescription = new RTCSessionDescription(data.sdp);
          peer.setRemoteDescription(remoteDescription)
            .then(() => console.log('Remote description set successfully'))
            .catch(error => console.error('Error setting remote description:', error));
        });

        peer.createOffer()
          .then(offer => peer.setLocalDescription(offer))
          .then(() => {
            // Send the local description (offer SDP) to the other peer via the signaling server (socket.io)
            socket.emit('offer-sdp', { sdp: peer.localDescription, roomId: session?.data?.data?._id });
          })
          .catch(error => console.error('Error creating offer:', error));
      })
      .catch((error) => console.error('Error accessing media devices:', error));
  };

  useEffect(() => {
    socketInitializer();
  }, [])


  return (
    <div ref={divRef} style={widthNumber < windowSize?.width ? { width } : { width: "100%" }} className='h-full relative min-w-[508px] xsm:min-w-[320px]'>

      {isBothUsersJoined ? (
        <div className='flex object-cover w-full h-screen relative'>
          <video ref={userVideoRef} className='bg-[aqua] w-[200px] z-[2002] h-[200px] absolute bottom-[102px] left-0' autoPlay muted />
          {<video ref={partnerVideoRef} muted className='bg-[red] w-[200px] z-[2001] h-[200px] absolute top-0 left-0' autoPlay />}
        </div>
      ) : (
        <Image className='object-cover w-full h-screen' src={VideoImage} alt="" />
      )}
      <div className='absolute top-[38px] w-full px-[44px] flex justify-between items-center'>
        <svg width="54" height="54" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="64.4" height="64.4" rx="32.2" fill="#D27722" />
          <path d="M35.75 20.75L40.75 20.75C41.413 20.75 42.0489 21.0134 42.5178 21.4822C42.9866 21.9511 43.25 22.587 43.25 23.25L43.25 40.75C43.25 41.413 42.9866 42.0489 42.5178 42.5178C42.0489 42.9866 41.413 43.25 40.75 43.25L35.75 43.25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27 25.75L20.75 32L27 38.25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20.75 32L35.75 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg width="54" height="54" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.400024" width="64.4" height="64.4" rx="32.2" fill="white" />
          <g clipPath="url(#clip0_634_45488)">
            <path d="M45.4 20.625V29.1298C45.4 29.5608 45.2288 29.9741 44.9241 30.2789C44.6193 30.5836 44.206 30.7548 43.775 30.7548C43.344 30.7548 42.9307 30.5836 42.626 30.2789C42.3212 29.9741 42.15 29.5608 42.15 29.1298V24.5481L36.1003 30.5979C35.7951 30.9007 35.3824 31.0703 34.9525 31.0694C34.5226 31.0686 34.1106 30.8975 33.8066 30.5935C33.5026 30.2895 33.3314 29.8775 33.3306 29.4476C33.3298 29.0177 33.4993 28.605 33.8021 28.2998L39.852 22.25H35.2702C34.8392 22.25 34.4259 22.0788 34.1211 21.774C33.8164 21.4693 33.6452 21.056 33.6452 20.625C33.6452 20.194 33.8164 19.7807 34.1211 19.476C34.4259 19.1712 34.8392 19 35.2702 19H43.775C44.206 19 44.6193 19.1712 44.9241 19.476C45.2288 19.7807 45.4 20.194 45.4 20.625ZM19.4 43.375C19.4 43.806 19.5712 44.2193 19.876 44.524C20.1807 44.8288 20.594 45 21.025 45H29.5299C29.9608 45 30.3742 44.8288 30.6789 44.524C30.9837 44.2193 31.1549 43.806 31.1549 43.375C31.1549 42.944 30.9837 42.5307 30.6789 42.226C30.3742 41.9212 29.9608 41.75 29.5299 41.75H24.9482L30.9979 35.7002C31.3027 35.3955 31.4739 34.9822 31.4739 34.5512C31.4739 34.1202 31.3027 33.7069 30.9979 33.4021C30.6932 33.0974 30.2798 32.9262 29.8489 32.9262C29.4179 32.9262 29.0045 33.0974 28.6998 33.4021L22.65 39.4519V34.8702C22.65 34.4392 22.4788 34.0259 22.1741 33.7212C21.8693 33.4164 21.456 33.2452 21.025 33.2452C20.594 33.2452 20.1807 33.4164 19.876 33.7212C19.5712 34.0259 19.4 34.4392 19.4 34.8702V43.375Z" fill="#D27722" />
          </g>
          <defs>
            <clipPath id="clip0_634_45488">
              <rect width="26" height="26" fill="white" transform="translate(19.4 19)" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className='absolute bottom-0 z-[2003] w-full h-[102px] bg-[rgba(37,36,34,0.5)] flex items-center justify-center gap-[25px]'>
        <svg width="54" height="54" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="64.4" height="64.4" rx="32.2" fill="white" />
          <g clipPath="url(#clip0_634_45472)">
            <path d="M32.2 16.7998C31.0861 16.7998 30.0178 17.2423 29.2302 18.03C28.4425 18.8176 28 19.8859 28 20.9998V32.1998C28 33.3137 28.4425 34.382 29.2302 35.1697C30.0178 35.9573 31.0861 36.3998 32.2 36.3998C33.3139 36.3998 34.3822 35.9573 35.1698 35.1697C35.9575 34.382 36.4 33.3137 36.4 32.1998V20.9998C36.4 19.8859 35.9575 18.8176 35.1698 18.03C34.3822 17.2423 33.3139 16.7998 32.2 16.7998Z" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M42 29.3999V32.1999C42 34.799 40.9675 37.2917 39.1297 39.1295C37.2918 40.9674 34.7991 41.9999 32.2 41.9999C29.6009 41.9999 27.1082 40.9674 25.2704 39.1295C23.4325 37.2917 22.4 34.799 22.4 32.1999V29.3999" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32.2 42V47.6" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26.6 47.6001H37.8" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_634_45472">
              <rect width="33.6" height="33.6" fill="white" transform="translate(15.4 15.3999)" />
            </clipPath>
          </defs>
        </svg>
        <svg width="54" height="54" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.400024" width="64.4" height="64.4" rx="32.2" fill="white" />
          <g clipPath="url(#clip0_634_45478)">
            <path d="M48 25.1997L38.2 32.1997L48 39.1997V25.1997Z" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35.4 22.3999H20C18.4536 22.3999 17.2 23.6535 17.2 25.1999V39.1999C17.2 40.7463 18.4536 41.9999 20 41.9999H35.4C36.9463 41.9999 38.2 40.7463 38.2 39.1999V25.1999C38.2 23.6535 36.9463 22.3999 35.4 22.3999Z" stroke="#D27722" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_634_45478">
              <rect width="33.6" height="33.6" fill="white" transform="translate(15.7999 15.3999)" />
            </clipPath>
          </defs>
        </svg>
        <svg width="54" height="54" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.800049" width="64.4" height="64.4" rx="32.2" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M23.9518 42.0722H19.1197C17.1183 42.0722 15.4956 40.4497 15.4956 38.4481C15.4956 34.4964 15.4956 26.6957 15.4956 22.7437C15.4956 20.7423 17.1183 19.1196 19.1197 19.1196H45.6962C47.6979 19.1196 49.3203 20.7423 49.3203 22.7437V38.4481C49.3203 40.4497 47.6979 42.0722 45.6962 42.0722H40.864V43.0135C40.864 44.4951 39.6632 45.6962 38.1814 45.6962C35.4013 45.6962 29.4146 45.6962 26.6345 45.6962C25.153 45.6962 23.9518 44.4951 23.9518 43.0135V42.0722ZM26.3678 42.0722V43.0135C26.3678 43.1608 26.4872 43.2803 26.6345 43.2803H38.1814C38.3287 43.2803 38.4481 43.1608 38.4481 43.0135V42.0722H26.3678ZM46.9043 22.7437V38.4481C46.9043 39.1152 46.3633 39.6562 45.6962 39.6562C39.8458 39.6562 24.9704 39.6562 19.1197 39.6562C18.4526 39.6562 17.9118 39.1152 17.9118 38.4481C17.9118 34.4964 17.9118 26.6957 17.9118 22.7437C17.9118 22.0766 18.4526 21.5359 19.1197 21.5359H45.6962C46.3633 21.5359 46.9043 22.0766 46.9043 22.7437ZM31.2 29.2844L29.8454 30.6389C29.374 31.1104 28.6083 31.1104 28.1369 30.6389C27.6655 30.1675 27.6655 29.4018 28.1369 28.9304L31.5537 25.5136C32.0257 25.0419 32.7905 25.0419 33.2622 25.5136L36.679 28.9304C37.1504 29.4018 37.1504 30.1675 36.679 30.6389C36.2076 31.1104 35.4422 31.1104 34.9707 30.6389L33.6159 29.2844V34.824C33.6159 35.4908 33.0746 36.0321 32.4081 36.0321C31.7413 36.0321 31.2 35.4908 31.2 34.824V29.2844Z" fill="#D27722" />
        </svg>
      </div>
    </div>
  )
}
