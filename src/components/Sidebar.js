import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <ul>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/users">
          <li>Users</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
      </ul>
    </div>
  );
}
