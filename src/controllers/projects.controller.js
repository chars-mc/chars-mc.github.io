import viewHtml from '../views/projects.hbs';
import projects from '../js/projects.json';

const view = document.createElement('div');
view.innerHTML = viewHtml();

export default () => {
   return view;
}

(function init() {
   const reposDiv = view.querySelector('#repos');

   projects.forEach(project => {
      reposDiv.innerHTML += getRepoTemplate(project);
   });
}());

function getRepoTemplate(repo) {
   let languajes = '';
   
   if(repo.languajes) repo.languajes.forEach(languaje => languajes += `<i class="${languaje}"></i>`);
   else repo.techs.forEach(tech => languajes += `<span>${tech}</span>`);

   return `
      <article class="repo">
         <div class="repo__header">
            <h2 class="repo__name">${repo.name}</h2>
         </div>

         <div class="repo__body">
            <p class="repo__description">${repo.description}</p>
            <div class="repo__languajes">${languajes}</div>
            
            <div class="repo__links">
               <a href="${repo.links.code}" class="button__link" target="_blank">
                  CODE <i class="bx bx-code-block"></i>
               </a>
               ${repo.links.live? `<a href="${repo.links.live}" class="button__link" target="_blank">PREVIEW <i class="bx bx-window-alt"></i></a>` : ''}
            </div>
         </div>
      </article>
   `;
}