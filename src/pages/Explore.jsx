import { useState } from "react";
import contents from "../data/contents";
import Card from "../components/Card";

function Explore() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = [
    "Todas",
    ...new Set(contents.map((content) => content.category)),
  ];

  const filteredContents =
    selectedCategory === "Todas"
      ? contents
      : contents.filter((content) => content.category === selectedCategory); // filtrado de categorías

  return (
    <main className="explore">
      <section className="explore-header">
        <span>Contenido cultural</span>

        <h1>Explorá Tucumán</h1>

        <p>
          Descubrí películas, música, literatura, arte, videojuegos y diferentes
          expresiones culturales de nuestra provincia.
        </p>
      </section>

      <section className="category-filter">
        <div className="filter-header">
          <h2>Filtrar por categoría</h2>

          <span>{filteredContents.length} contenidos</span>
        </div>

        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => setSelectedCategory(category)} // renderiza el componente cuando el user pulsa.
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="content-grid">
        {filteredContents.map((content) => (
          <Card key={content.id} content={content} />
        ))}
      </section>

      {filteredContents.length === 0 && (
        <section className="empty-results">
          <h2>No encontramos contenidos</h2>

          <p>No hay contenidos disponibles para esta categoría.</p>
        </section>
      )}
    </main>
  );
}

export default Explore;
