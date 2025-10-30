import React from "react";
import "./Dr-OfferSection.css";

const DrOfferSection = () => {
  return (
    <>
      <div className="dr-offerSection">
        <div className="dr-offercontainer2">
          <div className="dr-offer-card dr-offer-card1">
            <div className="dr-offer-card-content2">
              <h6>Get 20% OFF ON</h6>
              <h3>FRESH FRUIT JUICES</h3>
              <button className="dr-offer1-card-btn dr-offer-btn" type="button">
                Order Now
              </button>
            </div>
          </div>

          <div className="dr-offer-card dr-offer-card2">
            <div className="dr-offer-card-content2">
              <h6>10% OFF ON</h6>
              <h3>SUMMER COCKTAILS</h3>
              <button className="dr-offer2-card-btn dr-offer-btn" type="button">
                Order Now
              </button>
            </div>
          </div>

          <div className="dr-offer-card dr-offer-card3">
            <div className="dr-offer-card-content2">
              <h6>30% OFF ON</h6>
              <h3>MILK SHAKES</h3>
              <button className="dr-offer3-card-btn dr-offer-btn" type="button">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrOfferSection;
