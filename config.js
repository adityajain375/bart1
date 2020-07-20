import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyA1nBo7T8dY6w9MA32gzdBQe9MHYb_Ps2I",
    authDomain: "barter-ed111.firebaseapp.com",
    databaseURL: "https://barter-ed111.firebaseio.com",
    projectId: "barter-ed111",
    storageBucket: "barter-ed111.appspot.com",
    messagingSenderId: "987452980242",
    appId: "1:987452980242:web:5b6f03ed72e109fe76eccb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
export default firebase.firestore();