import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";
import { useAuth } from "../context/AuthContext"; // ✅ import Auth hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); // ✅ access auth state
  const navigate = useNavigate();

  const handleScrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/"); // redirect after logout
  };

  // detect screen width to switch behavior
  const isMobile = window.innerWidth <= 991;

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid nav-container">
        <Link className="navbar-brand" to="/">
          <img src="assets/images/logo(1).png" alt="Sip & Crunch Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/advice"
                onClick={() => setIsOpen(false)}
              >
                TakeAdvice
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#footer" onClick={handleScrollToFooter}>
                Contact
              </a>
            </li>

            {/* ✅ Desktop: Account Dropdown | Mobile: Independent Links */}
            {!isMobile ? (
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="accountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user"></i> Account
                </Link>

                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="accountDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/myorders"
                      onClick={() => setIsOpen(false)}
                    >
                      <i className="fa-solid fa-shopping-cart me-2"></i> Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/wishlist"
                      onClick={() => setIsOpen(false)}
                    >
                      <i className="fa-solid fa-heart me-2"></i> Wishlist
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/profile"
                      onClick={() => setIsOpen(false)}
                    >
                      <i className="fa-solid fa-user-circle me-2"></i> Profile
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/myorders"
                    onClick={() => setIsOpen(false)}
                  >
                    <i className="fa-solid fa-shopping-cart me-2"></i> My Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/wishlist"
                    onClick={() => setIsOpen(false)}
                  >
                    <i className="fa-solid fa-heart me-2"></i> Wishlist
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/profile"
                    onClick={() => setIsOpen(false)}
                  >
                    <i className="fa-solid fa-user-circle me-2"></i> Profile
                  </Link>
                </li>
              </>
            )}

            {/* ✅ Auth-based Buttons */}
            {user ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link text-success fw-semibold"
                    to="/profile"
                    onClick={() => setIsOpen(false)}
                  >
                    Hi, {user.name.split(" ")[0]}
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn nav-link ms-2" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link ms-2"
                    to="/login"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link ms-2"
                    to="/register"
                    onClick={() => setIsOpen(false)}
                  >
                    SignUp
                  </Link>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
