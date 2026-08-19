import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/hero/tafi.webp",
    title: "Tucumán tiene una millonada de cosas.",
    description:
      "Descubrí las historias, expresiones y lugares que forman parte de nuestra identidad.",
  },
  {
    id: 2,
    image: "/hero/perro.webp",
    title: "Historias de nuestra provincia",
    description:
      "Personas, mitos, tradiciones y expresiones culturales que mantienen viva la identidad tucumana.",
  },
  {
    id: 3,
    image: "/hero/poncho.webp",
    title: "Una provincia para descubrir",
    description:
      "Explorá el arte, la música, el cine, la literatura y mucho más.",
  },
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((current) =>
        current === slides.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1,
    );
  };

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <article
          key={slide.id}
          className={
            index === currentSlide ? "hero-slide active" : "hero-slide"
          }
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="hero-slide-image"
          />

          <div className="hero-slide-overlay"></div>

          <div className="hero-slide-content">
            <span className="hero-slide-label">Tucumán Conecta</span>

            <h1>{slide.title}</h1>

            <p>{slide.description}</p>
          </div>
        </article>
      ))}

      <button
        className="slider-button slider-button-prev"
        onClick={previousSlide}
        aria-label="Imagen anterior"
      >
        ‹
      </button>

      <button
        className="slider-button slider-button-next"
        onClick={nextSlide}
        aria-label="Imagen siguiente"
      >
        ›
      </button>

      <div className="slider-indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={
              index === currentSlide
                ? "slider-indicator active"
                : "slider-indicator"
            }
            onClick={() => goToSlide(index)}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
