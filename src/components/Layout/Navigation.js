import React from "react";
import { Link } from "react-router-dom";
import styles from './Layout.module.css'

export default function Navigation({ title }) {
  // const {title} = props; ->   ^^^^^^^
  console.log(title);
  return (
    <div>
      {title}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
