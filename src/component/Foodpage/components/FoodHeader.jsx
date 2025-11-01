import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import gsap from "gsap"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./FoodHeader.css";

const FoodHeader = () => {
  useEffect(() => {
    // Floating shapes animations
    gsap.from(".shapeimg", { x: "50", repeat: -1, yoyo: true, duration: 5});
    gsap.from(".mainshape1", { y: "+=40", repeat: -1, yoyo: true, duration: 4 });
    gsap.from(".mainshape2", { rotation: 90, y: "+=30", repeat: -1, yoyo: true, duration: 7 });
    gsap.from(".mainshape3", { rotation: 20, repeat: -1, yoyo: true, duration: 5 });
    gsap.from(".mainshape4", { x: "20", y: "+=30", rotation: -10, repeat: -1, yoyo: true, duration: 7 });
     gsap.from(".mainshape5", { x: "20", y: "=-10", rotation: -10, repeat: -1, yoyo: true, duration: 7 });

    // Add hover motion after Swiper renders slides
    const enableHoverMotion = () => {
      const images = document.querySelectorAll(".hover-img");
      images.forEach((img) => {
        const handleMove = (e) => {
          const { width, height } = img.getBoundingClientRect();
          const x = (e.offsetX / width - 0.5) * 80;
          const y = (e.offsetY / height - 0.5) * 80;
          gsap.to(img, { x, y, duration: 0.3, ease: "power2.out" });
        };
        const handleLeave = () => {
          gsap.to(img, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
        };

        img.addEventListener("mousemove", handleMove);
        img.addEventListener("mouseleave", handleLeave);

        // Clean up
        img.cleanupFns = () => {
          img.removeEventListener("mousemove", handleMove);
          img.removeEventListener("mouseleave", handleLeave);
        };
      });
    };

    // Delay for Swiper render
    const timer = setTimeout(enableHoverMotion, 1000);

    return () => {
      clearTimeout(timer);
      document.querySelectorAll(".hover-img").forEach((img) => {
        if (img.cleanupFns) img.cleanupFns();
      });
    };
  }, []);

  return (
    <header className="header">
      <div className="container1">
        <img className="bgimg" src="/assets/food-images/mainbg.jpg" alt="Background" />
        <img className="shapeimg" src="/assets/food-images/mainshapes1_1.png" alt="Decorative Shape" />

        <Swiper
          className="mySwiper"
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: false }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={800}
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="text-content">
                <h2>WELCOME TO SIPNCRUNCH</h2>
                <h3>SPICY FRIED CHICKEN</h3>
                <button type="submit" className="swiper-text-btn">Order Now</button>
              </div>
              <img className="hover-img" src="/assets/food-images/bannerThumb2_1.png" alt="Spicy Fried Chicken" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="text-content">
                <h2>WELCOME TO SIPNCRUNCH</h2>
                <h3>Veg Thali Loaded</h3>
                <button type="submit" className="swiper-text-btn">Order Now</button>
              </div>
              {/* <img className="hover-img" src="/assets/food-images/bannerThumb2_2.png" alt="Spicy Fried Noodles" /> */}
              <img className="hover-img" src="/assets/food-images/vegloaded.png" alt="Spicy Fried Noodles" />
              
              
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="text-content">
                <h2>WELCOME TO SIPNCRUNCH</h2>
                <h3>SPICY FRIED PASTA</h3>
                <button type="submit" className="swiper-text-btn">Order Now</button>
              </div>
              <img className="hover-img" src="/assets/food-images/bannerThumb2_3.png" alt="Spicy Fried Pasta" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Decorative floating shapes */}
      <img className="mainshape1" src="/assets/food-images/chilli.png" alt="Chilli" />
      <img className="mainshape2" src="/assets/food-images/ONIONSLICE.avif" alt="Onion Slice" />
      <img className="mainshape3" src="/assets/food-images/mainshapes1_2.png" alt="Shape 2" />
      {/* <img className="mainshape4" src="/assets/food-images/coconutleaf.png" alt="Leaf" /> */}
      <img className="mainshape5" src="/assets/food-images/mainshapes1_4.png" alt="Shape 3" />
    </header>
  );
};

export default FoodHeader;
