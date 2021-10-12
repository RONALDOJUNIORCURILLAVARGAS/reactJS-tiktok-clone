import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBRhI9-TOQ0aDJamHb3WWtXGMsFe1rbxfo",
    authDomain: "tiktok-clone-6822e.firebaseapp.com",
    projectId: "tiktok-clone-6822e",
    storageBucket: "tiktok-clone-6822e.appspot.com",
    messagingSenderId: "275985919674",
    appId: "1:275985919674:web:b4c42030cd323a9f5ddc83"
  };
  const firebaseApp= 
  firebase.initializeApp(firebaseConfig);
  
   const db=firebaseApp.firestore();

   export default db;