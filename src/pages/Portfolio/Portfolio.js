import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <div>
      {/* <Hero title="Portfolio" subtitle="Here" /> */}
      <h1>Portfolio</h1>
      <div className={styles.card_container}>
        <div className={styles.cards}>
          <Card title="Phoenix Sky" />
        </div>
        <div className={styles.cards}>
          <Card title="Employee Management System" />
        </div>
        <div className={styles.cards}>
          <Card title="Password Generator" />
        </div>
      </div>
      <div className={styles.card_container}>
        <div className={styles.cards}>
          <Card title="Coding Quiz" />
        </div>
        <div className={styles.cards}>
          <Card title="Object Oriented Programing" />
        </div>
        <div className={styles.cards}>
          <Card title="Portfolio 2.0" />
        </div>
      </div>
    </div>
  );
}
