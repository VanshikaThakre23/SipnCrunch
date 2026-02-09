import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { ToastContainer } from "react-toastify";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import BeverageSection from "./component/BeverageSection";
import FoodSection from "./component/FoodSection";
import FoodAdvice from "./component/FoodAdvice";
import PopularFood from "./component/PopularFood";
import OfferSection from "./component/OfferSection";
import AboutSection from "./component/AboutSection";
import Footer from "./component/Footer";
import FoodPage from "./component/Foodpage/FoodPage";
import DrinkPage from "./component/Drinkpage/DrinkPage";
import MyOrders from "./component/MyOrders";
import MyWishlist from "./component/MyWishlist";
import Register from "./component/Auth/Register";
import Login from "./component/Auth/Login";
import Profile from "./component/Auth/Profile";
import Checkout from "./component/Checkout";
import { AppProviders } from "./context/AppProvider";

// admin page Routes


import "./App.css";




function App() {
  return (
    <AppProviders>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover={false}
          draggable={false}
          theme="colored"
          style={{ zIndex: 9999, marginTop: "70px" }}
        />

        <Navbar />
        <Routes>
          {/*  Home page ka Route */}
          <Route path="/" element={
            <>
              <Hero />
              <BeverageSection />
              <FoodSection />
              <FoodAdvice />
              <OfferSection />
              <AboutSection />
            </>
          }
          />

          <Route path="/about" element={<AboutSection />} />

          <Route path="/advice" element={<FoodAdvice />} />

          {/*  Food Page Route */}
          <Route path="/foodpage" element={<FoodPage />} />


          {/*  Food Page Route */}
          <Route path="/drinkpage" element={<DrinkPage />} />

          {/*  My Orders */}
          <Route path="/myorders" element={<MyOrders />} />

          <Route path="/wishlist" element={<MyWishlist />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>


        {/* Always visible Footer */}
        <Footer />
      </Router>
    </AppProviders>



  );
}

export default App;
