import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className={`${styles.footerContainer} row`}>
      <div className="col-4">
        <p className={styles.mailContainer}>info@innovazia.com</p>
        <div className={`d-flex ${styles.numberContainer}`}>
          <p className='me-2'>Tel :  <span>+971 4 3565445</span></p>
          <p>Fax :  <span>+971 4 3546445</span></p>
        </div>
      </div>
      <div className="col-4 text-center">
       <p>Innovazia Technologies LLC,</p> 
       <p>Office Number #415, Hamsah Comples,Karama</p>
       <p>  Opposite: Ministry of External Affairs,</p> 
       <p>PO Box 28023 - Dubai, UAE</p>
        <p>Internet city, Dubai, UAE</p>
        
      </div>
      <div className="col-4 text-end">
        <Link href={'#'} className='text-decoration-none'>Privacy Policy</Link>
        <p>© 2021 Innovazia Technologies LLC</p>
      </div>
    </div>
  )
}
