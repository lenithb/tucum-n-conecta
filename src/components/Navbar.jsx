import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Tucumán Conecta
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "navbar-links mobile-open" : "navbar-links"}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            Inicio
          </NavLink>

          <NavLink to="/explore" className="nav-link" onClick={closeMenu}>
            Explorar
          </NavLink>

          <NavLink to="/categories" className="nav-link" onClick={closeMenu}>
            Categorías
          </NavLink>

          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            Sobre
          </NavLink>

          <button
            className="theme-toggle mobile-theme"
            onClick={toggleDarkMode}
            aria-label="Cambiar tema"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>

        <button
          className="theme-toggle desktop-theme"
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
