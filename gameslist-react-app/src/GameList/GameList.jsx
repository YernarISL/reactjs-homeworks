import React, { useState } from "react";
import GameCard from "../GameCard/GameCard";
import "./GameList.css";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [searchGame, setSearchGame] = useState("");
  const [heading, setHeading] = useState("Click to generate list of cards");

  const handleChange = (e) => {
    setSearchGame(e.target.value);
  };

  const clearSearch = () => {
    setSearchGame("");
  };

  const filteredGames = games.filter((card) =>
    card.title.toLowerCase().includes(searchGame.toLowerCase())
  );
  
  async function generateGame() {
    let games = await fetch(`/freetogame/api/games`);
    let data = await games.json();
    console.log(data);

    setGames(data);
  }

  return (
    <div className="main-container">
      <h1 className="main-header">{heading}</h1>
      <div className="main-functions-container">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={searchGame}
            onChange={handleChange}
          />
          <button className="search-button">Search</button>
          <button className="clear-button" onClick={clearSearch}>
            Clear
          </button>
        </div>
        <button className="main-button" onClick={generateGame}>
          Generate
        </button>
      </div>

      {filteredGames ? (
        <ul>
          {filteredGames.map((game) => (
            <GameCard
              title={game.title}
              shortDescription={game.short_description}
              developer={game.developer}
              photoUrl={game.thumbnail}
              genre={game.genre}
              status={game.status}
              key={game.id}
            />
          ))}
        </ul>
      ) : (
        <p>None</p>
      )}
    </div>
  );
};

export default GameList;
