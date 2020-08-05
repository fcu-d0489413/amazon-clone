import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB7brwvixJYcxwrUGvRNIy_Cwk59dlj7yc",
    authDomain: "clone-d3b74.firebaseapp.com",
    databaseURL: "https://clone-d3b74.firebaseio.com",
    projectId: "clone-d3b74",
    storageBucket: "clone-d3b74.appspot.com",
    messagingSenderId: "601318417633",
    appId: "1:601318417633:web:e4c33ffd6303180bd043a0",
    measurementId: "G-8JKX8R746Z"
})

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export{ auth };