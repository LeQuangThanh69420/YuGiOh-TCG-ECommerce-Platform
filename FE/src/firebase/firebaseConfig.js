// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//Nhap API cua firebase de su dung
const firebaseConfig = {
  apiKey: "AIzaSyDfdeVmPPB-In2mRlZAhuiUK-vQtIJ817g",
  authDomain: "upload-file-ac9d3.firebaseapp.com",
  projectId: "upload-file-ac9d3",
  storageBucket: "upload-file-ac9d3.appspot.com",
  messagingSenderId: "681928462243",
  appId: "1:681928462243:web:d4cca61c1fad5330b7d416",
  measurementId: "G-LTECRK913F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);