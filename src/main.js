import { router } from '../router/router.js'

window.addEventListener("load", () => {
router(window.location = '#/iniciarSesion')
});

window.addEventListener("hashchange", () => {
  router(window.location.hash)
})

























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