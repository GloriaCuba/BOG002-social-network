import { router } from './router/router.js';
import { inicializarFirebase } from './firebase/firebaseConfig.js';

window.addEventListener('load', () => {
  inicializarFirebase();
  router (window.location.hash);
});

window.addEventListener("haschange", () => {
  router(window.location.hash)
 })

 /* const init = () => {
    // esto identifica cada on load si lo comentan nos toca darle recargar para que cambie la pantalla
    window.addEventListener('hashchange', () => {
      router(window.location.hash);
    });
    // si no le pasamos estos parametros no nos carga la pagina incial tan pronto ejecutamos
    router(window.location.hash);
    /* Validaciones para los Inputs Inicio de sesión
  }
  init();  */
  

//   function adelante() {
//       let siguientePagina = document.getElementById("irDelante");
//       siguientePagina.addEventListener("click", ()=> {
//         console.log("yo tambien")
//         location.assign(initialPage)
//       })
//       }
//     adelante()



    // function adelante(initialPage) {
    //   let siguientePagina = document.getElementById("irDelante");
    //   siguientePagina.addEventListener("click", ()=> {
    //     location.assign(initialPage)
    //   })
    //   }
    //   function direccionAdelante() {
    //     let initialPage =  window.history.forward();
    //     return initialPage
    //   }
      
    //   let irAdelante = direccionAdelante();
    //   adelante(irAdelante)      


//      function otro() {
//       function atras(initialPage) {
//           location.assign(initialPage)
//           }

//         function direccion() {
//           let paginaAtras = document.getElementById("irAtras");
//           paginaAtras.addEventListener("click", ()=> {
//           let initialPage =  window.history.back();
//           return initialPage
//         })
//       }

//         let ir = direccion();
//         atras(ir)
//       }
// otro()
   




  
  

// let paginaAnterior = document.getElementById("irAtras");
// paginaAnterior.addEventListener("click", ()=> {
//  let initialPage = window.history.back();
//  location.assign(initialPage)
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