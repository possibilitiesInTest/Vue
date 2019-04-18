import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCsb0d5jym4B1bH6WUvgsbah_0t9AQQF-U",
  authDomain: "ninja-smoothies-a2361.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-a2361.firebaseio.com",
  projectId: "ninja-smoothies-a2361",
  storageBucket: "ninja-smoothies-a2361.appspot.com",
  messagingSenderId: "882393146420"
};

const firebaseApp = firebase.initializeApp(config);

// Export firestore db
export default firebaseApp.firestore();
