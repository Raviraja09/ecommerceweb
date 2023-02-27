
import  Firebase from firebase;
const FirebaseConfig = {
  apiKey: "AIzaSyA85r2CpegHzksRz5PyHVZwav2epZF8c2o",
  authDomain: "ecomwebsite-43ebc.firebaseapp.com",
  projectId: "ecomwebsite-43ebc",
  storageBucket: "ecomwebsite-43ebc.appspot.com",
  messagingSenderId: "983274322040",
  appId: "1:983274322040:web:f01baa3eef1aa7ff33558d"
};

Firebase.initializeApp(FirebaseConfig);
const db = Firebase.firestore();
const auth = Firebase.auth();
  export {auth};
  export default db;

 