import React, { useEffect, useRef } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import styles from './Banner.module.css'
import Image from 'next/image'

export default function Banner() {
  const ref = useRef(null)
  const ref1 = useRef(null)
  useEffect(() => {
    ref.current.addEventListener("mousemove", (e)=>{
   
      let xAxis= (window.innerWidth / 2 - e.pageX)/5;
      let yAxis= (window.innerHeight / 2 - e.pageY)/5;
      console.log(e.pageX)
      console.log(e.pageY)
      ref.current.style.transform = 'perspective(1000px) rotateY(' + xAxis + 'deg)' + 'rotateX(' + yAxis + 'deg)';
  });
    ref1.current.addEventListener("mousemove", (e)=>{
   
      let xAxis= (window.innerWidth / 1.4 - e.pageX)/10;
      let yAxis= (window.innerHeight / 2 - e.pageY)/10;
      console.log(e.pageX)
      console.log(e.pageY)
      ref1.current.style.transform = 'perspective(1000px) rotateY(' + xAxis + 'deg)' + 'rotateX(' + yAxis + 'deg)';
  });
  ref.current.addEventListener("mouseenter", (e)=>{
     ref.current.style.transition = "none";
});
  ref1.current.addEventListener("mouseenter", (e)=>{
     ref1.current.style.transition = "none";
});
  ref.current.addEventListener("mouseleave", (e)=>{
     ref.current.style.transition = "0.5s all ease";
     ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  
});
  ref1.current.addEventListener("mouseleave", (e)=>{
    ref1.current.style.transition = "0.5s all ease";
    ref1.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    
});
  }, [])
  
  return (
    <div className={`row d-flex ${styles.bannerContainer}`}>
      <div className="col-5">
        <p className={styles.tagline}>WE MAKE IT  HAPPEN</p>
        <h1 className=''>Learn Driving. <span>The Digital Way.</span></h1>
        <p className={styles.projectsLink}>More Projects  <BsChevronDown className='ms-1' size={13} /></p>
      </div>

      <div className={`col-7 ${styles.bannerImgContainer}`}>
        <div className={styles.bgImg}></div>
        <div className={styles.picOneContainer} ref={ref}>
        <Image src="/images/turnPic.png" width="70" height="70" className={styles.turnPic} />
        <img src="./images/pic1.png"   />
        <p></p>
        <span></span>
        </div>
        <div  className={styles.picTwoContainer} ref={ref1}>
        <Image src="/images/steering.png" width="70" height="70" className={styles.steeringPic}/>
        <img src="./images/pic2.png" />
        <Image src="/images/phonePic.png" width="70" height="70" className={styles.phonePic}/>
        <p></p>
        <span></span>
        </div>
       
      </div>
    </div>
  )
}
