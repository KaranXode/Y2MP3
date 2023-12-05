import React from "react";
import YT from "../../Assets/SVG/logo.svg";
function Header() {
  return (
    <>
      <div className="nav gradient-background ">
        <div className="header-logo">
        <a href="./" className="header-logo">
          <img src={YT} alt="logo" className="img-logo" />
          <h2 className="logo-name">Y2MP3</h2>
          </a>
        </div>
        <div className="nav-brand">
        <a href="./" className="nav-link">
            Home
          </a>
          <a href="./" className="nav-link">
            How It's Works
          </a>

          <a href="./" className="nav-link">
            About Us
          </a>

          <a href="./" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
