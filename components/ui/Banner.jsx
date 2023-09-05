import React, { useEffect, useRef } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import styles from './Banner.module.css'
import Image from 'next/image'

export default function Banner() {
  const ref = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  const ref7 = useRef(null)
  const ref8 = useRef(null)
  useEffect(() => {
    ref.current.addEventListener("mousemove", (e)=>{
      let xAxis= (window.innerWidth / 2 - e.pageX)/5;
      let yAxis= (window.innerHeight / 2 - e.pageY)/5;
      ref.current.style.transform = 'perspective(1000px) rotateY(' + xAxis + 'deg)' + 'rotateX(' + yAxis + 'deg)';
  });
    ref1.current.addEventListener("mousemove", (e)=>{
      let xAxis= (window.innerWidth / 1.4 - e.pageX)/10;
      let yAxis= (window.innerHeight / 2 - e.pageY)/10;
      ref1.current.style.transform = 'perspective(1000px) rotateY(' + xAxis + 'deg)' + 'rotateX(' + yAxis + 'deg)';
  });
  ref.current.addEventListener("mouseenter", (e)=>{
     ref.current.style.transition = "none";
     ref2.current.style.transform = "translateZ(50px) ";
     ref5.current.style.transform = "translateZ(30px) ";
     ref8.current.style.transform = "translateZ(30px) ";
     console.log(ref2.current)
    });
    ref1.current.addEventListener("mouseenter", (e)=>{
      ref1.current.style.transition = "none";
      ref3.current.style.transform = "translateZ(50px)";
      ref4.current.style.transform = "translateZ(50px)";
      ref6.current.style.transform = "translateZ(30px)";
      ref7.current.style.transform = "translateZ(30px)";
    });
    ref.current.addEventListener("mouseleave", (e)=>{
      ref.current.style.transition = "0.5s all ease";
      ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
      ref2.current.style.transform = "translateZ(0px)";
      
    });
    ref1.current.addEventListener("mouseleave", (e)=>{
    ref1.current.style.transition = "0.5s all ease";
    ref1.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    
});
  }, [])
  
  return (
    <div className={`row d-flex ${styles.bannerContainer}`}>
      <div className="col-md-5 col-12">
        <p className={styles.tagline}>WE MAKE IT  HAPPEN</p>
        <h1 className=''>Learn Driving. <span>The Digital Way.</span></h1>
        <p className={styles.projectsLink}>More Projects  <BsChevronDown className='ms-1' size={13} /></p>
      </div>

      <div className={`col-7 ${styles.bannerImgContainer} d-none d-md-block`} >
        <div className={styles.bgImg}></div>
        <div className={styles.picOneContainer} ref={ref}>
        <Image src="/images/turnPic.png" width="70" height="70" className={styles.turnPic} ref={ref2}/>
        <img src="./images/pic1.png"   />
        <p ref={ref8}></p>
        <span ref={ref5}></span>
        </div>
        <div  className={styles.picTwoContainer} ref={ref1}>
        <Image src="/images/steering.png" width="70" height="70" className={styles.steeringPic} ref={ref3}/>
        <img src="./images/pic2.png" />
        <Image src="/images/phonePic.png" width="70" height="70" className={styles.phonePic} ref={ref4}/>
        <p ref={ref6}></p>
        <span ref={ref7}></span>
        </div>
       
      </div>
    </div>
  )
}
