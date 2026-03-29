import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate
} from "react-router-dom";

import { MovieContextProvider } from "./context/MovieContext";
import Header from "./components/Header";
import Item from "./components/Item";
import NotFount from "./components/NotFount";
import Search from "./components/Search";

function SearchWrapper() {
  const { searchInput } = useParams();
  return <Search searchTerm={searchInput} />;
}

function HeaderWrapper() {
  const navigate = useNavigate();

  function handleSubmit(e, searchInput) {
    e.preventDefault();
    e.currentTarget.reset();
    navigate(`/search/${searchInput}`);
  }

  return <Header handleSubmit={handleSubmit} />;
}

function App() {
  return (
    <MovieContextProvider>
      <BrowserRouter>
        <div>
          <HeaderWrapper />

          <Routes>
            <Route path="/" element={<Navigate to="/acao" replace />} />

            <Route path="/acao" element={<Item searchTerm="Acao" />} />
            <Route path="/comedia" element={<Item searchTerm="Comedia" />} />
            <Route path="/animacao" element={<Item searchTerm="Animacao" />} />
            <Route path="/terror" element={<Item searchTerm="Terror" />} />

            <Route path="/search/:searchInput" element={<SearchWrapper />} />

            <Route path="*" element={<NotFount />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MovieContextProvider>
  );
}

export default App;