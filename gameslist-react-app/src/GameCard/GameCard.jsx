import React, { useState } from "react";
import "./GameCard.css";

const GameCard = ({ title, photoUrl, shortDescription, genre, developer }) => {
    
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
      </div>
    </div>
  );
};

export default GameCard;
