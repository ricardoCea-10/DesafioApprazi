// AuthUI.jsx
import React, { useEffect, useRef } from 'react';
// import { EmailAuthProvider } from 'firebase/auth';
// import * as firebaseui from 'firebaseui';
import { auth } from '../firebase/firebase-config.js'; // Al importar auth desde firebase pantalla se pone negro. ¿por que?
// import 'firebaseui/dist/firebaseui.css';

const AuthUI = () => {
  
console.log("Auth object:", auth); 

  return (
    <div>
      <h1>Authorization component </h1>
    </div>
  )
};
export default AuthUI;
