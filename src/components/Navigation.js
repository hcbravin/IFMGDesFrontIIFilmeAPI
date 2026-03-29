import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/acao">Ação</NavLink></li>
        <li><NavLink to="/comedia">Comédia</NavLink></li>
        <li><NavLink to="/animacao">Animação</NavLink></li>
        <li><NavLink to="/terror">Terror</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;