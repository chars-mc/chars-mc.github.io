import viewHtml from '../views/about.hbs';
import technologies from '../js/technologies.json';

const view = document.createElement('div');
view.innerHTML = viewHtml();

export default () => {
   return view;
}

(function init() {
   view.querySelector('#skills').innerHTML = getList(technologies.frontend);
   view.querySelector('#skills').innerHTML += getList(technologies.backend);
   view.querySelector('#skills').innerHTML += getList(technologies.tools);

   view.querySelector('#other').innerHTML = getList(technologies.other);
   view.querySelector('#learning').innerHTML = getList(technologies.learning);
}())

function getList(techs) {
   let list = '';
   techs.forEach((tech) => {
      list += `
         <div class="technology">
            <i class="${tech.icon}"></i>
            <p>${tech.name}</p>
         </div>
      `;
   });

   return list;
}