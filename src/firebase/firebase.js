// funcion ingresar con email y contraseña
export function ingresar(email, password) {
  const promise = auth.signInWithEmailAndPassword(email.value, password.value)
  return promise;
  // preventDefault ()
}

// funcion registrarse con email y contraseña
export function autenticar(email, password) {
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  return promise;
}

// funcion registrarse y verificacion del email escrito
export function verificarEmail() {
  const actionCodeSettings = {
    /* url: 'http://localhost:5000/#/iniciarSesion/?email=' + auth.currentUser.email, */
    url: 'http://localhost:5000/#/iniciarSesion',
    handleCodeInApp: true,
  };
  const promise = firebase.auth().currentUser.sendEmailVerification(actionCodeSettings);
  return promise;
}

// funcion de ingresar con gmail 
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
