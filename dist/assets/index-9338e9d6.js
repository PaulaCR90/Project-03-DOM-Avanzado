(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const u=[{image:"./assets/logo-lasrozas.png",title:"Hípica Las Rozas",job:"Profesora salto avanzado",date:"2018/2022",description:"Clases de salto orientado a competición de alto rendimiento. Dirección técnica de algunos propietarios; Clases de salto de todos los niveles.",link:"https://www.lasrozas.es/deportes/actividades/actividades-adultos/cursos/hipica"},{image:"./assets/logo-natura.jpg",title:"Escuela de equitación Natur",job:"Directora técnica",date:"2021/2023",description:"Dirección técnica a propietarios; Clases de salto, doma clásica y equitación de campo, de todos los niveles.",link:"http://hipicamadrid.es/"},{image:"./assets/logo-uc.jpg",title:"Universidade do Cavalo - São Paulo",job:"Entrenadora de caballos de todos los niveles",date:"2013/2014",description:"Enseñar a los caballos nuevos el lenguaje necesario para comunicarnos y preparar a los que ya lo conocen para pruebas y concursos.",link:"https://uccavalo.com.br/"},{image:"./assets/logo-ccvm.jpg",title:"Club de Campo Villa de Madrid",job:"Profesora de equitación",date:"2016/2017",description:"Especialidad en ponis. Clases desde iniciación hasta concurso de alto nivel de salto. Preparación de concursos y dirección técnica.",link:"https://www.ccvm.es/es/deportes/hipica/escuela"},{image:"./assets/logo-sanjoaquin.png",title:"Hípica San Joaquín",job:"Dirección técnica",date:"2014/2016",description:"Dirección técnica. Clases de salto, doma y TREC de todos los niveles. Rutas de varios días por puerto de montaña, con acampadas y comidas.",link:"https://www.facebook.com/sanjoaquinhipica/"}],g=()=>{const e=document.createElement("ul");e.className="projects-list",document.querySelector("#main").appendChild(e),u.forEach(a=>{e.innerHTML+=`
      <li>
      <img src="${a.image}" alt="${a.title}">
      <div class="li-content">
      <h3>${a.title}<br>${a.job} - ${a.date}</h3>
      <p>${a.description}</p>
      <a href="${a.link}">¡Te lo enseño aquí!</a>
    </div>
    </li>
            `})},n={img:"./assets/profile-img.jpg",name:"Paula Castro Rodríguez",info:"Desarrolladora de banderas de plastilina.",description:"Desde pequeña, tengo gran pasión por la plastilina en todas sus versiones. Le dedico gran esfuerzo a cada una de las banderas. La arcilla y el fimo crean el resultado final y te llega a tu casa en segundos.",description2:"Envío por palomas mensajeras, garantizando el máximo cuidado en cada pedido. El envío es gratuíto si le das de comer."},t={title:"Lenguajes:",option1:"* Arrullo de Tórtola Ibérica",option2:"* Símbología mitológica de banderas del futuro",option3:"* Posibilidad de traducir lenguas antiguas"},l={linkedinHref:"https://www.linkedin.com/in/alejandra-castro-rodr%C3%ADguez-a671b3208/",linkedinLogo:"./assets/linkedin.png",gitHubHref:"https://github.com/PaulaCR90/",gitHubLogo:"./assets/github.png"},p=()=>{const e=document.querySelector("#main");e.innerHTML=`<div class="personal-info">
    <img class="profile-img" src="${n.img}" alt="Imagen de perfil">
    <h3 class="profile-name">${n.name}</h3>
    <h4 class="profile-info">${n.info}</h4>
    <p class="profile-description">${n.description}</p>
    <ul class="languages-list">
      <li class="li-title"><h5>${t.title}</h5></li>
      <li class="li-option">${t.option1}</li>
      <li class="li-option">${t.option2}</li>
      <li class="li-option">${t.option3}</li>
    </ul>
    <p class="profile-description2">${n.description2}</p>
    <div class="link-container"><a class="work-link" href="${l.gitHubHref}"><img class="logo-img" src="${l.gitHubLogo}" alt="github"></a>
      <a class="work-link" href="${l.linkedinHref}"><img class="logo-img" src="${l.linkedinLogo}" alt="Linkedin"></a>
    </div>
    </div>`},m=[{image:"./assets/logo-fofuchicas.png",title:"Fofuchicas",description:"Sección de tienda web para una empresa de artesanía con goma EVA. Filtros con funciones simultáneas e individuales que cambian la visualización de la tienda.",link:"https://fofuchicas.netlify.app/"},{image:"./assets/logo-bigotes.png",title:"Los Bigotes de Cleopatra",description:"Landing page para una protectora de animales. Con links a páginas reales, menú hamburguesa y catálogo de los animales en adopción/acogida.",link:"https://losbigotesdecleopatra.netlify.app/"},{image:"./assets/logo-banderas.jpg",title:"Diversión con Banderas",description:"Vodcast en línea presentado por Sheldon y Amy sobre vexilología (estudio de las banderas). Hay diez episodios incluida una retrospectiva detrás de escena.",link:"https://the-big-bang-theory.es/diversion-con-banderas/"},{image:"./assets/logo-lunnis.jpg",title:"Los Lunnis",description:"Los Lunnis son extraterrestres de Luna Lunera. Enfrentan problemas causados por el pirata Lucanero, que quiere robar el Gran Libro Mágico de la bruja Lubina.",link:"https://www.rtve.es/infantil/series/lunnis/"},{image:"./assets/logo-gallina.jpg",title:"Tu Gallina Online",description:"Comprar gallinas online con todas las garantías de transporte y entrega. Amplio catálogo de gallinas. Puedes adquirir el material necesario para su cuidado.",link:"https://www.tugallinaonline.es/"}],f=()=>{const e=document.querySelector("#main"),s=document.createElement("ul");s.className="projects-list",m.forEach(a=>{s.innerHTML+=`
          <li>
              <img src="${a.image}" alt="${a.title}">
              <div class="li-content">
              <h3>${a.title}</h3>
              <p>${a.description}</p>
              <a href="${a.link}">¡Te lo enseño aquí!</a>
            </div>
            </li>
            `}),e.appendChild(s)};const h=document.querySelector("#app"),b=()=>{h.innerHTML=`
   <main id="main"></main>
   `,p()};b();const c=document.querySelector("#main"),$=e=>{e.preventDefault();const s=e.target.href;console.log("El link apunta a:",s),c.innerHTML="",p()},v=e=>{e.preventDefault();const s=e.target.href;console.log("El link apunta a:",s),c.innerHTML="",g()},L=e=>{e.preventDefault();const s=e.target.href;console.log("El link apunta a:",s),c.innerHTML="",f()},k=document.querySelector(".home-link");k.addEventListener("click",$);const y=document.querySelector(".experience-link");y.addEventListener("click",v);const j=document.querySelector(".projects-link");j.addEventListener("click",L);
