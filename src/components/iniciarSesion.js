/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { ingresar, ingresarGmail, ingresarFaceBook } from '../firebase/firebase.js';

export function iniciarSesion() {
  const formularioInicioSesion = `
     <form class="formulario" id="formulario" method ="post">
         <h1>¡Hola de nuevo! </h1> 
         <div class="emailandpassword">
            <label for="email"></label><input type="email" id="email" placeholder="Email" required>
            <label for="password"></label><br>
            <input type="password" id="password" placeholder="Password" name="password" required ><br>
           <div id="botonGato">
            <img id='gato'src="Img/gato_negro_.png" alt=""> 
            <button type="button" id="botonIngresar">ingresar</button> <br>
           </div>
          </div>
          <h4 id="olvidarContrasena" class="olvidarContrasena">¿Olvidaste tu contraseña?</h4> 
          <h6>O</h6>  
         <div class="inicioConProveedores"><h4>Ingresa con tu cuenta de Google o Facebook </h4></div>
             <img type="button" id="botonGoogle" src='Img/Icono_Google.png'> </img>
             <img type="button" id="botonFacebook" src='Img/Icono_Facebook.png'></img>
           
      
     </form>
    
 `;const divFormulario = document.createElement('div');
  divFormulario.className = 'formularioInicioSesion';
  divFormulario.innerHTML = formularioInicioSesion;
  return divFormulario;
}

export function pruebaGato(){
 const botonGato= document.getElementById('gato');
 botonGato.addEventListener('click',()=>{
   console.log('hola gato')
 });

}

// iniciar sesion con email y contraseña
export function funcionIngresar() {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const botonIngresar = document.querySelector('#botonIngresar');

  botonIngresar.addEventListener('click', () => {
    redireccionLogin(email.value, password.value);
  });
}

export function redireccionLogin(email, password) {
  return ingresar(email, password).then(() => {
    window.location = '#/inicio';
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }).catch((error) => {
    const errorMessage = error.message;
    // eslint-disable-next-line no-alert
    // alert(errorMessage);
  });
}

// iniciar sesion con google
export function iniciarConGoogle() {
  const registroGoogle = document.getElementById('botonGoogle');
  registroGoogle.addEventListener('click', () => {
    ingresarGmail().then(() => {
      window.location = '#/inicio';
      // eslint-disable-next-line no-restricted-globals
      location.reload();
      // eslint-disable-next-line no-console
      console.log('ingreso gmail');
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  });
}

// iniciar sesion con facebook
export function iniciarConFacebook() {
  const registroFacebook = document.getElementById('botonFacebook');
  registroFacebook.addEventListener('click', () => {
    ingresarFaceBook().then(() => {
      window.location = '#/inicio';
      // eslint-disable-next-line no-restricted-globals
      location.reload();
      // eslint-disable-next-line no-console
      console.log('ingreso facebook');
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  });
}

export function olvidarContrasena() {
  const nuevaContrasena = document.getElementById('olvidarContrasena');
  nuevaContrasena.addEventListener('click', () => {
    window.location = '#/restablecerContrasena';
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
}
