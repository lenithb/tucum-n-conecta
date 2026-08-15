const contenidos = [
  // cine y series

  {
    id: 1,
    titulo: "Tafí Viejo: Verdor sin tiempo",
    categoria: "Cine y series",
    descripcion:
      "Miniserie tucumana que cuenta la historia de Ana, una joven que llega a Tafí Viejo y se encuentra con una historia marcada por los vínculos familiares, el paisaje, la citricultura y el pasado ferroviario de la ciudad.",
    autor: "Eduardo Pinto",
    imagen: "/images/tafi-viejo-verdor-sin-tiempo.jpg",
    anio: 2026,
  },

  {
    id: 2,
    titulo: "Sobre los Rieles de la Historia",
    categoria: "Cine y series",
    descripcion:
      "Documental dedicado a recuperar la memoria y la importancia del ferrocarril en Tafí Viejo, una actividad que tuvo un papel fundamental en el desarrollo de la ciudad.",
    autor: "Producción audiovisual tucumana",
    imagen: "/images/sobre-los-rieles-de-la-historia.jpg",
    anio: 2020,
  },

  {
    id: 3,
    titulo: "Camino hacia la muerte del viejo Reales",
    categoria: "Cine y series",
    descripcion:
      "Película de Gerardo Vallejo vinculada con el cine social argentino y con una fuerte mirada sobre la realidad del noroeste argentino.",
    autor: "Gerardo Vallejo",
    imagen: "/images/camino-hacia-la-muerte-del-viejo-reales.jpg",
    anio: 1974,
  },

  {
    id: 4,
    titulo: "Festival Tucumán Cine Gerardo Vallejo",
    categoria: "Cine y series",
    descripcion:
      "Uno de los principales espacios audiovisuales de la provincia, con competencias, muestras, producciones del NOA, cortometrajes, talleres y encuentros entre realizadores.",
    autor: "Ente Cultural de Tucumán",
    imagen: "/images/festival-tucuman-cine.jpg",
    anio: 2026,
  },

  // música

  {
    id: 5,
    titulo: "Mercedes Sosa",
    categoria: "Música",
    descripcion:
      "La cantora tucumana que se convirtió en una de las voces más importantes de la música popular argentina y en una figura fundamental del folklore latinoamericano.",
    autor: "Mercedes Sosa",
    imagen: "/images/mercedes-sosa.jpg",
    anio: 1935,
  },

  {
    id: 6,
    titulo: "Juan Falú",
    categoria: "Música",
    descripcion:
      "Guitarrista y compositor nacido en Tucumán, reconocido por su aporte a la música popular argentina y especialmente al folklore.",
    autor: "Juan Falú",
    imagen: "/images/juan-falu.jpg",
    anio: 1948,
  },

  {
    id: 7,
    titulo: "Los Tucu Tucu",
    categoria: "Música",
    descripcion:
      "Grupo folklórico tucumano que tuvo una importante trayectoria dentro de la música popular argentina y que forma parte del patrimonio musical de la provincia.",
    autor: "Los Tucu Tucu",
    imagen: "/images/los-tucu-tucu.jpg",
    anio: 1959,
  },

  {
    id: 8,
    titulo: "Tumbao de Caña",
    categoria: "Música",
    descripcion:
      "Banda nacida en Tucumán que combina salsa, música popular y elementos contemporáneos para desarrollar una propuesta musical con identidad propia.",
    autor: "Tumbao de Caña",
    imagen: "/images/tumbao-de-cana.jpg",
    anio: 2010,
  },

  // arte digital

  {
    id: 9,
    titulo: "Cuerpos Floridos",
    categoria: "Arte digital",
    descripcion:
      "Intervención artística multimedia presentada en el Festival Tucumán Cine, que combina danza contemporánea, audiovisuales y memoria histórica.",
    autor: "Producción artística tucumana",
    imagen: "/images/cuerpos-floridos.jpg",
    anio: 2026,
  },

  {
    id: 10,
    titulo: "Museo Provincial de Bellas Artes Timoteo Navarro",
    categoria: "Arte digital",
    descripcion:
      "Uno de los principales espacios de artes visuales de Tucumán. Su colección reúne pinturas, dibujos, grabados, esculturas, fotografías y otras expresiones artísticas.",
    autor: "Museo Timoteo Navarro",
    imagen: "/images/museo-timoteo-navarro.jpg",
    anio: 2026,
  },

  {
    id: 11,
    titulo: "Lola Mora",
    categoria: "Arte digital",
    descripcion:
      "La escultora nacida en Tucumán se convirtió en una de las artistas argentinas más importantes de finales del siglo XIX y principios del XX.",
    autor: "Lola Mora",
    imagen: "/images/lola-mora.jpg",
    anio: 1866,
  },

  {
    id: 12,
    titulo: "Museo Escultor Juan Carlos Iramain",
    categoria: "Arte digital",
    descripcion:
      "Espacio dedicado a conservar y difundir la obra del escultor tucumano Juan Carlos Iramain y su aporte a las artes visuales de la provincia.",
    autor: "Juan Carlos Iramain",
    imagen: "/images/museo-iramain.jpg",
    anio: 2026,
  },

  // videojuegos

  {
    id: 13,
    titulo: "Los Infernales",
    categoria: "Videojuegos",
    descripcion:
      "Videojuego desarrollado por el tucumano Damián Caro y ganador del concurso EVA Awards 2023 en la categoría Mi Primer Videojuego Profesional.",
    autor: "Damián Caro",
    imagen: "/images/los-infernales.jpg",
    anio: 2023,
  },

  {
    id: 14,
    titulo: "TVC Games",
    categoria: "Videojuegos",
    descripcion:
      "Estudio tucumano dedicado al desarrollo de videojuegos. Entre sus proyectos y trabajos anteriores aparecen títulos como Lola y Choco, Shikita y Barrial F.C.",
    autor: "TVC Games",
    imagen: "/images/tvc-games.jpg",
    anio: 2026,
  },

  {
    id: 15,
    titulo: "Lola y Choco",
    categoria: "Videojuegos",
    descripcion:
      "Uno de los proyectos desarrollados por integrantes de TVC Games, formando parte de la producción de videojuegos realizada desde Tucumán.",
    autor: "TVC Games",
    imagen: "/images/lola-y-choco.jpg",
    anio: 2026,
  },

  {
    id: 16,
    titulo: "La industria tucumana de videojuegos",
    categoria: "Videojuegos",
    descripcion:
      "Tucumán cuenta con estudios y desarrolladores que participan en eventos nacionales como EVA y trabajan en proyectos propios, educativos y comerciales.",
    autor: "Desarrolladores de videojuegos de Tucumán",
    imagen: "/images/videojuegos-tucuman.jpg",
    anio: 2026,
  },

  // literatura

  {
    id: 17,
    titulo: "Tomás Eloy Martínez",
    categoria: "Literatura",
    descripcion:
      "Escritor y periodista nacido en Tucumán, reconocido internacionalmente por sus novelas y por una extensa trayectoria vinculada con el periodismo y la literatura.",
    autor: "Tomás Eloy Martínez",
    imagen: "/images/tomas-eloy-martinez.jpg",
    anio: 1934,
  },

  {
    id: 18,
    titulo: "Mayo de las Letras",
    categoria: "Literatura",
    descripcion:
      "Festival cultural dedicado a la literatura y las letras que reúne escritores, lectores, talleres, presentaciones de libros y diferentes propuestas culturales en Tucumán.",
    autor: "Ente Cultural de Tucumán",
    imagen: "/images/mayo-de-las-letras.jpg",
    anio: 2026,
  },

  {
    id: 19,
    titulo: "Tucumán Lee",
    categoria: "Literatura",
    descripcion:
      "Programa destinado a promover la lectura y la escritura creativa entre estudiantes y comunidades educativas de la provincia.",
    autor: "Programa Tucumán Lee",
    imagen: "/images/tucuman-lee.jpg",
    anio: 2026,
  },

  {
    id: 20,
    titulo: "La cultura de Tucumán en el Bicentenario",
    categoria: "Literatura",
    descripcion:
      "Obra de Roberto Espinosa que reúne información sobre destacadas personalidades de la cultura tucumana, incluyendo figuras como Mercedes Sosa, Atahualpa Yupanqui y Tomás Eloy Martínez.",
    autor: "Roberto Espinosa",
    imagen: "/images/cultura-tucuman-bicentenario.jpg",
    anio: 2016,
  },

  // cultura local

  {
    id: 21,
    titulo: "Peña La Escondida",
    categoria: "Cultura local",
    descripcion:
      "Espacio dedicado al folklore y al encuentro cultural, donde la música, la danza y las tradiciones forman parte de la identidad cultural tucumana.",
    autor: "Cultura folklórica tucumana",
    imagen: "/images/pena-la-escondida.jpg",
    anio: 2026,
  },

  {
    id: 22,
    titulo: "Casa Histórica de la Independencia",
    categoria: "Cultura local",
    descripcion:
      "Uno de los principales símbolos históricos de Tucumán y de Argentina. En este lugar, el 9 de julio de 1816, el Congreso declaró la Independencia.",
    autor: "Patrimonio histórico argentino",
    imagen: "/images/casa-historica.jpg",
    anio: 1816,
  },

  {
    id: 23,
    titulo: "Ciudad Sagrada de Quilmes",
    categoria: "Cultura local",
    descripcion:
      "Uno de los principales sitios arqueológicos de Tucumán, relacionado con la historia y el patrimonio de los pueblos originarios de los Valles Calchaquíes.",
    autor: "Pueblo Quilmes",
    imagen: "/images/ciudad-sagrada-quilmes.jpg",
    anio: 2026,
  },

  {
    id: 24,
    titulo: "Museo Arqueológico Los Menhires",
    categoria: "Cultura local",
    descripcion:
      "Espacio arqueológico ubicado en El Mollar, Tafí del Valle, que conserva y exhibe antiguos menhires vinculados con las culturas prehispánicas de los Valles Calchaquíes.",
    autor: "Patrimonio arqueológico tucumano",
    imagen: "/images/los-menhires.jpg",
    anio: 2026,
  },
];

export default contenidos;
