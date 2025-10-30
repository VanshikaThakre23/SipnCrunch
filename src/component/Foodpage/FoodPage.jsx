import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FoodHeader from "./components/FoodHeader";
import OfferSection from "../OfferSection";
import PopularDeals from "./components/PopularDeals";
import CtaSection from "./components/CtaSection";
import FoodMenuDeals from "./components/FoodMenuDeals";
import MenuGridSection from "./components/MenuGridSection";
import CtaSection2 from "./components/CtaSection2";
import "./FoodPage.css";

const FoodPage = () => {
  return (
    <>
  
      <FoodHeader />
      <OfferSection />
      <PopularDeals />
      <CtaSection />
      <FoodMenuDeals />
      <MenuGridSection />
      <CtaSection2 />
      
    </>
  );
};

export default FoodPage;
