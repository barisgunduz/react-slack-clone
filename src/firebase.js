import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCLHTRBEl096GDDI6B8-ByWBqaulNqvZYE",
    authDomain: "react-slack-clone-c412e.firebaseapp.com",
    projectId: "react-slack-clone-c412e",
    storageBucket: "react-slack-clone-c412e.appspot.com",
    messagingSenderId: "463791543425",
    appId: "1:463791543425:web:c3a97cf24f221a5aa36980",
    measurementId: "G-S7SBK4KZGL",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
