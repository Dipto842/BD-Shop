// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADwjMKjuxaNWcmujAFdk8cNeCAk-rcRwA",
  authDomain: "bd-shop-82d15.firebaseapp.com",
  projectId: "bd-shop-82d15",
  storageBucket: "bd-shop-82d15.firebasestorage.app",
  messagingSenderId: "882510215639",
  appId: "1:882510215639:web:bd14a2dad8bdca1a3fb392",
  measurementId: "G-W6D7EE87QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//  const auth = getAuth(app);

 export default app
