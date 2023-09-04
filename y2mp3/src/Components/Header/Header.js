import React from "react";
import YT from "../../Assets/SVG/logo.svg";
function Header() {
  return (
    <>
      <div className="nav">
        <div className="header-logo">
        <a href="./" className="header-logo">
          <img src={YT} alt="logo" />
          <h2 className="highlight">Y2MP3</h2>
          </a>
        </div>
        <div className="nav-brand">
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
        <div>
          <button className="download_btn">Log In</button>
        </div>
      </div>
    </>
  );
}

export default Header;
