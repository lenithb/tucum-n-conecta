const contents = [
  // cine y series

  {
    id: 1,
    title: "Tafí Viejo: Verdor sin tiempo",
    category: "Cine y series",
    description:
      "Miniserie tucumana que cuenta la historia de Ana, una joven que llega a Tafí Viejo y se encuentra con una historia marcada por los vínculos familiares, el paisaje, la citricultura y el pasado ferroviario de la ciudad.",
    author: "Eduardo Pinto",
    image: "/images/tafi-viejo-verdor-sin-tiempo.jpg",
    year: 2026,
  },

  {
    id: 2,
    title: "Sobre los Rieles de la Historia",
    category: "Cine y series",
    description:
      "Documental dedicado a recuperar la memoria y la importancia del ferrocarril en Tafí Viejo, una actividad que tuvo un papel fundamental en el desarrollo de la ciudad.",
    author: "Producción audiovisual tucumana",
    image: "/images/sobre-los-rieles-de-la-historia.jpg",
    year: 2020,
  },

  {
    id: 3,
    title: "El camino hacia la muerte del viejo Reales",
    category: "Cine y series",
    description:
      "Película dirigida por Gerardo Vallejo, una obra fundamental del cine social argentino y una de las producciones más representativas del cine tucumano.",
    author: "Gerardo Vallejo",
    image: "/images/camino-hacia-la-muerte-del-viejo-reales.jpg",
    year: 1974,
  },

  {
    id: 4,
    title: "Festival Tucumán Cine Gerardo Vallejo",
    category: "Cine y series",
    description:
      "Uno de los principales espacios audiovisuales de la provincia, con competencias, muestras, producciones del NOA, cortometrajes, talleres y encuentros entre realizadores.",
    author: "Ente Cultural de Tucumán",
    image: "/images/festival-tucuman-cine.jpg",
    year: 2026,
  },

  // música

  {
    id: 5,
    title: "Mercedes Sosa",
    category: "Música",
    description:
      "La cantora tucumana que se convirtió en una de las voces más importantes de la música popular argentina y en una figura fundamental del folklore latinoamericano.",
    author: "Mercedes Sosa",
    image: "/images/mercedes-sosa.jpg",
    year: 1935,
  },

  {
    id: 6,
    title: "Juan Falú",
    category: "Música",
    description:
      "Guitarrista y compositor nacido en Tucumán, reconocido por su aporte a la música popular argentina y especialmente al folklore.",
    author: "Juan Falú",
    image: "/images/juan-falu.jpg",
    year: 1948,
  },

  {
    id: 7,
    title: "Los Tucu Tucu",
    category: "Música",
    description:
      "Grupo folklórico tucumano que tuvo una importante trayectoria dentro de la música popular argentina y que forma parte del patrimonio musical de la provincia.",
    author: "Los Tucu Tucu",
    image: "/images/los-tucu-tucu.jpg",
    year: 1959,
  },

  {
    id: 8,
    title: "Tumbao de Caña",
    category: "Música",
    description:
      "Banda nacida en Tucumán que combina salsa, música popular y elementos contemporáneos para desarrollar una propuesta musical con identidad propia.",
    author: "Tumbao de Caña",
    image: "/images/tumbao-de-cana.jpg",
    year: 2010,
  },

  // arte digital

  {
    id: 9,
    title: "Cuerpos Floridos",
    category: "Arte digital",
    description:
      "Intervención artística multimedia presentada en Tucumán que combina danza contemporánea, recursos audiovisuales y memoria histórica.",
    author: "Producción artística tucumana",
    image: "/images/cuerpos-floridos.jpg",
    year: 2026,
  },

  {
    id: 10,
    title: "Museo Provincial de Bellas Artes Timoteo Navarro",
    category: "Arte digital",
    description:
      "Uno de los principales espacios de artes visuales de Tucumán. Su colección reúne pinturas, dibujos, grabados, esculturas, fotografías y otras expresiones artísticas.",
    author: "Museo Timoteo Navarro",
    image: "/images/museo-timoteo-navarro.jpg",
    year: 2026,
  },

  {
    id: 11,
    title: "Lola Mora",
    category: "Arte digital",
    description:
      "La escultora nacida en Tucumán se convirtió en una de las artistas argentinas más importantes de finales del siglo XIX y principios del XX.",
    author: "Lola Mora",
    image: "/images/lola-mora.jpg",
    year: 1866,
  },

  {
    id: 12,
    title: "Museo Escultor Juan Carlos Iramain",
    category: "Arte digital",
    description:
      "Espacio dedicado a conservar y difundir la obra del escultor tucumano Juan Carlos Iramain y su aporte a las artes visuales de la provincia.",
    author: "Juan Carlos Iramain",
    image: "/images/museo-iramain.jpg",
    year: 2026,
  },

  // videojuegos/industria

  {
    id: 13,
    title: "Los Infernales",
    category: "Videojuegos",
    description:
      "Videojuego desarrollado por el tucumano Damián Caro y ganador del concurso EVA Awards 2023 en la categoría Mi Primer Videojuego Profesional.",
    author: "Damián Caro",
    image: "/images/los-infernales.jpg",
    year: 2023,
  },

  {
    id: 14,
    title: "TVC Games",
    category: "Videojuegos",
    description:
      "Estudio tucumano dedicado al desarrollo de videojuegos. Entre sus proyectos aparecen títulos como Lola y Choco, Shikita y Barrial F.C.",
    author: "TVC Games",
    image: "/images/tvc-games.jpg",
    year: 2026,
  },

  {
    id: 15,
    title: "Lola y Choco",
    category: "Videojuegos",
    description:
      "Uno de los proyectos desarrollados por integrantes de TVC Games, formando parte de la producción de videojuegos realizada desde Tucumán.",
    author: "TVC Games",
    image: "/images/lola-y-choco.jpg",
    year: 2026,
  },

  {
    id: 16,
    title: "La industria tucumana de videojuegos",
    category: "Videojuegos",
    description:
      "Tucumán cuenta con estudios y desarrolladores que participan en eventos nacionales como EVA y trabajan en proyectos propios, educativos y comerciales.",
    author: "Desarrolladores de videojuegos de Tucumán",
    image: "/images/videojuegos-tucuman.jpg",
    year: 2026,
  },

  // literatura

  {
    id: 17,
    title: "Tomás Eloy Martínez",
    category: "Literatura",
    description:
      "Escritor y periodista nacido en Tucumán, reconocido internacionalmente por sus novelas y por una extensa trayectoria vinculada con el periodismo y la literatura.",
    author: "Tomás Eloy Martínez",
    image: "/images/tomas-eloy-martinez.jpg",
    year: 1934,
  },

  {
    id: 18,
    title: "Mayo de las Letras",
    category: "Literatura",
    description:
      "Festival cultural dedicado a la literatura y las letras que reúne escritores, lectores, talleres, presentaciones de libros y diferentes propuestas culturales en Tucumán.",
    author: "Ente Cultural de Tucumán",
    image: "/images/mayo-de-las-letras.jpg",
    year: 2026,
  },

  {
    id: 19,
    title: "Tucumán Lee",
    category: "Literatura",
    description:
      "Programa destinado a promover la lectura y la escritura creativa entre estudiantes y comunidades educativas de la provincia.",
    author: "Programa Tucumán Lee",
    image: "/images/tucuman-lee.jpg",
    year: 2026,
  },

  {
    id: 20,
    title: "La cultura de Tucumán en el Bicentenario",
    category: "Literatura",
    description:
      "Obra de Roberto Espinosa que reúne información sobre destacadas personalidades de la cultura tucumana, incluyendo figuras como Mercedes Sosa, Atahualpa Yupanqui y Tomás Eloy Martínez.",
    author: "Roberto Espinosa",
    image: "/images/cultura-tucuman-bicentenario.jpg",
    year: 2016,
  },

  // cultura local

  {
    id: 21,
    title: "Peña La Escondida",
    category: "Cultura local",
    description:
      "Espacio dedicado al folklore y al encuentro cultural, donde la música, la danza y las tradiciones forman parte de la identidad cultural tucumana.",
    author: "Cultura folklórica tucumana",
    image: "/images/pena-la-escondida.jpg",
    year: 2026,
  },

  {
    id: 22,
    title: "Casa Histórica de la Independencia",
    category: "Cultura local",
    description:
      "Uno de los principales símbolos históricos de Tucumán y de Argentina. En este lugar, el 9 de julio de 1816, el Congreso declaró la Independencia.",
    author: "Patrimonio histórico argentino",
    image: "/images/casa-historica.jpg",
    year: 1816,
  },

  {
    id: 23,
    title: "Ciudad Sagrada de Quilmes",
    category: "Cultura local",
    description:
      "Uno de los principales sitios arqueológicos de Tucumán, relacionado con la historia y el patrimonio de los pueblos originarios de los Valles Calchaquíes.",
    author: "Pueblo Quilmes",
    image: "/images/ciudad-sagrada-quilmes.jpg",
    year: 2026,
  },

  {
    id: 24,
    title: "Museo Arqueológico Los Menhires",
    category: "Cultura local",
    description:
      "Espacio arqueológico ubicado en El Mollar, Tafí del Valle, que conserva y exhibe antiguos menhires vinculados con las culturas prehispánicas de los Valles Calchaquíes.",
    author: "Patrimonio arqueológico tucumano",
    image: "/images/los-menhires.jpg",
    year: 2026,
  },
];

export default contents;
