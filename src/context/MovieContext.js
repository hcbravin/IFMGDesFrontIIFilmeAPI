import { createContext, useState } from "react";
import { apiKey, searchMovieURL, movieDetailsURL } from "../api/Config";

const MovieContext = createContext();

export function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchMovies(query) {
    setLoading(true);
    setMovies([]);

    try {
      const url = `${searchMovieURL}?api_key=${apiKey}&language=pt-BR&query=${encodeURIComponent(query)}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getMovieDetails(movieId) {
    try {
      const url = `${movieDetailsURL}/${movieId}?api_key=${apiKey}&language=pt-BR&append_to_response=videos`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return (
    <MovieContext.Provider value={{ movies, loading, searchMovies, getMovieDetails }}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;