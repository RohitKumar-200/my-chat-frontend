import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAjElOrPvxEcvIQF7MGeW_a6tFQL_tIh5o",
    authDomain: "my-chat-289919.firebaseapp.com",
    databaseURL: "https://my-chat-289919.firebaseio.com",
    projectId: "my-chat-289919",
    storageBucket: "my-chat-289919.appspot.com",
    messagingSenderId: "288110601189",
    appId: "1:288110601189:web:9e3a2e84d8e9d89dcfc50c",
    measurementId: "G-L69R4N5RCE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};