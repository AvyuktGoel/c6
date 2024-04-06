import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCv7OlgmkSTvjSt2rELoVpDy3csDb0F6eE",
  authDomain: "eride-345dd.firebaseapp.com",
  projectId: "eride-345dd",
  storageBucket: "eride-345dd.appspot.com",
  messagingSenderId: "673161184699",
  appId: "1:673161184699:web:b5178b86933d6187fa709e"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
