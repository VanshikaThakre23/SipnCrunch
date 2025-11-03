// src/component/.../MenuGridSection.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showToast } from "../../../utils/toast";
import "react-toastify/dist/ReactToastify.css";
import { useOrders } from "../../../context/OrderContext";
import { useWishlist } from "../../../context/WishlistContext";
import { useAuth } from "../../../context/AuthContext";

import { FaShoppingCart } from "react-icons/fa";

import "./MenuGridSection.css";

const MenuGridSection = () => {
  const { addToOrders } = useOrders();
  const { addToWishlist } = useWishlist();
  const { user } = useAuth();
  const location = useLocation();

  // Scroll to section if hash present in URL
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const menuItems = [
    { id: 1, name: "MAHARAJA BURGER", img: "assets/food-images/dishes3_1.jpg", price: "Rs.149" },
    { id: 2, name: "SPICY PASTA", img: "assets/food-images/dishes3_2.jpg", price: "Rs.89" },
    { id: 3, name: "Grilled Chicken Pizza", img: "assets/food-images/dishes3_3.jpg", price: "Rs.199" },
    { id: 4, name: "Paneer Malai Tikka", img: "assets/food-images/dishes3_4.jpg", price: "Rs.129" },
    { id: 5, name: "Paneer Tikka 2.O", img: "assets/food-images/mg1_1.jpg", price: "Rs.129" },
    { id: 6, name: "Dal Makhani and Family", img: "assets/food-images/mg1_2.avif", price: "Rs.199" },
    { id: 7, name: "Thread Cheese Pizza", img: "assets/food-images/mg1_3.jpg", price: "Rs.299" },
    { id: 8, name: "Club Sandwich", img: "assets/food-images/mg1_4.jpg", price: "Rs.179" },
    { id: 9, name: "Rack Garlic Bread", img: "assets/food-images/mg1_5.jpg", price: "Rs.159" },
    { id: 10, name: "Cheesy Combo", img: "assets/food-images/combo1.webp", price: "Rs.159" },
    { id: 11, name: "Juicy Delight Combo", img: "assets/food-images/combo2.jpg", price: "Rs.229" },
    { id: 12, name: "Tandoori Feast", img: "assets/food-images/mg1_7.jpg", price: "Rs.179" },
  ];

  // Handle Wishlist with auth check
  const handleWishlist = (item) => {
    if (!user) {
      showToast("Please login or create an account first 🔐", "warn");
      return;
    }

    addToWishlist(item);
    showToast(`${item.name} added to wishlist ❤️`, "info");
  };

  // Handle Order with auth check
  const handleOrder = (item) => {
    if (!user) {
      showToast("Please login or create an account first 🔐", "warn");
      return;
    }

    addToOrders(item);
    showToast(
      <>
        {item.name} ADDED TO CART <FaShoppingCart style={{ color: "#03431dff", marginLeft: "6px", fontSize: "1.2rem" }} />
      </>,
      "success"
    );
  };

  return (
    <>
      <section className="menu-grid-section" id="burger">
        <div className="menu-grid-container">
          <h2 className="menu-grid-title text-center mb-4">Our Delicious Menu</h2>

          <div className="row g-4">
            {menuItems.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="single-menu-grid p-3 position-relative">
                  <div className="menugrid-item-thumb position-relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="img-fluid rounded shadow"
                    />

                    <h4 className="food-name">{item.name}</h4>

                    <div className="overlay">
                      <button
                        type="button"
                        className="order-now-btn"
                        onClick={() => handleOrder(item)}
                      >
                        Order Now
                      </button>
                    </div>

                    <div className="icons">
                      <i
                        className="fas fa-heart wishlist-icon"
                        title="Add to Wishlist"
                        onClick={() => handleWishlist(item)}
                      ></i>

                      <i
                        className="fas fa-shopping-cart cart-icon"
                        title="Add to Cart"
                        onClick={() => handleOrder(item)}
                      ></i>
                    </div>

                    <div className="menu-details">
                      <p className="price">{item.price}</p>
                      <p className="rating">⭐⭐⭐⭐ (4.5/5)</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



    </>
  );
};

export default MenuGridSection;
