import React from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";

const Navbar = ({ page }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <nav className="nav">
      <Link className="logo" to="/">
        Un<span className="col">Mask</span>
      </Link>

      <ul className="navlinks">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/certification">Certification</NavLink>
        </li>
      </ul>

      <Link>
        <button className="btn">Login</button>
      </Link>
    </nav>
  );
};

export default Navbar;
