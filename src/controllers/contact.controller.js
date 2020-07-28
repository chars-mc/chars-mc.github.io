import viewHTML from '../views/contact.hbs';

const view = document.createElement('div');
view.innerHTML = viewHTML();

export default () => {
   return view;
}