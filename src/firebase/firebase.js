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
auth.useDeviceLanguage();
// var db = firebase.firestore();

// signIn, singOut and Logout with firebase
export function ingresar(email, password) {
  const promise = firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  return promise
}

export function autenticar(email, password){
  const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  return promise   
}

export function verificarEmail(){
  const promise = auth.currentUser.sendEmailVerification();
  return promise
}
export function ingresarGmail() {
  let provider = new firebase.auth.GoogleAuthProvider();
  //firebase.auth()
  const validarGmail=auth.signInWithPopup(provider)
  return validarGmail
}

export function ingresarFaceBook(){
var provider = new firebase.auth.FacebookAuthProvider();
const validarFacebook=auth.signInWithPopup(provider)
return validarFacebook
}

export function cerrarSesión(){
 const salir= auth.signOut();
 return salir
}

export function restablecimientoContrasena(email){
var emailAddress = email.value;
var restablecer= auth.sendPasswordResetEmail(emailAddress)
return restablecer
}



// fireStore 
// export function post(publicacion) {
// auth.onAuthStateChanged(user => {
//   if (user) {
//     db.collection("publicaciones")
//     .get()
//     .then((snapshot)=> {
//      publicacion(snapshot.docs)
//      console.log(snapshot.docs)
//     })
//   } else {
//     console.log("signout")
//    }
//  })
// }

