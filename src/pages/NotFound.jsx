import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>

      <p>La página que estás buscando no existe.</p>

      <Link to="/">Volver al inicio</Link>
    </main>
  );
}

export default NotFound;
