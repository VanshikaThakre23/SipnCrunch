import React, { useEffect, useRef } from "react";
import "./FoodMenuDeals.css";

const FoodMenuDeals = () => {
  const centerImgRef = useRef(null);

  useEffect(() => {
    const menuThumbnails = document.querySelectorAll(".menu-item-thumb img");

    menuThumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        if (centerImgRef.current) {
          centerImgRef.current.src = thumbnail.src;
          centerImgRef.current.alt = thumbnail.alt;
        }
      });
    });

    // Cleanup when component unmounts
    return () => {
      menuThumbnails.forEach((thumbnail) => {
        thumbnail.replaceWith(thumbnail.cloneNode(true)); // removes event listener safely
      });
    };
  }, []);

  return (
    <section className="food-menu-wrapper style2" data-aos="fade-up">
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
                      <img
                        src="assets/food-images/menuThumb2_1.png"
                        alt="Momos"
                      />
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
                      <img
                        src="assets/images/panner-tikka.webp"
                        alt="Paneer Tikka"
                      />
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
                      <img
                        src="assets/food-images/menuThumb2_3.png"
                        alt="Manchurian Fried Rice"
                      />
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
                <button type="submit">ORDER NOW</button>
              </div>

              {/* Right Column */}
              <div className="menu-column">
                <div className="single-menu-items">
                  <div className="details">
                    <div className="menu-item-thumb">
                      <img
                        src="assets/food-images/menuThumb2_4.png"
                        alt="Spicy Noodles"
                      />
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
                      <img
                        src="assets/food-images/menuThumb2_5.png"
                        alt="Veg Cheesy Pizza"
                      />
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
                      <img
                        src="assets/food-images/menuThumb2_6.png"
                        alt="Grilled Chicken"
                      />
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
