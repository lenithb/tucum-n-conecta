# Tucumán Conecta

Un espacio para descubrir y compartir historias, obras y expresiones culturales de Tucumán.

La idea de **Tucumán Conecta** es reunir distintos contenidos relacionados con la cultura tucumana en un solo lugar, permitiendo explorarlos por temática, buscarlos y descubrir contenido de forma aleatoria.

## Tecnologías

- React
- React Router
- Vite
- JavaScript
- CSS
- Oxlint

## Funcionalidades

- Navegación entre diferentes secciones.
- Exploración de contenidos culturales.
- Búsqueda por título, autor o descripción.
- Filtro por categorías.
- Uso de parámetros de URL para compartir filtros.
- Vista individual de cada contenido.
- Descubrimiento de contenido aleatorio.
- Página 404 para rutas inexistentes.
- Modo claro y oscuro.
- Persistencia del tema seleccionado mediante `localStorage`.
- Navbar y footer reutilizables.
- Diseño basado en componentes.

## Categorías

Actualmente el contenido puede organizarse en categorías como:

- Música
- Cine y series
- Arte digital
- Videojuegos
- Literatura
- Cultura local

## Estructura

```text
tucum-n-conecta/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSlider.jsx
│   │   └── Navbar.jsx
│   │
│   ├── data/
│   │   └── contents.js
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Categories.jsx
│   │   ├── Content.jsx
│   │   ├── Details.jsx
│   │   ├── Explore.jsx
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

La aplicación separa las páginas de los componentes reutilizables y mantiene los contenidos en una fuente de datos independiente.

## Rutas

| Ruta           | Descripción                          |
| -------------- | ------------------------------------ |
| `/`            | Página principal                     |
| `/explore`     | Exploración y búsqueda de contenidos |
| `/categories`  | Categorías                           |
| `/content/:id` | Detalle de un contenido              |
| `/about`       | Información del proyecto             |
| `*`            | Página 404                           |

## Instalación

Cloná el repositorio:

```bash
git clone https://github.com/lenithb/tucum-n-conecta.git
cd tucum-n-conecta
```

Instalá las dependencias:

```bash
npm install
```

Iniciá el servidor de desarrollo:

```bash
npm run dev
```

La aplicación quedará disponible en la dirección que indique Vite en la terminal.

## Otros comandos

Crear una versión para producción:

```bash
npm run build
```

Previsualizar la versión de producción:

```bash
npm run preview
```

Ejecutar el linter:

```bash
npm run lint
```

Estos comandos corresponden a los scripts definidos actualmente en `package.json`.

## Estado del proyecto

El proyecto se encuentra en desarrollo.

### Actualmente

- [x] React + Router
- [x] Rutas
- [x] Contenido dinámico
- [x] Categorías
- [x] Filtros
- [x] Búsqueda
- [x] Query parameters
- [x] Contenido aleatorio
- [x] Persistencia del tema
- [x] Página 404
- [x] Navbar responsive
- [x] Revisión general
- [x] Incorporar assets definitivos
- [x] Terminar ajustes visuales
- [x] Revisar responsive
- [x] Deploy

## Sobre el proyecto

Este proyecto nace como una forma de reunir parte de ese contenido y hacerlo más fácil de encontrar y explorar, asignado por una tarea de mi curso fullstack.

La intención es que sea un proyecto que pueda seguir creciendo con nuevos contenidos y categorías.

## Autor

Desarrollado por **Lenith B.**

[GitHub](https://github.com/lenithb)
