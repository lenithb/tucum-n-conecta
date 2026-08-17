import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import contents from "../data/contents";
import Card from "../components/Card";

function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const categoryFromUrl = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "Todas",
  );

  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "Todas",
    ...new Set(contents.map((content) => content.category)),
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "Todas") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredContents = contents.filter((content) => {
    const matchesCategory =
      selectedCategory === "Todas" || content.category === selectedCategory;

    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      content.title.toLowerCase().includes(search) ||
      content.description.toLowerCase().includes(search) ||
      content.author.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  const discoverRandomContent = () => {
    if (filteredContents.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * filteredContents.length);

    const randomContent = filteredContents[randomIndex];

    navigate(`/content/${randomContent.id}`);
  };

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

      <section className="explore-tools">
        <div className="search-box">
          <label htmlFor="content-search">Buscar contenidos</label>

          <input
            id="content-search"
            type="text"
            placeholder="Buscar por título, autor o descripción..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="category-filter">
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
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="discover-section">
        <div className="discover-content">
          <div>
            <span className="discover-label">Descubrimiento</span>

            <h2>¿No sabés qué descubrir?</h2>

            <p>
              Dejá que Tucumán Conecta elija un contenido tucumano al azar para
              vos.
            </p>
          </div>

          <button
            className="discover-button"
            onClick={discoverRandomContent}
            disabled={filteredContents.length === 0}
          >
            Descubrí algo nuevo
          </button>
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

          <p>Probá con otro término de búsqueda o seleccioná otra categoría.</p>
        </section>
      )}
    </main>
  );
}

export default Explore;
