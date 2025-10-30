// import { useState, useEffect } from "react";

// import { Link } from "react-router-dom";

// // import "./FoodSection.css";
// import "./BeverageSection.css";


// const FoodSection = () => {
//   return (
//     <>
//       <section className="food" data-aos="fade-up">
//         <div className="food-text">
//           <h2>Unleash Your Cravings with Our Menu</h2>
//         </div>
//         <div className="bev-card-container" data-aos-duration="3000">
//           <div className="bev-card">
//             <div className="bev-card-img">
//               <img src="assets/images/pizza1.webp" alt="Strawberry Shake" />
//             </div>
//             <h2>Pizzas</h2>
//             <a href="foodpage.html">
//               <button type="button">View More</button>
//             </a>
//           </div>
//           <div className="bev-card">
//             <div className="bev-card-img">
//               <img src="assets/images/noodle1.png" alt="Strawberry Shake" />
//             </div>
//             <h2>Chinese</h2>
//             <a href="foodpage.html">
//               <button type="button">View More</button>
//             </a>
//           </div>
//           <div className="bev-card">
//             <div className="bev-card-img">
//               <img src="assets/images/southindian1.webp" alt="Strawberry Shake" className="juice-catalog" />
//             </div>
//             <h2>South Indian Food</h2>
//             <a href="foodpage.html">
//               <button type="button">View More</button>
//             </a>
//           </div>
//           <div className="bev-card">
//             <div className="bev-card-img">
//               <img src="assets/food-images/img4.png" alt="Strawberry Shake" />
//             </div>
//             <h2>Full Veg Thali</h2>
//             <a href="foodpage.html">
//               <button type="button">View More</button>
//             </a>
//           </div>
//         </div>
//       </section>
//     </>

//   );
// };
// export default FoodSection;


import { useEffect } from "react"
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
   import AOS from 'aos';
    import 'aos/dist/aos.css';
import "./BeverageSection.css"; // or FoodSection.css if you have that

const FoodSection = () => {

    useEffect(()=>{
      
      gsap.from(" #foodburg", {
          rotation: -5,
          y: "+=40",
          repeat: -1,
          yoyo: true,
          duration: 5,
      
          ease: "sine.inOut",
      
      })
      
          },[])
      


  return (
    <>
     <img id="foodburg" data-aos-duration="3000" src="assets/images/burger.webp" alt=""></img>
      <section className="food" data-aos="fade-up">
       
        <div className="food-text">
          <h2>Unleash Your Cravings with Our Menu</h2>
        </div>

        <div className="bev-card-container" data-aos-duration="3000">
          {/* Pizza */}
          <div className="bev-card">
            <div className="bev-card-img">
              <img src="assets/images/pizza1.webp" alt="Pizza" />
            </div>
            <h2>Pizzas</h2>
            <Link to="/foodpage">
              <button type="button">View More</button>
            </Link>
          </div>

          {/* Chinese */}
          <div className="bev-card">
            <div className="bev-card-img">
              <img src="assets/images/noodle1.png" alt="Noodles" />
            </div>
            <h2>Chinese</h2>
            <Link to="/foodpage">
              <button type="button">View More</button>
            </Link>
          </div>

          {/* South Indian */}
          <div className="bev-card">
            <div className="bev-card-img">
              <img
                src="assets/images/southindian1.webp"
                alt="South Indian Food"
                className="juice-catalog"
              />
            </div>
            <h2>South Indian Food</h2>
            <Link to="/foodpage">
              <button type="button">View More</button>
            </Link>
          </div>

          {/* Full Veg Thali */}
          <div className="bev-card">
            <div className="bev-card-img">
              <img src="assets/food-images/img4.png" alt="Full Veg Thali" />
            </div>
            <h2>Full Veg Thali</h2>
            <Link to="/foodpage">
              <button type="button">View More</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoodSection;
