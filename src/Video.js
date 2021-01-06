import React, { Component, useRef,useState } from 'react';
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video  ({messages,share,likes,song,description,channel,src})  {
    const videoRef = useRef(null)
    const [play,setplay] = useState(false)
    const onVideoPress = () =>{
        if (play) {
            videoRef.current.pause()
            setplay(false)
        } else {
            videoRef.current.play()
            setplay(true)
        }
    }
    return ( 
        <div className="video" >
            {/* <video className='video__player' src="https://www.tiktok.com/@katalyna_98/video/6850115653337206022" ></video> */}
            <video 
            ref={videoRef} 
            loop  
            // autoPlay
            // controls
            onClick={onVideoPress}
            className='video__player' 
            src={src} ></video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} share={share} messages={messages} />
        </div>
     );
}

//https://v16m.tiktokcdn.com/2c01375f1d6bb1ca4109ff655087abe9/5f2dda19/video/tos/useast2a/tos-useast2a-pve-0068/2ea4b2d7c0074c7dbc7f7e596756c01e/?a=1233&br=2332&bt=1166&cr=0&cs=0&dr=0&ds=3&er=&l=20200805224753010189071066490B93DA&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amZvZjc0a2hydTMzOzczM0ApZjxlOmczOzxmNzs3Nmk6OWdjczExLW5mMTFfLS01MTZzczRfNi82Mi5eLTNhLWAwMTM6Yw%3D%3D&vl=&vr=
//https://v16m.tiktokcdn.com/8c198d5a94b9554d8ad719b799414432/5f2dd89c/video/tos/useast2a/tos-useast2a-ve-0068c004/ccbc85acb35d400199b85496a468c283/?a=1233&br=2396&bt=1198&cr=0&cs=0&dr=0&ds=3&er=&l=20200805224131010189066041520AEE56&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajpmajVydnNudTMzOzczM0ApMzQ5PDtpNWU2N2U1Zzw6O2c0ZXEyYWBjaTNfLS1hMTZzc19iMWMyMWAvYy0yXmE1MC86Yw%3D%3D&vl=&vr=
export default Video;