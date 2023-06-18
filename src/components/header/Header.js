import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <img
            className="insta_logo"
            src="https://seeklogo.com/images/A/aaple-sarkar-logo-1AF3E2BAF7-seeklogo.com.png"
            alt="instagram_logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <button type="button" className="btn ">
            Login
          </button>
          <button type="button" className="btn ">
            Sign-Up
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
