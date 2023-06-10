import './style.css'

const experiencias = [
    {
      image: "./assets/logo-lasrozas.png",
      title: "Hípica Las Rozas",
      job: "Profesora salto avanzado",
      date: "2018/2022",
      description:
        "Clases de salto orientado a competición de alto rendimiento. Dirección técnica de algunos propietarios; Clases de salto de todos los niveles.",
      link: "https://www.lasrozas.es/deportes/actividades/actividades-adultos/cursos/hipica",
    },
    {
      image: "./assets/logo-natura.jpg",
      title: "Escuela de equitación Natur",
      job: "Directora técnica",
      date: "2021/2023",
      description:
        "Dirección técnica a propietarios; Clases de salto, doma clásica y equitación de campo, de todos los niveles.",
      link: "http://hipicamadrid.es/",
    },
    {
      image: "./assets/logo-uc.jpg",
      title: "Universidade do Cavalo - São Paulo",
      job: "Entrenadora de caballos de todos los niveles",
      date: "2013/2014",
      description:
        "Enseñar a los caballos nuevos el lenguaje necesario para comunicarnos y preparar a los que ya lo conocen para pruebas y concursos.",
      link: "https://uccavalo.com.br/",
    },
    {
      image: "./assets/logo-ccvm.jpg",
      title: "Club de Campo Villa de Madrid",
      job: "Profesora de equitación",
      date: "2016/2017",
      description:
        "Especialidad en ponis. Clases desde iniciación hasta concurso de alto nivel de salto. Preparación de concursos y dirección técnica.",
      link: "https://www.ccvm.es/es/deportes/hipica/escuela",
    },
    {
      image: "./assets/logo-sanjoaquin.png",
      title: "Hípica San Joaquín",
      job: "Dirección técnica",
      date: "2014/2016",
      description:
        "Dirección técnica. Clases de salto, doma y TREC de todos los niveles. Rutas de varios días por puerto de montaña, con acampadas y comidas.",
      link: "https://www.facebook.com/sanjoaquinhipica/",
    },
  ];
  
  export const renderExperience = () => {

    const ulExperiences$$ = document.createElement("ul");
    ulExperiences$$.className = "projects-list";

    const main$$ = document.querySelector('#main');
    main$$.appendChild(ulExperiences$$)
       
    experiencias.forEach((experiencia) => {
      ulExperiences$$.innerHTML += `
      <li>
      <img src="${experiencia.image}" alt="${experiencia.title}">
      <div class="li-content">
      <h3>${experiencia.title}<br>${experiencia.job} - ${experiencia.date}</h3>
      <p>${experiencia.description}</p>
      <a href="${experiencia.link}">¡Te lo enseño aquí!</a>
    </div>
    </li>
            `;
    });
  };