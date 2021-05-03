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


export function ingresar() {
  let email = document.getElementById("email"); 
  let password = document.getElementById("password"); 
  console.log(email.value, password.value)
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
};


  // console.log("no funciona :(")})

//   promise.catch(function(error) {
//     console.log(console.log(error))});
// return promise




// promise.catch(function(error) {
//   console.log(alert(error))});

// let botonRegistrarse=document.getElementById("botonSubir");
// botonRegistrarse.addEventListener("click", function(){
//   console.log("funcina")
// })

// let botonRegistr=document.getElementById("botonSubir");
// botonRegistra.addEventListener("click", autenticar);
//   function autenticar(){
//   console.log("Botón Enviar")
//   let email = document.getElementById("emailRegistrarse"); 
//   let password = document.getElementById("passwordRegistrarse"); 
//   const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
//   promise.catch(e =>alert(e.message));
//   alert("Registrado");    
// };




// let botonSubir= document.getElementById("botonSubir").addEventListener("click", autenticar);   
// let botonCerrarSesión= document.getElementById("botonCerrarSesión").addEventListener("click", cerrarSesión);  





// function cerrarSesión(){
//   auth.signOut();
//   alert ("Has cerrado sesión")  
// }