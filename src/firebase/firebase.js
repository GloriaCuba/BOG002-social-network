const firebaseConfig = {
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
const auth = firebase.auth();

export function ingresar(email, password) {
  const promise = firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  return promise
};

export function autenticar(email, password){
  const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  return promise   
};


 

// function cerrarSesión(){
//   auth.signOut();
//   alert ("Has cerrado sesión")  
// }