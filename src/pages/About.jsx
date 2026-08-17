function About() {
  return (
    <main className="about">
      <section className="about-header">
        <span>Sobre el proyecto</span>

        <h1>Tucumán Conecta</h1>

        <p>
          Una plataforma dedicada a descubrir y conectar con la cultura
          Tucumana.
        </p>
      </section>

      <section className="about-content">
        <article>
          <h2>¿Cuál es el objetivo?</h2>

          <p>
            Tucumán Conecta busca reunir en un solo lugar diferentes
            manifestaciones culturales de Tucumán, desde la música y el cine
            hasta la literatura, los videojuegos, el arte y el patrimonio local.
          </p>
        </article>

        <article>
          <h2>¿Qué entendemos por cultura digital?</h2>

          <p>
            La cultura digital comprende las nuevas formas en las que las
            personas crean, comparten y consumen contenidos culturales
            utilizando tecnologías digitales.
          </p>
        </article>

        <article>
          <h2>¿Quién desarrolló el proyecto?</h2>

          <p>
            Cultura Conectada fue desarrollado como un proyecto educativo para
            poner en práctica conceptos fundamentales de React y React Router.
          </p>
        </article>
      </section>
    </main>
  );
}

export default About;
