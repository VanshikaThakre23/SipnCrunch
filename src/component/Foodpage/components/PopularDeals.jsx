import React, { useEffect } from "react";
import gsap from "gsap";
import { ToastContainer } from "react-toastify";
import { showToast } from "../../../utils/toast";
import "react-toastify/dist/ReactToastify.css";
import { useOrders } from "../../../context/OrderContext";

import "./PopularDeals.css";


const popularDealsData = [
  {
    id: 1,
    img: "/assets/food-images/dishes2_1.png",
    name: "Chicken Pizza",
    price: "Rs.150",
    rating: 4,
  },
  {
    id: 2,
    img: "/assets/food-images/img4.png",
    name: "Fully Loaded Thali",
    price: "Rs.100",
    rating: 5,
  },
  {
    id: 3,
    img: "/assets/food-images/mg1_7.jpg",
    name: "Pizza Platter",
    price: "Rs.120",
    rating: 5,
  },
  {
    id: 4,
    img: "/assets/food-images/combo4.avif",
    name: "Burger Fries Combo",
    price: "Rs.180",
    rating: 3,
  },
  {
    id: 5,
    img: "/assets/food-images/dishes2_5.png",
    name: "Chinese Pasta",
    price: "Rs.90",
    rating: 4,
  },
];

const PopularDeals = () => {

  const { addToOrders } = useOrders();

   const handleOrder = (item) => {
      addToOrders(item);
      showToast(`${item.name} added to cart 🛒`, "success");
    };

useEffect(() => {
  const t1 = gsap.from(".popularshapeimgtop", {
    y: "+=25",
    repeat: -1,
    yoyo: true,
    duration: 4,
    ease: "power1.inOut"
  });

  const t2 = gsap.to(".shapeimgtop2", {
    x: "+=9",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  // cleanup on unmount to avoid memory leaks
  return () => {
    t1.kill();
    t2.kill();
  };
}, []); // ✅ Empty dependency array ensures GSAP runs only once



  return (
    <section id="popular-deals">
      <div className="popular-deals-container">
        <img
          className="popularshapeimgtop"
          src="/assets/food-images/popularDishesShape1_2.png"
          alt="Decorative Shape"
        />
        <div className="shape-wrapper">
          <img
            className="shapeimgtop2"
            src="/assets/images/chesse-pull.png"
            alt="Decorative Shape"
          />
        </div>

        <h2>Our Most Popular Deals</h2>

        <div className="popular-deals-card-wrapper">
          {popularDealsData.map((item) => (
            <div key={item.id} className="popular-deals-card">
              <img src={item.img} alt={item.name} />
              <div className="popular-deals-card-content">
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>
                <div className="star-container">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa fa-star ${i < item.rating ? "yellow" : "white"}`}
                    ></i>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="p-d-btn"
                 onClick={() => handleOrder(item)}
              >
                ORDER NOW
              </button>

            </div>
          ))}
        </div>
      </div>


      {/* Toast Container */}
      <ToastContainer />

    </section>
  );
};

export default PopularDeals;
