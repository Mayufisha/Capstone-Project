import React from "react";
import "./Testimonials.css";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";

const testimonials = [
  {
    id: 1,
    author: "Lisa Montgomery",
    description:
      "Little Lemon's Bruschetta is a symphony of flavors; perfectly crispy bread coupled with the freshest tomatoes.",
    image:
      "https://news.cornell.edu/sites/default/files/styles/breakout/public/2020-05/0521_abebegates.jpg?itok=OdW8otpB",
    rating: 5,
  },
  {
    id: 2,
    author: "Jhon McAlester",
    description:
      "The burger at Little Lemon was a taste revelation with its juicy, perfectly cooked meat and harmonious ingredient pairing.",
    image:
      "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
    rating: 5,
  },
  {
    id: 3,
    author: "Lidia Thompson",
    description:
      "The Greek Salad at Little Lemon was delightfully fresh and flavorful, with a high-quality dressing. ",
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials">
        <div className="testimonials-container">
          <h1 className="testimonial-title">Customer Feedback</h1>
        </div>

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <TestimonialCard
            
              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
