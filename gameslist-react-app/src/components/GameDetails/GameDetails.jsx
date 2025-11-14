import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import "./GameDetails.css";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchGame() {
      const res = await fetch(`/freetogame/api/game?id=${id}`);
      const data = await res.json();
      setGame(data);
    }

    fetchGame();
  }, [id]);

  if (!game) return <p style={{ color: "#fff" }}>Loading...</p>;

  return (
    <div className="game-details-container">
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <img className="game-details-image" src={game.thumbnail} alt="game_image" />
      <button className="btn-goto-games" onClick={() => navigate("/games")}>Back to games</button>
    </div>
  );
};

export default GameDetails;
