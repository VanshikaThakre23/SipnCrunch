import React from "react";
import "./InstaRow.css";

const InstaRow = () => {
  const images = [
    "assets/drink-images/home-instagram-1.webp",
    "assets/drink-images/home-instagram-2.webp",
    "assets/drink-images/home-instagram-3.webp",
    "assets/drink-images/home-instagram-4.webp",
     "assets/drink-images/home-instagram-5.webp",
      "assets/drink-images/home-instagram-6.webp",
  ];

  return (
    <section className="instagallery">
      {images.map((img, index) => (
        <div className="singleinstaimg" key={index}>
          <div className="instahoverimg">
            <img src={img} alt={`Instagram ${index + 1}`} />
            <div className="insta-icon">
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InstaRow;
