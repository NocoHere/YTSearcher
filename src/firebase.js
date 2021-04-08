import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBu-S6N7tCbysbwc4UIrQ1DBFLO3I1DzAY",
    authDomain: "yt-app-b6654.firebaseapp.com",
    databaseURL: "https://yt-app-b6654-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "yt-app-b6654",
    storageBucket: "yt-app-b6654.appspot.com",
    messagingSenderId: "1038815354154",
    appId: "1:1038815354154:web:52b0513b47db2a1c739253"
};

const fire = firebase.initializeApp(config);

export default fire;