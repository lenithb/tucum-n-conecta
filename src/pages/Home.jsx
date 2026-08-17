import { Link } from "react-router-dom";

import HeroSlider from "../components/HeroSlider";
import contents from "../data/contents";
import Card from "../components/Card";

function Home() {
  const featuredContents = contents.slice(0, 3);

  return (
    <main className="home">
      <HeroSlider />

      <section className="home-intro">
        <div className="section-header">
          <span>Identidad tucumana</span>

          <h2>
            Cultura que vive,
            <br />
            cultura que conecta.
          </h2>

          <p>
            Tucumán Conecta es un espacio para descubrir y compartir un poquito
            de Tucumán.
          </p>
        </div>

        <Link to="/explore" className="hero-button">
          Explorar contenidos
        </Link>
      </section>

      <section className="home-featured">
        <div className="section-header">
          <span>Para empezar</span>

          <h2>Descubrí Tucumán</h2>

          <p>
            Conocé algunas de las historias, obras y expresiones culturales que
            forman parte de nuestra provincia.
          </p>
        </div>

        <div className="content-grid">
          {featuredContents.map((content) => (
            <Card key={content.id} content={content} />
          ))}
        </div>

        <div className="section-action">
          <Link to="/explore" className="explore-button">
            Ver todo el contenido
          </Link>
        </div>
      </section>

      <section className="home-categories">
        <div className="section-header">
          <span>Explorá por temática</span>

          <h2>Hay mucho por descubrir</h2>
        </div>

        <div className="home-category-links">
          <Link to="/explore?category=Música">Música</Link>

          <Link to="/explore?category=Cine">Cine y series</Link>

          <Link to="/explore?category=Arte digital">Arte digital</Link>

          <Link to="/explore?category=Videojuegos">Videojuegos</Link>

          <Link to="/explore?category=Literatura">Literatura</Link>

          <Link to="/explore?category=Cultura local">Cultura local</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
