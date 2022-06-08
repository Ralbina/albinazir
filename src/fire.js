import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqtgYIc8-e6eiN5SFkOWVbCYhXCa9Lvw4",
  authDomain: "albinazir-project.firebaseapp.com",
  projectId: "albinazir-project",
  storageBucket: "albinazir-project.appspot.com",
  messagingSenderId: "56543966169",
  appId: "1:56543966169:web:fd2bd99fe23ab601d61fc8",
  measurementId: "G-TS5ZWZ9VZC",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
