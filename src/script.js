import './style.scss';
import './static/favicon.png';

import router from './js/router';

window.addEventListener('load', () => {
   router(location.hash);

   window.addEventListener('hashchange', () => {
      router(location.hash);
   });

});