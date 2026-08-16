import { NavLink } from "react-router-dom";

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-logo">
          Cultura Conectada
        </NavLink>

        <nav className="navbar-links">
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
            Sobre
          </NavLink>
        </nav>

        <button
          className="theme-toggle"
          onClick={toggleDarkMode}
          aria-label="Cambiar tema"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
