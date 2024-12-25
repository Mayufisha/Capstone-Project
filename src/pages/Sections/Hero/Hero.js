import React from "react";
import "./Hero.css";
import Button from "../../../components/Button/Button";
import Image from "../../../assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const Hero = () => {
  const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(pages.get("reservations").path);
  }

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>
          At Little Lemon, we bring together the rich flavors of the Mediterranean with a fresh, modern twist. Founded by brothers Mario and Adrian, who moved from Italy to pursue their dream, our restaurant blends traditional family recipes with creative new dishes inspired by Italian, Greek, and Turkish cuisine.
Mario’s culinary skills, honed in Italy, and Adrian’s vision for expanding the menu make each dish unique, from classic bruschetta to bold, modern Mediterranean bowls. In our warm, rustic space, we invite you to relax, enjoy, and feel like part of the family.
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <img
        className="image"
        src={Image}
        alt="Restarurant food"
        height={200}
        width={200}
      />
      </div>
    </div>
  );
};

export default Hero;
