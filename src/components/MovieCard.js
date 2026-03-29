import { useContext, useState } from "react";
import MovieContext from "../context/MovieContext";
import { imageBaseURL } from "../api/Config";

function MovieCard({ movie }) {
  const { getMovieDetails } = useContext(MovieContext);
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState(null);

  const { id, title, poster_path, vote_average } = movie;

  const url = poster_path
    ? `${imageBaseURL}${poster_path}`
    : "https://via.placeholder.com/300x450?text=Sem+Imagem";

  async function handleOpenModal() {
    const movieDetails = await getMovieDetails(id);
    setDetails(movieDetails);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setDetails(null);
  }

  return (
    <>
      <li className="movie-card" onClick={handleOpenModal}>
        <img src={url} alt={title} />
        <p>{title}</p>
        <span>⭐ {vote_average ? vote_average.toFixed(1) : "N/A"}</span>
      </li>

      {showModal && details && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              X
            </button>
            <h2>{details.title}</h2>
            <p><strong>Descrição:</strong> {details.overview || "Sem descrição."}</p>
            <p><strong>Nota:</strong> ⭐ {details.vote_average ? details.vote_average.toFixed(1) : "N/A"}</p>
            <p><strong>Data de lançamento:</strong> {details.release_date || "Não informada"}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieCard;