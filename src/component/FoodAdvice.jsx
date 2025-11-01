import { useState } from "react";
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
        "Arre bhai, thoda kha pi le! Dry fruits, doodh, aur protein wale khane le.";
      newImage1 = "assets/images/banana-smoothie.webp";
      newImage2 = "assets/images/panner-tikka.webp";
    } else if (activityLevel === "sedentary" && weight > 45 && weight <= 55) {
      newAdvice =
        "Perfect hai re! Bas balanced diet rakh, ekdum mast. Ek smoothie lele!";
      newImage1 = "assets/images/strawberrysmoothie.png";
      newImage2 = "assets/images/veg-chhese-sandwich.webp";
    } else if (activityLevel === "sedentary" && weight > 55) {
      newAdvice =
        "Zyada baith mat, thoda active ho! Junk food kam kar aur ek plate salad le.";
      newImage1 = "assets/images/Masala-Chaas.png";
      newImage2 = "assets/images/sprouts-salad.jpg";
    }

    // Active
    else if (activityLevel === "active" && weight <= 45) {
      newAdvice =
        "Tu active hai, par patla bhi! Thoda protein le, anda kha,paneer roti khayega kya?";
      newImage1 = "assets/images/pannerroti.webp";
      newImage2 = "assets/images/peanut-butter-shake.png";
    } else if (activityLevel === "active" && weight > 45 && weight <= 55) {
      newAdvice =
        "Ekdum fit hai boss! Lean meats, dry fruits, aur acha khana khata reh.";
      newImage1 = "assets/images/panner-bhurji.png";
      newImage2 = "assets/images/mango-lassi-.png";
    } else if (activityLevel === "active" && weight > 55) {
      newAdvice =
        "Bhai, mehnat toh karta hai par phir bhi mota ho raha hai! Roti kam, salad zyada kar.";
      newImage1 = "assets/images/Greek-Salad.jpg";
      newImage2 = "assets/images/detox-juice.jpg";
    }

    // Very Active
    else if (activityLevel === "very-active" && weight <= 45) {
      newAdvice =
        "Bhau tu ekdum tez hai, par jyada patla mat ho! Butter, ghee, aur healthy carbs le.";
      newImage1 = "assets/images/desi-ghee-paratha.webp";
      newImage2 = "assets/images/mango-lassi-.png";
    } else if (activityLevel === "very-active" && weight > 45 && weight <= 55) {
      newAdvice =
        "Ekdum zabardast fitness hai! Bas high-protein aur energy wale khane le.";
      newImage1 = "assets/images/chicken-curry1.jpg";
      newImage2 = "assets/images/peanut-butter-shake.png";
    } else if (activityLevel === "very-active" && weight > 55 && weight <= 90) {
      newAdvice =
        "Ye Tu bahut active hai, par phir bhi weight badh raha hai! Diet pe dhyan de, lean protein le.";
      newImage1 = "assets/images/leanprotein.png";
      newImage2 = "assets/images/mango-lassi-.png";
    }
    else if (activityLevel === "very-active" && weight > 90) {
      newAdvice =
        "Ooo MYYY Gwwwaad Ye bhi koi weight hai, Exercise kr bhai.";
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

  return (
    <section className="food-advice-section">
      <h2 data-aos="fade-up" data-aos-duration="1000">
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
