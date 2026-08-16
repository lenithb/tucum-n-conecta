import { Link } from "react-router-dom";

function Home() {
  const categories = [
    {
      name: "Música",
      description: "Descubrí artistas y sonidos nacidos en Tucumán.",
    },
    {
      name: "Cine y series",
      description: "Conocé producciones audiovisuales tucumanas.",
    },
    {
      name: "Arte digital",
      description: "Explorá artistas y expresiones visuales.",
    },
    {
      name: "Videojuegos",
      description: "Descubrí proyectos y desarrolladores de Tucumán.",
    },
    {
      name: "Literatura",
      description: "Conocé escritores y obras vinculadas a la provincia.",
    },
    {
      name: "Cultura local",
      description: "Explorá lugares, tradiciones y patrimonio tucumano.",
    },
  ];

  return (
    <main className="home">
      <section className="hero">
        <span className="hero-label">Cultura de Tucumán</span>

        <h1>Cultura Conectada</h1>

        <p>
          Un espacio para descubrir las expresiones culturales, artistas, obras,
          lugares y proyectos que forman parte de la identidad tucumana.
        </p>

        <Link to="/explore" className="hero-button">
          Comenzar a explorar
        </Link>
      </section>

      <section className="featured-categories">
        <div className="section-header">
          <span>Categorías</span>

          <h2>Descubrí la cultura tucumana</h2>

          <p>
            Explorá diferentes formas de expresión cultural presentes en nuestra
            provincia.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.name}>
              <h3>{category.name}</h3>

              <p>{category.description}</p>

              <Link to="/categories">Ver categoría →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="home-explore">
        <h2>¿Querés descubrir algo nuevo?</h2>

        <p>
          Explorá nuestra colección de contenidos culturales relacionados con
          Tucumán.
        </p>

        <Link to="/explore" className="explore-button">
          Explorar contenidos
        </Link>
      </section>
    </main>
  );
}

export default Home;
