import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyCRoEIFqsajGnRzcX-bF8iUzccvyeg-Uc8",
   authDomain: "react-pruba-auth.firebaseapp.com",
   projectId: "react-pruba-auth",
   storageBucket: "react-pruba-auth.appspot.com",
   messagingSenderId: "577395181321",
   appId: "1:577395181321:web:c43f1622abfe94dcf2b5d8"
 };
 // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
 const auth = fire.auth();


 export {auth} ;