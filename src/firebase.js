import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {

    apiKey: "AIzaSyAFX4ysQQFWZnVV3QNzrQxSb4YINvcZ0V0",

    authDomain: "fileuploadsystem-11566.firebaseapp.com",

    projectId: "fileuploadsystem-11566",

    storageBucket: "fileuploadsystem-11566.appspot.com",

    messagingSenderId: "210513204324",

    appId: "1:210513204324:web:b36761e824b7feef203b71",

    measurementId: "G-S2H29MVW6K"

};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const storageRef = firebase().storage().ref();

export { app, storage }