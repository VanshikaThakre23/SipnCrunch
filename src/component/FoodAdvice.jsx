import { useState,useEffect } from "react";
import gsap from "gsap";
import 'aos/dist/aos.css';
import "./FoodAdvice.css";

const FoodAdvice = () => {
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [advice, setAdvice] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [showAdvice, setShowAdvice] = useState(false);
  const [showImages, setShowImages] = useState(false);
const getFoodAdvice = () => {
  if (!weight || !activityLevel) {
    alert("Please enter your weight and select an activity level!");
    return;
  }

  let newAdvice = "";
  let newImage1 = "";
  let newImage2 = "";

  // Sedentary
  if (activityLevel === "sedentary" && weight <= 45) {
    newAdvice =
      "Weight kam hai. Thoda serious ho ja — doodh, paneer, aur protein wale khane include kar.YOU CAN TRY THESE OPTION";
    newImage1 = "assets/images/banana-smoothie.webp";
    newImage2 = "assets/images/panner-tikka.webp";
  } else if (activityLevel === "sedentary" && weight > 45 && weight <= 55) {
    newAdvice =
      "Weight sahi track par hai. Balanced diet maintain kar aur processed food se door reh.YOU CAN TRY THESE OPTION";
    newImage1 = "assets/images/strawberrysmoothie.png";
    newImage2 = "assets/images/veg-chhese-sandwich.webp";
  } else if (activityLevel === "sedentary" && weight > 55) {
    newAdvice =
      "Zyada baithne se metabolism slow hota hai. Walk kar aur green salad add kar diet me.YOU CAN TRY THESE OPTION";
    newImage1 = "assets/images/Masala-Chaas.png";
    newImage2 = "assets/images/sprouts-salad.jpg";
  }

  // Active
  else if (activityLevel === "active" && weight <= 45) {
    newAdvice =
      "Activity acchi hai, par nutrition weak. Protein aur complex carbs pe focus kar.YOU CAN TRY THESE OPTION";
    newImage1 = "assets/images/pannerroti.webp";
    newImage2 = "assets/images/peanut-butter-shake.png";
  } else if (activityLevel === "active" && weight > 45 && weight <= 55) {
    newAdvice =
      "Good balance. Energy aur strength dono barabar hain. Maintain kar, consistency zaroori hai.YOU CAN TRY THESE OPTION";
    newImage1 = "assets/images/panner-bhurji.png";
    newImage2 = "assets/images/mango-lassi-.png";
  } else if (activityLevel === "active" && weight > 55) {
    newAdvice =
      "Workout theek hai, lekin portion control kar. Fiber aur hydration pe dhyan de.YOU CAN TRY THESE OPTION";
    newImage1 = "assets/images/Greek-Salad.jpg";
    newImage2 = "assets/images/detox-juice.jpg";
  }

  // Very Active
  else if (activityLevel === "very-active" && weight <= 45) {
    newAdvice =
      "High activity ke saath energy loss zyada hota hai. Healthy fats aur carbs include kar.YOU CAN TRY THESE OPTION";
    newImage1 = "assets/images/desi-ghee-paratha.webp";
    newImage2 = "assets/images/mango-lassi-.png";
  } else if (activityLevel === "very-active" && weight > 45 && weight <= 55) {
    newAdvice =
      "Excellent energy level. Protein intake aur hydration dono barabar rakho.YOU CAN TRY THESE OPTION";
    newImage1 = "assets/images/chicken-curry1.jpg";
    newImage2 = "assets/images/peanut-butter-shake.png";
  } else if (activityLevel === "very-active" && weight > 55 && weight <= 90) {
    newAdvice =
      "Workout accha hai, par food quality check kar. Processed aur oily cheeze kam kar.YOU CAN TRY THESE OPTION";
    newImage1 = "assets/images/leanprotein.png";
    newImage2 = "assets/images/mango-lassi-.png";
  } else if (activityLevel === "very-active" && weight > 90) {
    newAdvice =
      "Overweight with high activity? Diet aur rest cycle dono monitor kar. Smart efforts kar.YOU CAN TRY THESE OPTION";
    newImage1 = "assets/images/runner.webp";
    newImage2 = "assets/images/weightloss.jpg";
  }


    // Update state
    setAdvice(newAdvice);
    setImage1(newImage1);
    setImage2(newImage2);
    setShowAdvice(true);

    // Smooth image fade-in
    setShowImages(false);
    setTimeout(() => setShowImages(true), 300);
  };

  const closeAdvice = () => {
    setShowAdvice(false);
    setShowImages(false);
    setWeight("");
    setActivityLevel("");
  };

  useEffect(() => {
    
  gsap.to("#bestFoodItemsShape", {
  rotation: -5,
  y: 40,
  repeat: -1,
  yoyo: true,
  duration: 5,
  ease: "sine.inOut",
});

  }, [])
  

  return (
    <section className="food-advice-section">
      <img id="bestFoodItemsShape"src="assets/images/bestFoodItemsShape1_1.png" alt="bestFoodItemsShape" />

 
<img id="chefImg"src="assets/food-images/chefImg.png" alt="chefImg" />
      <h2 >
        Get Your Personalized Food & Drink Advice 
      </h2>
      <div className="container">
        <p data-aos="fade-up" data-aos-delay="300">
          Enter your weight and select your activity level to receive the best
          food & drink suggestions for you.
        </p>

        <div className="input-group">
          <label htmlFor="weightInput">Your Weight (kg):</label>
          <input
            type="number"
            id="weightInput"
            placeholder="Enter weight (kg)"
            className="input-animate"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="activityLevel">Activity Level:</label>
          <select
            id="activityLevel"
            className="select-animate"
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary (Low Activity)</option>
            <option value="active">Active (Moderate Activity)</option>
            <option value="very-active">Very Active (High Activity)</option>
          </select>
        </div>

        <button onClick={getFoodAdvice} className="btn-animate">
          Get Recommendation
        </button>

        {showAdvice && (
          <div className="advice-box show">
            <span className="close-btn" onClick={closeAdvice}>
              &times;
            </span>
            <div id="adviceText">{advice}</div>
          </div>
        )}

        {/* {showAdvice && (
          <div className={`image-container ${showImages ? "show" : "hidden"}`}>
            <img src={image1} alt="Food Suggestion" />
            <img src={image2} alt="Food Suggestion" />
          </div>
        )} */}

{showAdvice && (
  <div className={`image-container ${showImages ? "show" : "hidden"}`}>
    <img id="adviceImage1" src={image1} alt="Food Suggestion 1" />
    <img id="adviceImage2" src={image2} alt="Food Suggestion 2" />
  </div>
)}


      </div>
    </section>
  );
};

export default FoodAdvice;
