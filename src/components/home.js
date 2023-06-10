import './style.css'

const personalInfo = {
  img: './assets/profile-img.jpg',
  name: 'Paula Castro Rodríguez',
  info: 'Desarrolladora de banderas de plastilina.',
  description: 'Desde pequeña, tengo gran pasión por la plastilina en todas sus versiones. Le dedico gran esfuerzo a cada una de las banderas. La arcilla y el fimo crean el resultado final y te llega a tu casa en segundos.',
  description2: 'Envío por palomas mensajeras, garantizando el máximo cuidado en cada pedido. El envío es gratuíto si le das de comer.',
};
const languages = {
  title: 'Lenguajes:',
  option1: '* Arrullo de Tórtola Ibérica',
  option2: '* Símbología mitológica de banderas del futuro',
  option3: '* Posibilidad de traducir lenguas antiguas',
};
const links = {
  linkedinHref: 'https://www.linkedin.com/in/alejandra-castro-rodr%C3%ADguez-a671b3208/',
  linkedinLogo: './assets/linkedin.png',
  gitHubHref: 'https://github.com/PaulaCR90/',
  gitHubLogo: './assets/github.png',
};

export const renderHome = () => {
  const main$$ = document.querySelector('#main');

  main$$.innerHTML = `<div class="personal-info">
    <img class="profile-img" src="${personalInfo.img}" alt="Imagen de perfil">
    <h3 class="profile-name">${personalInfo.name}</h3>
    <h4 class="profile-info">${personalInfo.info}</h4>
    <p class="profile-description">${personalInfo.description}</p>
    <ul class="languages-list">
      <li class="li-title"><h5>${languages.title}</h5></li>
      <li class="li-option">${languages.option1}</li>
      <li class="li-option">${languages.option2}</li>
      <li class="li-option">${languages.option3}</li>
    </ul>
    <p class="profile-description2">${personalInfo.description2}</p>
    <div class="link-container"><a class="work-link" href="${links.gitHubHref}"><img class="logo-img" src="${links.gitHubLogo}" alt="github"></a>
      <a class="work-link" href="${links.linkedinHref}"><img class="logo-img" src="${links.linkedinLogo}" alt="Linkedin"></a>
    </div>
    </div>`
};