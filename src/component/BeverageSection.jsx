import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

gsap.registerPlugin(ScrollTrigger);
import "./BeverageSection.css"

const BeverageSection = () => {

    useEffect(()=>{

// Floating + rotation combo
const tl = gsap.timeline({ repeat: -1 });

tl.to("#orange", {
  rotation: 360,
  transformOrigin: "center center",
  duration: 10,
  ease: "linear",
  repeat: -1
});

tl.to("#orange", {
 
  duration: 10,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut"
});


    },[])

    return (
        <>
            <section className="beverages">
                <div className="bev-text">
                    <h1>Explore <img id="orange" src="assets/images/oranges.png" alt="" />ur Most Popular Juice & Resfreshing Drinks 
                    </h1>
                </div>
                <div className="bev-card-container">
                    <div className="bev-card">
                        <div className="bev-card-img">
                            <img src="./assets/images/shakes1.webp" alt="Strawberry Shake" />
                        </div>
                        <h2>Shakes</h2>
                          <Link to="/drinkpage">
                                      <button type="button">View More</button>
                                    </Link>
                    </div>

                    <div className="bev-card">
                        <div className="bev-card-img">
                            <img src="assets/images/smoothie2.webp" alt="Strawberry Shake" />
                        </div>
                        <h2>Smoothies</h2>
                          <Link to="/drinkpage">
              <button type="button">View More</button>
            </Link>
                    </div>

                    <div className="bev-card">
                        <div className="bev-card-img">
                            <img src="assets/images/juice2.png" alt="Strawberry Shake" className="juice-catalog" />
                        </div>
                        <h2>Fresh Juices</h2>
                          <Link to="/drinkpage">
              <button type="button">View More</button>
            </Link>
                    </div>

                    <div className="bev-card">
                        <div className="bev-card-img">
                            <img src="assets/images/colddrink2.png" alt="Strawberry Shake" />
                        </div>
                        <h2>Resfreshing Coolers</h2>
                          <Link to="/drinkpage">
              <button type="button">View More</button>
            </Link>
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default BeverageSection