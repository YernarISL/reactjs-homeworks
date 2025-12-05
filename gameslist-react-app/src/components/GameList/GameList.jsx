import React from "react";
import GameCard from "../GameCard/GameCard";
import "./GameList.css";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems, setQuery } from "../../features/items/itemsSlice";
import { useEffect } from "react";

const GameList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { filteredList, loadingList, errorList, query } = useSelector(
    (state) => state.items
  );

  useEffect(() => {
    dispatch(fetchItems(query));
  }, [query, dispatch]);

  const handleChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const clearSearch = () => {
    dispatch(setQuery(""));
  };

  return (
    <div className="main-container">
      <img
        className="game-background-image"
        src="https://images.wallpapersden.com/image/download/dark-souls-cool-gaming_bWdtZmWUmZqaraWkpJRobWllrWdma2U.jpg"
        alt="game background"
      />

      <h1 className="main-header">Search Games</h1>

      <div className="main-functions-container">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={query}
            onChange={handleChange}
          />

          <button className="clear-button" onClick={clearSearch}>
            Clear
          </button>
        </div>

        <button className="back-to-home" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>

      {loadingList && <p>Loading...</p>}

      {errorList && <p style={{ color: "red" }}>Error: {errorList}</p>}

      {!loadingList && filteredList.length > 0 && (
        <ul>
          {filteredList.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              shortDescription={game.short_description}
              developer={game.developer}
              photoUrl={game.thumbnail}
              genre={game.genre}
              status={game.status}
            />
          ))}
        </ul>
      )}

      {!loadingList && filteredList.length === 0 && <p className="empty-list-condition">No games found.</p>}
    </div>
  );
};

export default GameList;
