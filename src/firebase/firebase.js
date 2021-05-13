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

// funcion ingresar con email y contraseña
export function ingresar(email, password) {
  const promise = firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  return promise;
  preventDefault ()
}

// funcion registrarse con email y contraseña
export function autenticar(email, password) {
  const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  return promise;
}

// funcion registrarse y verificacion del email escrito
export function verificarEmail() {
  let actionCodeSettings = {
   /* url: 'http://localhost:5000/#/iniciarSesion/?email=' + auth.currentUser.email,*/
    url: 'http://localhost:5000/#/iniciarSesion',
    handleCodeInApp: true,
  };
  const promise = auth.currentUser.sendEmailVerification(actionCodeSettings);
  return promise;
}

// funcion de ingresar con gmail 
export function ingresarGmail() {
  let provider = new firebase.auth.GoogleAuthProvider();
  //firebase.auth()
  const validarGmail=auth.signInWithPopup(provider)
  return validarGmail
}

// funcion de ingresar con facebook
export function ingresarFaceBook(){
var provider = new firebase.auth.FacebookAuthProvider();
const validarFacebook=auth.signInWithPopup(provider)
return validarFacebook
}

// funcion de cerrar sesion 
export function cerrarSesión(){
 firebase.auth().signOut().then(function() {
    console.log('Signed Out');
  }, function(error) {
    console.error('Sign Out Error', error);
  });
 }


export function restablecimientoContrasena(email){
var emailAddress = email.value;
var restablecer= auth.sendPasswordResetEmail(emailAddress)
return restablecer
}




  // auth.signOut().then(()=>{
  // console.log('user signed out')
  // })
  


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

