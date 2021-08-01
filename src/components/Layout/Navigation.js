import React from "react";
import { Link } from "react-router-dom";
import styles from './Layout.module.css'


export default function Navigation({ title }) {
  // const {title} = props; ->   ^^^^^^^
  console.log(title);
  return (
    <div>
      {title}
      <nav className={styles.navbar}>
        <ul className={styles.navbar__ul}>
          <li className={styles.navbar__li}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navbar__li}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
