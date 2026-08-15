import { Link } from "react-router-dom";

function Card({ content }) {
  return (
    <article className="card">
      <img className="card-image" src={content.image} alt={content.title} />

      <div className="card-content">
        <span className="card-category">{content.category}</span>

        <h2 className="card-title">{content.title}</h2>

        <p className="card-description">{content.description}</p>

        <div className="card-info">
          <span>{content.author}</span>
          <span>{content.year}</span>
        </div>

        <Link className="card-link" to={`/content/${content.id}`}>
          Ver contenido 🡲
        </Link>
      </div>
    </article>
  );
}

export default Card;
