// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
myFunction();

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyChnpSpbN4XUjpjy-cVAXdAhlE8aMNIjX0",
    authDomain: "social-network-sn9.firebaseapp.com",
    projectId: "social-network-sn9",
    storageBucket: "social-network-sn9.appspot.com",
    messagingSenderId: "227673003549",
    appId: "1:227673003549:web:c58d79d806e57adb2f58f4",
    measurementId: "G-NX0STFY82X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth =firebase.auth();
  
  let botonSubir= document.getElementById("botonSubir").addEventListener("click", function autenticar() {  
    let email = document.getElementById("email"); 
    let password = document.getElementById("password"); 
    const promise = auth.createUSerEmailPassword(email.value,password.value);
    alert ("Registrado");
  });