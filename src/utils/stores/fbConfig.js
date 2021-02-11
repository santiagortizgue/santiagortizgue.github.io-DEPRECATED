import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var config = {
    apiKey: "AIzaSyDwO4tMP3qSDiE8hny-V6VNbGPxBTD8sP8",
    authDomain: "portfolio-a8c67.firebaseapp.com",
    projectId: "portfolio-a8c67",
    storageBucket: "portfolio-a8c67.appspot.com",
    messagingSenderId: "175469779449",
    appId: "1:175469779449:web:c043810a440324a64a4528",
    measurementId: "G-YDWE8109EZ"
};

firebase.initializeApp(config);

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth =  firebase.auth();

export default firebase;