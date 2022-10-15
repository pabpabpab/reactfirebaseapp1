import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCsqNgxTlrGubFXt8VgUg2D5TTtYT4Ch4g",
    authDomain: "fblesson2-c6cb9.firebaseapp.com",
    projectId: "fblesson2-c6cb9",
    storageBucket: "fblesson2-c6cb9.appspot.com",
    messagingSenderId: "600534399565",
    appId: "1:600534399565:web:e1e6eb87a9f1e0609c3a04"
};

const firebaseDb = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = firebase.database().ref();
//export const db = firebase.database();

