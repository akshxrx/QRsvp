// quasar/src/boot
import { firebaseInit } from '@gcto/firebase-hooks';
import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  app.use(() => {
    firebaseInit({
      apiKey: 'AIzaSyBBtHcMpIVZ5UdUKMFRN0ZxJdeeccTvEB8',
      authDomain: 'qrsvp-e3d86.firebaseapp.com',
      projectId: 'qrsvp-e3d86',
      storageBucket: 'qrsvp-e3d86.appspot.com',
      messagingSenderId: '49492438485',
      appId: '1:49492438485:web:920c4a0152ede67785a15c',
      measurementId: 'G-4V47BM1G0B',
    });
  });
});
