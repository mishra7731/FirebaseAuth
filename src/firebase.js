import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAt5em7mXR1otLz4-xjchuLDvtDCpx7bfk",
    authDomain: "fir-auth-development-5fa69.firebaseapp.com",
    projectId: "fir-auth-development-5fa69",
    storageBucket: "fir-auth-development-5fa69.appspot.com",
    messagingSenderId: "874183193553",
    appId: "1:874183193553:web:92fc526b938f1e930666f0",
    measurementId: "G-H7X7YR9NE5"

});

const auth = app.auth();
export { auth };
export default app;
    