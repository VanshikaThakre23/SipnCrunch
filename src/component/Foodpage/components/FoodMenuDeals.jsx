import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useOrders } from "../../../context/OrderContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FoodMenuDeals.css";

const FoodMenuDeals = () => {
  const centerImgRef = useRef(null);
  const { addToOrders } = useOrders();
  const location = useLocation();

  // Keep one toast active for cart notifications
  const activeCartToast = useRef(null);

  // Scroll to section if URL has a hash
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  // Handle changing the center image on thumbnail click
  useEffect(() => {
    const thumbnails = document.querySelectorAll(".menu-item-thumb img");

    const handleClick = (e) => {
      if (centerImgRef.current) {
        centerImgRef.current.src = e.target.src;
        centerImgRef.current.alt = e.target.alt;
      }
    };

    thumbnails.forEach((img) => img.addEventListener("click", handleClick));
    return () => thumbnails.forEach((img) => img.removeEventListener("click", handleClick));
  }, []);

  // Handle "Order Now" click
  const handleOrder = () => {
    if (!centerImgRef.current) return;

    const selectedItem = {
      id: centerImgRef.current.alt.trim().toLowerCase().replace(/\s+/g, "_"),
      name: centerImgRef.current.alt || "Food Item",
      img: centerImgRef.current.src,
      price: "Rs.130",
    };

    // Result from context (should return "added" or "updated")
    const result = addToOrders(selectedItem);

    // Dismiss any active toast before showing a new one
    if (activeCartToast.current) {
      toast.dismiss(activeCartToast.current);
    }

    // Show one clean toast message
    if (result === "updated") {
      activeCartToast.current = toast.info(`Quantity updated for ${selectedItem.name} 🔁`, {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
    } else {
      activeCartToast.current = toast.success(`${selectedItem.name} added to cart 🛒`, {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <section id="pizza" className="food-menu-wrapper style2" data-aos="fade-up">
      <div className="food-menu-tab-wrapper style-bg">
        <div className="tab-content">
          <h2>OUR MOST POPULAR MENU ITEM</h2>
          <h4>Click on food image to get better view</h4>

          <div className="food-menu-tab-wrapper style2">
            <div className="menu-grid">
              {/* Left Column */}
              <div className="menu-column">
                <div className="single-menu-items">
                  <div className="details">
                    <div className="menu-item-thumb">
                      <img src="assets/food-images/menuThumb2_1.png" alt="Momos" />
                    </div>
                    <div className="menu-content">
                      <h3>MOMOS</h3>
                      <p>Freshly baked with a blend of spices.</p>
                    </div>
                  </div>
                  <span className="menu-price">Rs 130</span>
                </div>

                <div className="single-menu-items">
                  <div className="details">
                    <div className="menu-item-thumb">
                      <img src="assets/images/panner-tikka.webp" alt="Paneer Tikka" />
                    </div>
                    <div className="menu-content">
                      <h3>PANEER TIKKA</h3>
                      <p>Healthy and delicious veggie burger.</p>
                    </div>
                  </div>
                  <span className="menu-price">Rs 130</span>
                </div>

                <div className="single-menu-items">
                  <div className="details">
                    <div className="menu-item-thumb">
                      <img src="assets/food-images/menuThumb2_3.png" alt="Manchurian Fried Rice" />
                    </div>
                    <div className="menu-content">
                      <h3>MANCHURIAN FRIED RICE</h3>
                      <p>Healthy and delicious veggie burger.</p>
                    </div>
                  </div>
                  <span className="menu-price">Rs 130</span>
                </div>
              </div>

              {/* Center Column */}
              <div className="menu-center">
                <img
                  ref={centerImgRef}
                  src="assets/food-images/menuThumb3_1.jpg"
                  alt="Delicious Pasta"
                />
                <button type="button" onClick={handleOrder}>
                  ORDER NOW
                </button>
              </div>

              {/* Right Column */}
              <div className="menu-column">
                <div className="single-menu-items">
                  <div className="details">
                    <div className="menu-item-thumb">
                      <img src="assets/food-images/menuThumb2_4.png" alt="Spicy Noodles" />
                    </div>
                    <div className="menu-content">
                      <h3>SPICY NOODLES</h3>
                      <p>Stir-fried noodles with juicy chicken.</p>
                    </div>
                  </div>
                  <span className="menu-price">Rs 130</span>
                </div>

                <div className="single-menu-items">
                  <div className="details">
                    <div className="menu-item-thumb">
                      <img src="assets/food-images/menuThumb2_5.png" alt="Veg Cheesy Pizza" />
                    </div>
                    <div className="menu-content">
                      <h3>VEG CHEESY PIZZA</h3>
                      <p>Perfectly grilled for a smoky taste.</p>
                    </div>
                  </div>
                  <span className="menu-price">Rs 130</span>
                </div>

                <div className="single-menu-items">
                  <div className="details">
                    <div className="menu-item-thumb">
                      <img src="assets/food-images/menuThumb2_6.png" alt="Grilled Chicken" />
                    </div>
                    <div className="menu-content">
                      <h3>GRILLED CHICKEN</h3>
                      <p>Perfectly grilled for a smoky taste.</p>
                    </div>
                  </div>
                  <span className="menu-price">Rs 130</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodMenuDeals;
