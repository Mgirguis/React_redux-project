
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

// Initialize firebase

var firebaseConfig = {
    apiKey: "AIzaSyD9wiPlflv9d9iqQV5GeU140dIbx4QFDM8",
    authDomain: "time-manage-react.firebaseapp.com",
    databaseURL: "https://time-manage-react.firebaseio.com",
    projectId: "time-manage-react",
    storageBucket: "time-manage-react.appspot.com",
    messagingSenderId: "1022139967156",
    appId: "1:1022139967156:web:cff9faf0a0d2277464d9e1"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;
