import React from "react";
import styles from './Hero.module.css'

export default function Hero({ title, subtitle, image }) {
  const renderImage = () => {
    if (!image) return null;
    return (<img className={styles.img} src={image.src} alt={image.alt} />)
  }
  return (
    <div style={{ backgroundColor: "white", height: 500 }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {renderImage()}
    </div>
  );
}
