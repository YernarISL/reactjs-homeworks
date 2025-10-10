import React, { useState } from "react";
import GameCard from "../GameCard/GameCard";
import "./GameList.css"

const GameList = () => {
  const [games, setGames] = useState([]);

  async function generateGame() {
    let games = await fetch(`/freetogame/api/games`);
    let data = await games.json();
    console.log(data);

    setGames(data);
  }

  return (
    <div className="main-container">
      <h1 className="main-header">Click to generate list of cards</h1>
      <button className="main-button" onClick={generateGame}>Generate</button>
      {games ? (
        <ul>
          {games.map((game) => (
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
