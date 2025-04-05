import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/nav.css';  // Import the CSS file

export default function Navigation() {
  const { pathname } = useLocation();

  const navClass = (path) =>
    pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="navbar">
      <Link to="/" className={navClass("/")}>
        Page One
      </Link>
      <Link to="/two" className={navClass("/two")}>
        Page Two
      </Link>
    </nav>
  );
}
