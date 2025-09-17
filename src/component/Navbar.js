import React from "react";
import logo from "../assets/logo.png";
import navImage from "../assets/navimage.png";

const Navbar = () => {
  const navItems = [
    { label: "Home", id: "home" },
    { label: "Insights", id: "insights" },
    { label: "Events", id: "discover" },
    { label: "Discover", id: "events" },
    { label: "Exhibit", id: "exbihit" },
    { label: "About", id: "about" }
  ];

  // Scroll function with navbar offset
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70; // Navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav
        className="navbar sticky-top navbar-light px-1"
        style={{
          backgroundImage: `url(${navImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1030
        }}
      >
        <div className="container-fluid px-3 px-lg-5 d-flex align-items-center justify-content-between h-100">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "80px", // fixed height for crispness
                width: "auto",  // auto to preserve ratio
                objectFit: "contain"
              }}
            />
          </div>

          {/* Desktop Links */}
          <div className="d-none d-lg-flex align-items-center h-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="btn nav-link custom-nav-link d-flex align-items-center h-100 mx-2"
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "1.2rem", // increased font size
                  fontWeight: "500"
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "40px", // smaller but crisp for mobile
              width: "auto",
              objectFit: "contain"
            }}
          />
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body bg-dark bg-opacity-75">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <button
                  className="btn nav-link custom-nav-link-mobile text-light fw-semibold"
                  data-bs-dismiss="offcanvas"
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: "transparent",
                    border: "none",
                    width: "100%",
                    textAlign: "left",
                    fontSize: "1.2rem" // increased font size for mobile too
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
