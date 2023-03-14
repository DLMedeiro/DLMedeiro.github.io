import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item nav-link">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/aboutme">About Me</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/projects">Projects</Link>
        {/* LoginForm */}
      </li>
      <li className="nav-item nav-link">
        <Link to="/connect">Connect</Link>
      </li>
    </ul>
  );
}

export default Navbar;
