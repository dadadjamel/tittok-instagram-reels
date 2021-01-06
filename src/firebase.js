import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBC23opGZeWpmKBub40jk6P4xsYflA6j8w",
    authDomain: "tiktok-clone-32164.firebaseapp.com",
    databaseURL: "https://tiktok-clone-32164.firebaseio.com",
    projectId: "tiktok-clone-32164",
    storageBucket: "tiktok-clone-32164.appspot.com",
    messagingSenderId: "547332897600",
    appId: "1:547332897600:web:09e2de20ad668a898758a5",
    measurementId: "G-N9Y96N4PH9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db