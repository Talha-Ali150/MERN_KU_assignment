import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email: email }));
    navigate("/home");
  };
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div>
      <h1>Login</h1>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <form>
          <input
            type="text"
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}
