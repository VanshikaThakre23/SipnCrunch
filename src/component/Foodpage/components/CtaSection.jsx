import React from "react";
import "./CtaSection.css";

const CtaSection = () => {
  return (
    <section className="cta-section" data-aos="fade-up">
      <div className="cta-container">
        <div className="cta-text">
          <h2>Welcome Foodies</h2>
          <h3>Today's Special Food</h3>
          <p>Limited Time Offer</p>
          <button type="submit" className="cta-btn">GO ORDER NOW</button>
        </div>

        <div className="cta-right-img">
          <img src="assets/food-images/ctaThumb2_1.png" alt="Today's Special" />
        </div>

        <div className="cta-shapes-wrapper">
          <img className="cta1" src="assets/food-images/ctaShape2_1.png" alt="" />
          <img className="cta2" src="assets/food-images/ctaShape2_2.png" alt="" />
          <img className="cta3" src="assets/food-images/ctaShape2_5.png" alt="" />
          <img className="cta4" src="assets/food-images/ctaShape2_6.png" alt="" />
          <img className="cta5" src="assets/food-images/popularDishesShape1_1.png" alt="" />
          <img className="cta6" src="assets/food-images/ctaShape2_7.png" alt="" />
        </div> 
      </div>
      
    </section>
  );
};

export default CtaSection;
