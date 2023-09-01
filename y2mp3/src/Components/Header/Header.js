import React from "react";
function Header() {
  return (
    <>
      <div className="nav">
        <div>
          <h2 className="highlight">Y2MP3</h2>
        </div>
        <div className="nav-brand">
            <a href="#" className="nav-link">How It's Works</a>

            <a href="#" className="nav-link">About Us</a>

            <a href="#" className="nav-link">Contact</a>

        </div>
        <div>
           <button className="download_btn">Log In</button>

        </div>
      </div>
    </>
  );
}

export default Header;
