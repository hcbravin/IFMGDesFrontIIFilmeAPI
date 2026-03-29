import Container from "./Container";

function Search({ searchTerm }) {
  return (
    <div>
      <h2>Estou procurando por {searchTerm}</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
}

export default Search;