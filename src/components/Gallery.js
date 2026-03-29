import MovieCard from "./MovieCard";

function Gallery({ data }) {
  const results = data;

  return (
    <div>
      {results.length > 0 ? (
        <ul className="movies-grid">
          {results.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default Gallery;