import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./PopularFood.css";

const foodItems = [
  { img: "assets/images/qb1.jpg", title: "Breads & Wraps" },
  { img: "assets/images/qb2.jpg", title: "Burger & Sandwiches" },
  { img: "assets/images/qb3.webp", title: "Cheese Balls" },
  { img: "assets/images/qb4.webp", title: "Protein Bites" },
  { img: "assets/images/qb5.jpg", title: "Mini Tacos" },
  { img: "assets/images/qb6.jpg", title: "French Fries" },
  { img: "assets/images/qb7.png", title: "Fruit Chaat" },
];

const PopularFood = () => {
  return (
    <div className="popularfood-wrapper">
      <h2>Delicious Quick Bites</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="popularfood-swiper"
      >
        {foodItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="food-card">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularFood;
