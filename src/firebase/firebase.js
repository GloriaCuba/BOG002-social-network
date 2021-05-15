const firebaseConfig = {
  apiKey: 'AIzaSyChnpSpbN4XUjpjy-cVAXdAhlE8aMNIjX0',
  authDomain: 'social-network-sn9.firebaseapp.com',
  projectId: 'social-network-sn9',
  storageBucket: 'social-network-sn9.appspot.com',
  messagingSenderId: '227673003549',
  appId: '1:227673003549:web:c58d79d806e57adb2f58f4',
  measurementId: 'G-NX0STFY82X',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
auth.useDeviceLanguage();
// var db = firebase.firestore();

// signIn, singOut and Logout with firebase
export function ingresar(email, password) {
  const promise = firebase.auth().signInWithEmailAndPassword(email.value, password.value);
  return promise;
// preventDefault ()
}
export function autenticar(email, password) {
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  return promise;
}
export function verificarEmail() {
  const actionCodeSettings = {
    /* url: 'http://localhost:5000/#/iniciarSesion/?email=' + auth.currentUser.email, */
    url: 'http://localhost:5000/#/iniciarSesion',
    handleCodeInApp: true,
  };
  const promise = auth.currentUser.sendEmailVerification(actionCodeSettings);
  return promise;
}

export function ingresarGmail() {
  const provider = new firebase.auth.GoogleAuthProvider();
  // firebase.auth()
  const validarGmail = auth.signInWithPopup(provider);
  return validarGmail;
}

export function ingresarFaceBook() {
  const provider = new firebase.auth.FacebookAuthProvider();
  const validarFacebook = auth.signInWithPopup(provider);
  return validarFacebook;
}

export function cerrarSesión() {
  firebase.auth().signOut().then(() => {
    // eslint-disable-next-line no-console
    console.log('Signed Out');
  }, (error) => {
    // eslint-disable-next-line no-console
    console.error('Sign Out Error', error);
  });
}

/* export function estadoUsuario
 let estado = auth.onAuthStateChanged(function(user){
   console.log(estado)
 return estado
})
export function usuarioActual(){
let user = firebase.auth().currentUser;
let email = user.email;
console.log(user);
return user
} */

export function restablecimientoContrasena(email) {
  const emailAddress = email.value;
  const restablecer = auth.sendPasswordResetEmail(emailAddress);
  return restablecer;
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
