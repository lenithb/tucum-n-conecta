import { Link } from "react-router-dom";
import contents from "../data/contents";

// por ahora todos los enlaces llevan a /explore.
function Categories() {
  const categories = [...new Set(contents.map((content) => content.category))];

  return (
    <main className="categories">
      <section className="categories-header">
        <span>Explorar</span>

        <h1>Categorías</h1>

        <p>
          Descubrí diferentes expresiones culturales de Tucumán organizadas por
          categoría.
        </p>
      </section>

      <section className="category-grid">
        {categories.map((category) => {
          const categoryContents = contents.filter(
            (content) => content.category === category,
          );

          return (
            <article className="category-card" key={category}>
              <h2>{category}</h2>

              <p>
                {categoryContents.length}{" "}
                {categoryContents.length === 1
                  ? "contenido disponible"
                  : "contenidos disponibles"}
              </p>

              <Link to="/explore">Explorar contenidos →</Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Categories;
