import React from "react";
import "./About.css";

import ImageRestaurant from "../../../assets/restaurant 1.jpeg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
        In the lively heart of Chicago, Little Lemon brings together modern charm and nostalgic warmth. 
        Our menu features a variety of delicious options, including savory bruschettas, juicy burgers, and crisp Greek salads. 
        Every dish is carefully prepared by talented chefs using fresh, locally-sourced ingredients to ensure a perfect balance of flavor and quality. 
        Whether you’re enjoying a romantic dinner, sharing a meal with family, or catching up with friends, Little Lemon offers a welcoming atmosphere and an unforgettable dining experience. 
        Visit us in Chicago to discover the joy of exceptional food.
        </p>
      </div>

      <img
        className="about-image-bruchetta"
        src={ImageRestaurant}
        alt="Restarurant food"
        height={200}
        width={200}
      />
    </div>
  );
};

export default About;
