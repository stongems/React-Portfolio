import React, { useState } from "react";
import Hero from "../../components/Hero/Hero";

export default function Contact() {
  return (
    <div>
      <h1 style={{ marginBottom: 50, textAlign: "center" }}>Contact</h1>

      <form
        onSubmit={() => alert("test")}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <label>To:</label>
        <br />
        <input type="text required" />
        <br />
        <br />
        <label for="from">From:</label>
        <br />
        <input type="text required" />
        <br />
        <br />
        <label>Message:</label>
        <br />
        <textarea name="message" rows="10" required />
        <br />
        <br />
        <button type="sumbit">Submit</button>
      </form>
    </div>
  );
}
