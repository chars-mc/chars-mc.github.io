import viewHtml from '../views/about.hbs';

const view = document.createElement('div');
view.innerHTML = viewHtml();

export default () => {
   return view;
}