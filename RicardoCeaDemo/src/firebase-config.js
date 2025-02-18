// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnIus5ZhUvXZVnZk2pFFehpEQNA9D2Ll4",
  authDomain: "apprazidemo-ricardocea.firebaseapp.com",
  projectId: "apprazidemo-ricardocea",
  storageBucket: "apprazidemo-ricardocea.firebasestorage.app",
  messagingSenderId: "28759874059",
  appId: "1:28759874059:web:2fbf5af6bd74b175d3850e",
  measurementId: "G-FSXH6DN36H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// Analíticas
const analytics = getAnalytics(app);

export default app;