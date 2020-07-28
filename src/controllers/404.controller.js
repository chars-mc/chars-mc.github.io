import viewHtml from '../views/404.hbs';

const view = document.createElement('div');
view.innerHTML = viewHtml();

export default () => {
   return view;
}