import React, { useState } from 'react';
import './FoodAdvice.css'; 

const FoodAdvice = () => {
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('');
  const [advice, setAdvice] = useState('');
  const [showAdvice, setShowAdvice] = useState(false);
  const [images, setImages] = useState([]);

  const getFoodAdvice = () => {
    if (!weight || !activity) {
      alert('Please fill all fields.');
      return;
    }

    // Example simple logic (you can replace this with real data)
    let adviceText = '';
    let adviceImages = [];

    if (activity === 'sedentary') {
      adviceText = `Since you're sedentary, try light foods like salads and smoothies.`;
      adviceImages = ['salad.jpg', 'smoothie.jpg'];
    } else if (activity === 'active') {
      adviceText = `For an active lifestyle, go for a balanced diet with carbs and proteins.`;
      adviceImages = ['chicken-bowl.jpg', 'rice-plate.jpg'];
    } else {
      adviceText = `Highly active? Load up with protein shakes and energy bars!`;
      adviceImages = ['protein-shake.jpg', 'energy-bar.jpg'];
    }

    setAdvice(adviceText);
    setImages(adviceImages);
    setShowAdvice(true);
  };

  const closeAdvice = () => {
    setShowAdvice(false);
    setAdvice('');
    setImages([]);
  };

  return (
    <section className="food-advice-section">
      <h2 data-aos="fade-up" data-aos-duration="1000">
        Get Your Personalized Food & Drink Advice
      </h2>
      <div className="container">
        <p data-aos="fade-up" data-aos-delay="300">
          Enter your weight and select your activity level to receive the best food & drink suggestions for you.
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
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="activityLevel">Activity Level:</label>
          <select
            id="activityLevel"
            className="select-animate"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
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
          <>
            <div id="adviceResult" className="advice-box">
              <span className="close-btn" onClick={closeAdvice}>
                &times;
              </span>
              <div id="adviceText">{advice}</div>
            </div>
            <div id="imageContainer" className="image-container">
              {images.map((src, index) => (
                <img key={index} src={src} alt="Food Suggestion" />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FoodAdvice;
