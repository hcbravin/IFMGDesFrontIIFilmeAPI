import Loader from "./Loader";
import { useEffect, useContext } from "react";
import MovieContext from "../context/MovieContext";
import Gallery from "./Gallery";

function Container({ searchTerm }) {
  const { movies, loading, searchMovies } = useContext(MovieContext);

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="movie-container">
      {loading ? <Loader /> : <Gallery data={movies} />}
    </div>
  );
}

export default Container;