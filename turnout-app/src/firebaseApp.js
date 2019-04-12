import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBghZlLn1yKQ_IVHQN-rsOkkcptojafHsM",
  authDomain: "turnout-fdaad.firebaseapp.com",
  databaseURL: "https://turnout-fdaad.firebaseio.com",
  projectId: "turnout-fdaad",
  storageBucket: "turnout-fdaad.appspot.com",
  messagingSenderId: "869395250784"
};

export const firebaseApp = firebase.initializeApp(config);
