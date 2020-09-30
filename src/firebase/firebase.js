import firebase from "firebase";

const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: "challenge-24531.firebaseapp.com",
  databaseURL: "https://challenge-24531.firebaseio.com",
  projectId: "challenge-24531",
  storageBucket: "challenge-24531.appspot.com",
  messagingSenderId: "199948163151",
  appId: "1:199948163151:web:de6ea9a4279ebf6a4bb23a",
  measurementId: "G-59N9EKYCCG",
};

//Initialize our firebase app with firebaseconfig
const firebaseApp = firebase.initializeApp(firebaseConfig);

//create database using firestore
const db = firebaseApp.firestore();

//variable for handling sign-in stuff
const auth = firebase.auth();

export { db, auth };
