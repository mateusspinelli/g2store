import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_b8typ7Kd9NFRaomg4-8EnvE7b31J8R0",
    authDomain: "g2store-f6710.firebaseapp.com",
    projectId: "g2store-f6710",
    storageBucket: "g2store-f6710.appspot.com",
    messagingSenderId: "728492316705",
    appId: "1:728492316705:web:4618c355c8cdfbf36eeb60",
    measurementId: "G-VEWL54QCQW"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};