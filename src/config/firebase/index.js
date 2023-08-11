import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBRhJvBlJubxgjtZHlppiBo5_bQp2fLrwM',
    authDomain: 'multi-programingcourse.firebaseapp.com',
    projectId: 'multi-programingcourse',
    storageBucket: 'multi-programingcourse.appspot.com',
    messagingSenderId: '642711008437',
    appId: '1:642711008437:web:bd11e6dce6ebc7e2397afc',
    measurementId: 'G-VVST4LKFX0',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
