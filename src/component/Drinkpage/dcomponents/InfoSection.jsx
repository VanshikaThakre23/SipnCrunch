import React from "react";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    <section className="info">
      <div className="info-container">
        <div className="info-box">
          <h3>FRESH FRUIT</h3>
          <p>
            Our juices are made with 100% fresh fruits, carefully selected to ensure
            the best taste and quality.
          </p>
        </div>

        <div className="info-box">
          <h3>100% ORGANIC</h3>
          <p>
            Our juices are made with 100% organic fruits, carefully selected to
            ensure the best taste and quality.
          </p>
        </div>

        <div className="info-box">
          <h3>ECO-FRIENDLY PACKAGING</h3>
          <p>
            Our packaging is 100% eco-friendly, helping protect the environment
            while delivering freshness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
