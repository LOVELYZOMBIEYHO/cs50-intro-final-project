import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { API_URL } from "/config/index";
import { FRONT_URL } from "/config/index";

export default function Applystudent({}) {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");

  const submitApplication = async (e) => {
    // Prevent Form submit, the form will refresh too fast and can't be sent the data to backend database if no prevent default
    e.preventDefault();
    const response = await fetch(`${API_URL}/form`, {
      method: "POST",
      body: JSON.stringify({ email, title }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    // set 500ms redirect original page
    setTimeout(function () {
      window.location.replace(`${FRONT_URL}/formstudent`);
    }, 500);
  };

  return (
    <div>
      <div>
        <h1>Student Application</h1>
        <form onSubmit={submitApplication}>
          <div>
            <label htmlFor="title">Your Name</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
