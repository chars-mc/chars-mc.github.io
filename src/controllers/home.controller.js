import viewHtml from '../views/home.hbs';

const view = document.createElement('div');
view.innerHTML = viewHtml();

export default () => {
   return view;
}