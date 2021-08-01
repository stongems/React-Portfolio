import React from "react";

export default function Hero({ title, subtitle }) {
  return (
    <div style={{ backgroundColor: "white", height: 400 }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
