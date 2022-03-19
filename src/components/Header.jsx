import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="header">
      {/* Navbar Start */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a class="navbar-brand" href="#">
            Fake<strong>Store</strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Stores
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
      {/* Hero Section Start */}
      <div className="hero">
        <div className="container">
          <h5>Welcome to</h5>
          <h1 className="hero-title">FakeStore</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
