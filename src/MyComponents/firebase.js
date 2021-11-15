import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5pf6veKwVOwZbOzxVUmhjaGMCuv3fStw",
    authDomain: "fake-clone-a853e.firebaseapp.com",
    projectId: "fake-clone-a853e",
    storageBucket: "fake-clone-a853e.appspot.com",
    messagingSenderId: "753859718186",
    appId: "1:753859718186:web:7be046ba86d1cd0b642753",
    measurementId: "G-VHGCW6RJSN"
  };

  //HERE we have to do 2-3 steps
  const firebaseApp = firebase.initializeApp(firebaseConfig);   // 1---> Initializing the firebase app

  
  const db = firebaseApp.firestore();  // 2----> realtime database 
  const auth = firebaseApp.auth();       // 3-----> gives us the variable to authentication that we do login logout 

  export { db , auth };  //---> so we can actually use in outside the file.