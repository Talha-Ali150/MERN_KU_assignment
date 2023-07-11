import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = { name, email, message };
    alert(`message submitted successfully`);
  };
  return (
    <div>
      <h1>Contact</h1>
      <div>
        <form>
          <input
            type="text"
            placeholder="enter name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
