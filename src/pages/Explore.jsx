import contents from "../data/contents";
import Card from "../components/Card";

function Explore() {
  return (
    <main className="explore">
      <section className="explore-header">
        <h1>Explorá la cultura tucumana</h1>

        <p>
          Descubrí películas, música, literatura, arte, videojuegos y diferentes
          expresiones culturales de Tucumán.
        </p>
      </section>

      <section className="content-grid">
        {contents.map((content) => (
          <Card key={content.id} content={content} />
        ))}
      </section>
    </main>
  );
}

export default Explore;
