// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.APKI,
  authDomain: import.meta.env.AUTHDOMENT,
  projectId: import.meta.env.PROJEKTID,
  storageBucket: import.meta.env.STOREJT,
  messagingSenderId: import.meta.env.MESSSENDID,
  appId: import.meta.env.APPID,
  measurementId: import.meta.env.MEASUID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
