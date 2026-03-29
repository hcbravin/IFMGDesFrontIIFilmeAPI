import Navigation from "./Navigation";
import Form from "./Form";

function Header({ handleSubmit }) {
  return (
    <header>
      <h1 className="monoton-regular">Buscar Filme</h1>
      <Form handleSubmit={handleSubmit} />
      <Navigation />
    </header>
  );
}

export default Header;