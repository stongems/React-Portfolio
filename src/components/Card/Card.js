import React from 'react'
import styles from './Card.module.css'


export default function Card({image, title}) {
    const renderImage = () => {
        return image ? <img src={image.src} alt={image.alt} /> : null;
    }
    return (
        <div className={styles.card}>
            {renderImage()}
            <h1>{title}</h1>
        </div>
    )
}
