import viewHtml from '../views/projects.hbs';

const view = document.createElement('div');
view.innerHTML = viewHtml();

export default () => {
   return view;
}