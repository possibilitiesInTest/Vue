import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDw6FPmgtHp50QC-zA54YQow8M1FdMosGw",
  authDomain: "geo-ninjas-d1f03.firebaseapp.com",
  databaseURL: "https://geo-ninjas-d1f03.firebaseio.com",
  projectId: "geo-ninjas-d1f03",
  storageBucket: "geo-ninjas-d1f03.appspot.com",
  messagingSenderId: "561421015406"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
