import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Cultura Conectada
          </Link>

          <p>Un espacio para descubrir y conectar con la cultura tucumana.</p>
        </div>

        <div className="footer-links">
          <h3>Navegación</h3>

          <Link to="/">Inicio</Link>
          <Link to="/explore">Explorar</Link>
          <Link to="/categories">Categorías</Link>
          <Link to="/about">Sobre el proyecto</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Cultura Conectada</p>

        <p>Proyecto educativo desarrollado con React</p>
      </div>
    </footer>
  );
}

export default Footer;
