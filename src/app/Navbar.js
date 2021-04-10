import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact={true} activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/posts">Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
