import { Pages } from '../controllers/index.controller';
const root = document.getElementById('main');

export default function router(route = '') {
   root.innerHTML = '';
   activateLink(route);

   switch(route) {
      case '':
      case '#/': return root.appendChild(Pages.home());
      case '#/projects': return root.appendChild(Pages.projects());
      case '#/about': return root.appendChild(Pages.about());
      case '#/contact': return root.appendChild(Pages.contact());
      default: {
         root.appendChild(Pages.notFound());
         setTimeout(() => {
            location.hash = '#/';
         }, 3000);
      }
   }
}

function activateLink(link) {
   // let link = location.hash;

   if(link === '' || link === '#/') link = 'home';
   else link = link.split('/')[1];

   if(document.querySelector('.is-active')) document.querySelector('.is-active').classList.remove('is-active');

   if(document.getElementById(link)) document.getElementById(link).classList.add('is-active');
}