import { Link, useParams } from "react-router-dom";
import contents from "../data/contents";

function Content() {
  const { id } = useParams();

  const content = contents.find((item) => item.id === Number(id));

  if (!content) {
    return (
      <main className="content-not-found">
        <h1>Contenido no encontrado</h1>

        <p>El contenido que estás buscando no existe.</p>

        <Link to="/explore">Volver a explorar</Link>
      </main>
    );
  }

  return (
    <main className="content-detail">
      <Link to="/explore" className="back-link">
        ← Volver a explorar
      </Link>

      <article className="content-detail-card">
        <img
          src={content.image}
          alt={content.title}
          className="content-detail-image"
        />

        <div className="content-detail-info">
          <span className="content-category">{content.category}</span>

          <h1>{content.title}</h1>

          <p className="content-description">{content.description}</p>

          <div className="content-meta">
            <div>
              <span>Autor</span>
              <strong>{content.author}</strong>
            </div>

            <div>
              <span>Año</span>
              <strong>{content.year}</strong>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Content;
