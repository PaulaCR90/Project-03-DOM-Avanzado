import './style.css'

const proyectos = [
    {
      image: "./logo-fofuchicas.png",
      title: "Fofuchicas",
      description:
        "Sección de tienda web para una empresa de artesanía con goma EVA. Filtros con funciones simultáneas e individuales que cambian la visualización de la tienda.",
      link: "https://fofuchicas.netlify.app/",
    },
    {
      image: "./logo-bigotes.png",
      title: "Los Bigotes de Cleopatra",
      description:
        "Landing page para una protectora de animales. Con links a páginas reales, menú hamburguesa y catálogo de los animales en adopción/acogida.",
      link: "https://losbigotesdecleopatra.netlify.app/",
    },
    {
      image: "./logo-banderas.jpg",
      title: "Diversión con Banderas",
      description:
        "Vodcast en línea presentado por Sheldon y Amy sobre vexilología (estudio de las banderas). Hay diez episodios incluida una retrospectiva detrás de escena.",
      link: "https://the-big-bang-theory.es/diversion-con-banderas/",
    },
    {
      image: "./logo-lunnis.jpg",
      title: "Los Lunnis",
      description:
        "Los Lunnis son extraterrestres de Luna Lunera. Enfrentan problemas causados por el pirata Lucanero, que quiere robar el Gran Libro Mágico de la bruja Lubina.",
      link: "https://www.rtve.es/infantil/series/lunnis/",
    },
    {
      image: "./logo-gallina.jpg",
      title: "Tu Gallina Online",
      description:
        "Comprar gallinas online con todas las garantías de transporte y entrega. Amplio catálogo de gallinas. Puedes adquirir el material necesario para su cuidado.",
      link: "https://www.tugallinaonline.es/",
    },
  ];
  
  export const renderProjects = () => {
    const main$$ = document.querySelector("#main");
    const ulProjects$$ = document.createElement("ul");
    ulProjects$$.className = 'projects-list'
    proyectos.forEach((proyecto) => {
      ulProjects$$.innerHTML += `
          <li>
              <img src="${proyecto.image}" alt="${proyecto.title}">
              <div class="li-content">
              <h3>${proyecto.title}</h3>
              <p>${proyecto.description}</p>
              <a href="${proyecto.link}">¡Te lo enseño aquí!</a>
            </div>
            </li>
            `;
    });
    main$$.appendChild(ulProjects$$);
  };