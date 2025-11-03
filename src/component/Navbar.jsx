import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";
 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu after clicking contact
  };

  const toggleNavbar = () => setIsOpen(!isOpen);

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

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/advice" onClick={() => setIsOpen(false)}>TakeAdvice</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer" onClick={handleScrollToFooter}>Contact</a>
            </li>
            <li className="nav-item nav-icon">
              <Link className="nav-link" to="/myorders" onClick={() => setIsOpen(false)}>
                <i className="fa-solid fa-shopping-cart"></i>Orders
              </Link>
            </li>
            <li className="nav-item nav-icon">
              <Link className="nav-link" to="/wishlist" onClick={() => setIsOpen(false)}>
            Wishlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


 {/* Mega Menu */}
            {/* <li className="nav-item dropdown position-static">
      <Link
        className="nav-link dropdown-toggle"
        to="#"
        id="moreOptions"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Menu
      </Link>

      <div className="dropdown-menu custom-dropdown p-3" aria-labelledby="moreOptions">
        <div className="row"> */}
            {/* Juices & Specialty Drinks */}
            {/* <div className="col-md-4">
            <h6 className="dropdown-header">Juices & Specialty</h6>

            <strong className="menu-headings">🥤 Juices & Smoothies</strong>
            <Link className="dropdown-item" to="/menu/orange-juice">Fresh Orange Juice</Link>
            <Link className="dropdown-item" to="/menu/apple-juice">Apple Juice</Link>
            <Link className="dropdown-item" to="/menu/watermelon-juice">Watermelon Juice</Link>
            <Link className="dropdown-item" to="/menu/green-detox">Detox Green Juice</Link>
            <Link className="dropdown-item" to="/menu/protein-smoothies">Protein Smoothies</Link>

            <strong className="menu-headings mt-2">🍺 Specialty Drinks</strong>
            <Link className="dropdown-item" to="/menu/bubble-tea">Bubble Tea</Link>
            <Link className="dropdown-item" to="/menu/kombucha">Kombucha</Link>
            <Link className="dropdown-item" to="/menu/falooda">Falooda</Link>
            <Link className="dropdown-item" to="/menu/energy-drinks">Energy Drinks</Link>
          </div> */}

            {/* Snacks */}
            {/* <div className="col-md-4">
            <h6 className="dropdown-header">Snacks</h6>

            <strong className="menu-headings">🍟 Savory Snacks</strong>
            <Link className="dropdown-item" to="/menu/french-fries">French Fries</Link>
            <Link className="dropdown-item" to="/menu/nachos">Nachos with Dip</Link>
            <Link className="dropdown-item" to="/menu/spring-rolls">Spring Rolls</Link>
            <Link className="dropdown-item" to="/menu/cheese-balls">Cheese Balls</Link>
            <Link className="dropdown-item" to="/menu/onion-rings">Onion Rings</Link>

            <strong className="menu-headings mt-2">🥪 Quick Bites</strong>
            <Link className="dropdown-item" to="/menu/sandwiches">Sandwiches</Link>
            <Link className="dropdown-item" to="/menu/burgers">Burgers</Link>
            <Link className="dropdown-item" to="/menu/wraps-rolls">Wraps & Rolls</Link>
            <Link className="dropdown-item" to="/menu/tacos">Tacos</Link>
            <Link className="dropdown-item" to="/menu/mini-pizzas">Mini Pizzas</Link>
          </div> */}

            {/* Desserts & Offers */}
            {/* <div className="col-md-4">
            <h6 className="dropdown-header">Desserts & Offers</h6>

            <strong className="menu-headings">🍩 Sweet Treats</strong>
            <Link className="dropdown-item" to="/menu/muffins">Muffins</Link>
            <Link className="dropdown-item" to="/menu/donuts">Donuts</Link>
            <Link className="dropdown-item" to="/menu/icecream-sundaes">Ice Cream Sundaes</Link>
            <Link className="dropdown-item" to="/menu/brownies">Brownies</Link>
            <Link className="dropdown-item" to="/menu/waffles">Waffles & Pancakes</Link>

            <strong className="menu-headings mt-2">🎉 Special Offers</strong>
            <Link className="dropdown-item" to="/offers/meal-deals">Meal Deals</Link>
            <Link className="dropdown-item" to="/offers/seasonal">Seasonal Specials</Link>
            <Link className="dropdown-item" to="/offers/bogo">Buy 1 Get 1 Free</Link>
            <Link className="dropdown-item" to="/offers/new-arrivals">New Arrivals</Link>
          </div>
        </div>
      </div>
    </li> */}

