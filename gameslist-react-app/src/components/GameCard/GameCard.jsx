import React, { useState } from "react";
import "./GameCard.css";
import { useNavigate } from "react-router";

const GameCard = ({ id, title, photoUrl, shortDescription, genre, developer }) => {
    const navigate = useNavigate();

    return (
    <div className="main-card-container">
      <div className="left-card-container">
        <img src={photoUrl} alt="game photo" />
      </div>

      <div className="right-card-container">
        <h1 className="game-title">{title}</h1>
        <span className="genre">{genre}</span> 
        <p className="short-description">{shortDescription}</p>
        <span className="developer">Developers: {developer}</span>  
        <button className="btn-learn-more" onClick={() => navigate(`/game/${id}`)}>Learn More</button>    
      </div>
    </div>
  );
};

export default GameCard;
