import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCzixvaByhOIIeDC49zXlJQcOqnVC9eU90",
  authDomain: "geo-ninjas-dcdd3.firebaseapp.com",
  databaseURL: "https://geo-ninjas-dcdd3.firebaseio.com",
  projectId: "geo-ninjas-dcdd3",
  storageBucket: "",
  messagingSenderId: "799733320183"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
