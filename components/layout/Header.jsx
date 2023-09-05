import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import {MdOutlineSort} from 'react-icons/md'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div><Image src="/images/logo.png" width="300" height="70" className={styles.logo} /></div>
      <div className={styles.headerLink}>
        <ul className='d-none d-md-flex'>
          <li>Services</li>
          <li>Clients</li>
          <li>About Us</li>
          <li>Platforms</li>
        </ul>
        <button className='d-none d-md-block'>Let's Talk</button>
        <MdOutlineSort size={35} className={styles.icon}/>
      </div>
    </div>
  )
}
