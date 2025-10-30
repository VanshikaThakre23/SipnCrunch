import { useEffect } from "react";
import gsap from "gsap";
import "./AboutSection.css";

const AboutSection = () => {
  useEffect(() => {
    gsap.to(".about-right-2", {
      rotation: 20,
      repeat: -1,
      yoyo: true,
      duration: 5,
    });
    gsap.to(".about-left-2", {
      rotation: 20,
      repeat: -1,
      yoyo: true,
      duration: 5,
    });
    gsap.to(".about-left-3", {
      x: "-20",
      repeat: -1,
      yoyo: true,
      duration: 3,
    });
    gsap.to(".about-right-3", {
      x: "-16",
      repeat: -1,
      yoyo: true,
      duration: 5,
    });
  }, []);

  return (
    <section id="about" className="aboutSection">
      <div className="aboutcontainer">
        <div className="about-left">
          <img className="about-left-1" src="assets/images/aboutShape1_1.png" alt="" />
          <img className="about-left-2" src="assets/images/aboutShape1_2.png" alt="" />
          <img className="about-left-3" src="assets/images/aboutShape1_5.png" alt="" />
        </div>

        <div className="about-center">
          <h2>ABOUT US</h2>
          <p>
            Experience a delightful fusion of authentic Indian flavors with our refreshing beverages and
            delicious snacks. At Sip & Crunch, we bring you the perfect blend of taste and quality in every sip
            and bite!
          </p>
          <p>
            Every dish is not just prepared — it's crafted with utmost precision and a deep
            understanding of flavor harmony.
          </p>
          <button className="aboutbtn" type="submit">
            RATE US
          </button>
        </div>

        <div className="about-right">
          <img className="about-right-1" src="assets/images/aboutShape1_3.png" alt="" />
          <img className="about-right-2" src="assets/images/aboutShape1_4.png" alt="" />
          <img className="about-right-3" src="assets/images/aboutShape1_5.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
