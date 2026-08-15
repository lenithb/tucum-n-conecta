import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Explorar
        </NavLink>

        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Categorías
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Sobre el proyecto
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
