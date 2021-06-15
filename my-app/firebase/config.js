import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvbPJtyGAXyyCuoTI1a6XMpCXCTbt9uYo",
    authDomain: "farmers-market-5e404.firebaseapp.com",
    projectId: "farmers-market-5e404",
    storageBucket: "farmers-market-5e404.appspot.com",
    messagingSenderId: "857164056553",
    appId: "1:857164056553:web:f7084871ddc352d06dad78"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const projectStorage = firebase.storage();

export default projectStorage;