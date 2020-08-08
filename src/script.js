import './style.scss';
import './static/favicon.png';
import './static/profile_photo.png';

import router from './js/router';

window.addEventListener('load', () => {
   router(location.hash);

   window.addEventListener('hashchange', () => {
      router(location.hash);
   });

});