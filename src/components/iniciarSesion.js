/* eslint-disable max-len */
import { ingresar, ingresarGmail, ingresarFaceBook } from '../firebase/firebase.js';

export function iniciarSesion() {
  const formularioInicioSesion = `
     <form class="formulario" id="formulario" method ="post">
         <h1>¡Hola de nuevo! </h1> 
         <div class="emailandpassword">
            <label for="email"></label><input type="email" id="email" placeholder="Email" required>
            <label for="password"></label><br>
            <input type="password" id="password" placeholder="Password" name="password" required ><br>
            <img src="Img/gato_negro_.png" alt=""> 
            <button type="button" id="botonIngresar">ingresar</button> <br>
            <h4 id="olvidarContrasena" class="olvidarContrasena">¿Olvidaste tu contraseña?</h4>
         </div>
          <h6>O</h6>  
         <div class="inicioConProveedores"><h4>Ingresa con tu cuenta de Google o Facebook </h4></div>
          <figure>
             <img type="button" id="botonGoogle" src="img/Icono_Google.png"> 
             <img type="button" id="botonFacebook" src="img/Icono_Facebook.png">
           </figure> 
      
     </form>
    
 `;const divFormulario = document.createElement('div');
  divFormulario.className = 'formularioInicioSesion';
  divFormulario.innerHTML = formularioInicioSesion;
  return divFormulario;
}

// iniciar sesion con email y contraseña
export function funcionIngresar() {//esta funcion trae los input ingresados
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const botonIngresar = document.querySelector('#botonIngresar');

  botonIngresar.addEventListener('click', () => {
    redireccionLogin(email, password);//callback con valores de los parametros a usar
  });
}

export function redireccionLogin(email, password) {
  return ingresar(email, password).then(() => { // se trae la funcion ingresar de firebase
    window.location = '#/inicio';// si el proceso fue exitoso lo envia al muro
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }).catch((error) => {
  // const errorCode = error.code;
    const errorMessage = error.message;// si no capta el error y lo muestra en consola
    // eslint-disable-next-line no-alert
    // alert(errorMessage);
  });
}

// iniciar sesion con google
export function iniciarConGoogle() { // asignamos el boton que tendra el evento para ejecutar ingresarGmail
  const registroGoogle = document.getElementById('botonGoogle');
  registroGoogle.addEventListener('click', () => {
    ingresarGmail().then(() => {// funcion traida de firebase si cumple pasa al muro
      window.location = '#/inicio';
      // eslint-disable-next-line no-restricted-globals
      location.reload();
      // eslint-disable-next-line no-console
      console.log('ingreso gmail');
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);// si no capta el error y lo muestra en consola
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
