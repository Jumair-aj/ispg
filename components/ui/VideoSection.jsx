import React, { useEffect, useRef, useState } from 'react'
import styles from './Video.module.css'
import { AiFillPlayCircle } from 'react-icons/ai'

export default function VideoSection() {
    const [show, setShow] = useState(false);
    const a = 1;
    return (
        <div className={styles.videoSectionContainer}>
            <div className={styles.videodiv}>
                <img src="./images/videoPic.jpg" />
                <div className={`col-md-3 col-6 ${styles.playBtn}`} onClick={() => setShow(true)}>
                    <div className="col-4"><AiFillPlayCircle size={100} color='#fff' /></div>
                    <div className="col-8">See what Delmonte saying about us</div>
                </div>
            </div>
            {show && <Video setShow={setShow} />}
        </div>
    )
}


const Video = ({ setShow }) => {
   
    return (
        <div className={styles.videoContainer} onClick={()=>setShow(false)}>
            <div onClick={()=>setShow(true)}><video src='./images/video.mp4' controls ></video></div>
        </div>
    )
}

