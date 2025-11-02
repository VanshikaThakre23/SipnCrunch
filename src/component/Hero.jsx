import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  const handleNavigate = (path, sectionId) => {
    navigate(`${path}#${sectionId}`);
  };

  return (
    <section className="hero">
      <div className="hero-text" data-aos="fade-right">
        <p className="small-text">CRAVING FOR SWADISHT FOOD?</p>
        <h1>LOOKING FOR BEST QUALITY FOOD OR RESTAURANT?</h1>
        <h1>We Got You 😀</h1>

        <div className="search-container">
          <select
            className="search-dropdown"
            onChange={(e) => { 
              const value = e.target.value;
              if (!value) return;

              // Different values for each
              if (value === "pizza") handleNavigate("/foodpage", "pizza");
              if (value === "burger") handleNavigate("/foodpage", "burger");
              if (value === "smoothie") handleNavigate("/drinkpage", "smoothie");
            }}
          >
            <option value="">Select a Category</option>
            <option value="pizza">🍕 Pizza</option>
            <option value="burger">🍔 Burger</option>
            <option value="smoothie">🧃 Smoothie</option>
          </select>

          <button className="select-btn" type="button" onClick={() => navigate("/foodpage")}>
            Explore 🍽️
          </button>
        </div>
      </div>

      <div className="hero-image" data-aos="fade-left">
        <img className="food-img" src="assets/images/heroimg.jpg" alt="Delicious Food" />
        <div className="quality-badge" data-aos="zoom-in">
          QUALITY <br /> FOOD
        </div>
      </div>
    </section>
  );
};

export default Hero;
