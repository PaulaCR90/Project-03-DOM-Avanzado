import { renderExperience } from "./src/components/experience.js";
import { renderHome } from "./src/components/home.js";
import { renderProjects } from "./src/components/projects.js";
import './style.css'

const app$$ = document.querySelector("#app");
const initialApp = () => {
   app$$.innerHTML = `
   <main id="main"></main>
   `;
   renderHome();
};
initialApp();

const main$$ = document.querySelector('#main')
const paintHome = (event) => {
  event.preventDefault();
  const linkHref = event.target.href;
  console.log('El link apunta a:', linkHref );

  main$$.innerHTML = '';
  renderHome();
}

const paintExperience = (event) => {
  event.preventDefault();
  const linkHref = event.target.href;
  console.log('El link apunta a:', linkHref );

  main$$.innerHTML = '';
  renderExperience();
}

const paintProjects = (event) => {
  event.preventDefault();
  const linkHref = event.target.href;
  console.log('El link apunta a:', linkHref );

  main$$.innerHTML = '';
  renderProjects();
}

const homeA = document.querySelector('.home-link');
homeA.addEventListener('click', paintHome);

const experienceA = document.querySelector('.experience-link');
experienceA.addEventListener('click', paintExperience);

const projectsA = document.querySelector('.projects-link');
projectsA.addEventListener('click', paintProjects);