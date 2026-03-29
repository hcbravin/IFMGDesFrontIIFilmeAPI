import Container from "./Container";

function Item({ searchTerm }) {
  return (
    <div>
      <h2>{searchTerm} Filmes</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
}

export default Item;