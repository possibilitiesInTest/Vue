import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBoJeFNfNl0uHAaHBQHSDS1TaPqM9cEvEE",
    authDomain: "chat-app-3336a.firebaseapp.com",
    databaseURL: "https://chat-app-3336a.firebaseio.com",
    projectId: "chat-app-3336a",
    storageBucket: "chat-app-3336a.appspot.com",
    messagingSenderId: "10751665362"
  };
const firebaseApp =  firebase.initializeApp(config);

export default firebaseApp.firestore()
