import React from 'react'
import styles from './Client.module.css'

export default function ClientSection({ img,clientName, tagline, tags }) {
    return (
        <div className={styles.clientContainer}>
            <img src={img} className='col-7'/>
            <div className={`${styles.contentContainer} col-5`}>
                <p className={styles.clientName}>{clientName}</p>
                <h3 className={styles.tagline}>{tagline}</h3>
                <ul className={styles.tags}>
                    {
                        tags.map((tag, i) => (
                            <li key={i} className={styles.tag}>#{tag}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
