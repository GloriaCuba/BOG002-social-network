import { router } from './router/router.js';
import { inicializarFirebase } from './firebase/firebaseConfig.js';

window.addEventListener('load', () => {
  inicializarFirebase();
  router (window.location.hash);
});

window.addEventListener("haschange", () => {
  router(window.location.hash)
})

// let siguientePagina = document.getElementById("irDelante");
// siguientePagina.addEventListener("click", ()=> {
//   window.history.forward();
// })

// let paginaAnterior = document.getElementById("irAtras");
// paginaAnterior.addEventListener("click", ()=> {
//     window.history.back();
// })

//   window.history.go(-1)
// })




























// import { iniciarSesion } from '../components/iniciarSesion.js';
// import { registrarse } from '../components/registro.js';
// import { ingresar } from '../firebase/firebase.js';
// import { inicio } from '../components/paginaInicio.js';


// window.addEventListener("hashchange", procesarHash);
// function procesarHash() {
//   onNavigate(location.hash); return false;
// }

// document.addEventListener("DOMContentLoaded", function() {
//   let ingreso=document.getElementById("root");
//   ingreso.innerHTML="";

//  iniciarSesion();

// let boton=document.getElementById("botonIngresar");
//   boton.addEventListener("click", function(){
//   ingresar(inicio);
//   });

// let registro = document.getElementById("irRegistro");
// registro.addEventListener("click", function(){
// registrarse()
// })
// });

// let botonChange = document.getElementById("botonIngresar")
// botonChange.addEventListener("click", () => {
//     onNavigate('#/inicio'); return false;
//   });


// onclick="onNavigate('#/registro'); return false;"