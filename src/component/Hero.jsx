import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";


const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    
    <section className="hero">
      {/* Hero Text Section */}
      <div className="hero-text" data-aos="fade-right">
        <p className="small-text">CRAVING FOR SWADISHT FOOD?</p>
        <h1>LOOKING FOR BEST QUALITY FOOD OR RESTAURANT?</h1>
        <h1>We Got You 😀</h1>
        <button className="cta-btn" type="button">
          Search Here →
        </button>
      </div>

      {/* Hero Image Section */}
      <div className="hero-image" data-aos="fade-left">
        {/* Use /images/... if your images are inside public folder */}
        <img
          className="food-img"
          src="assets/images/heroimg.jpg"
          alt="Delicious Food"
        />
        <div className="quality-badge" data-aos="zoom-in">
          QUALITY <br /> FOOD
        </div>
      </div>

      {/* Optional: Chef Image Section */}
      {/* 
      <div className="hero-left-img">
        <img src="/images/shef.png" alt="Chef" />
      </div>
      */}
    </section>
  );
};

export default Hero;
