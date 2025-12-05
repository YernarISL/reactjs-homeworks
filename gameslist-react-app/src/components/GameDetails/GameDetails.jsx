import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemById, clearSelected } from "../../features/items/itemsSlice";
import "./GameDetails.css";

const GameDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { selectedItem: game, loadingItem, errorItem } = useSelector(
    (state) => state.items
  );

  useEffect(() => {
    dispatch(fetchItemById(id));
    return () => dispatch(clearSelected());
  }, [id, dispatch]);


  if (loadingItem)
    return <p style={{ color: "#fff" }}>Loading...</p>;

  if (errorItem)
    return <p style={{ color: "red" }}>Error: {errorItem}</p>;

  if (!game)
    return <p style={{ color: "#fff" }}>Game not found.</p>;

  return (
    <div className="game-details-container">
      <h1>{game.title}</h1>
      <p>{game.description}</p>

      <img
        className="game-details-image"
        src={game.thumbnail}
        alt="game_image"
      />

      <button
        className="btn-goto-games"
        onClick={() => navigate("/games")}
      >
        Back to games
      </button>
    </div>
  );
};

export default GameDetails;
