import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Brand Logo" />
          <span>WayneEstate</span>
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/agent">Agent</Link>
      </div>

      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
              alt="user iamage"
            />
            <span>John Doe</span>
            <Link to={"/profile"} className="profile">
              <div className="notification">3</div>
              Profile
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign In</a>
            <a href="/" className="register">
              Sign Up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="menu icon" onClick={() => setOpen(!open)} />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agent</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
