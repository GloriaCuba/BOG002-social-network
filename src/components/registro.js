import {
  autenticar, verificarEmail, ingresarGmail, ingresarFaceBook,
} from '../firebase/firebase.js';
import { validarFormulario } from './validacionFormulario.js';

export function registrarse() {
  const registro = `
    <div id="formularioRegistro" class="formularioRegistro">
      <h1>¡Bienvenido!</h1>
      <p> Estas a punto de hacer parte de la red más divertida</p>
        <form id="formularioInputs">
        <input type="email" id="emailAuth" placeholder="E-mail" name="email" required >
        <input type="password" id="passwordAuth" placeholder="Contraseña" name="contraseña" required >
        <p class="descripcionError" id="descripcionError"> La contraseña debe ser de almenos 6 digitos y contener una mayuscula y un numero</p><br>
        <input type="password" id="passwordAuth2" placeholder="Valida tu contraseña" name="contraseña2" required >
        <button type="button" id="botonUnirse">Unirme</button> 
        </form>
      <h6>O</h6>  
      <p>Regístrate con tu cuenta de Google o Facebook</p>
      <figure>
        <img type="button" id="registroGmail" src="img/Icono_Google.png"> 
        <img type="button" id="registroFacebook" src="img/Icono_Facebook.png">
      </figure>
    </div>
    `;
  const divRegistro = document.createElement('div');
  divRegistro.innerHTML = registro;
  return divRegistro;
}

export function funcionAutenticar() {
  const email = document.querySelector('#emailAuth');
  email.addEventListener('keyup', validarFormulario);
  email.addEventListener('blur', validarFormulario);

  const password = document.querySelector('#passwordAuth');
  password.addEventListener('keyup', validarFormulario);
  password.addEventListener('blur', validarFormulario);

  const password2 = document.querySelector('#passwordAuth2');
  password2.addEventListener('keyup', validarFormulario);
  password2.addEventListener('blur', validarFormulario);

  const botonIngresar = document.querySelector('#botonUnirse');
  botonIngresar.addEventListener('click', () => {
    autenticar(email, password).then(() => {
      // eslint-disable-next-line no-alert
      alert('Te hemos enviado un correo electrónico, valídalo para iniciar sesión');
      verificarEmail();
      /* Aquí iría la Configuración para ir a #/configuracionPerfil */
    }).catch((error) => {
      const errorMessage = error.message;
      // eslint-disable-next-line no-alert
      alert(errorMessage);
      // eslint-disable-next-line no-console
      console.log(error);
    });
  });
}

export function registroConGoogle() {
  const registroGoogle = document.getElementById('registroGmail');
  registroGoogle.addEventListener('click', () => {
    ingresarGmail().then(() => {
      window.location = '#/inicio';
      // eslint-disable-next-line no-restricted-globals
      location.reload();
      // eslint-disable-next-line no-console
      console.log('ingreso gmail');
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
  });
}

export function registroConFacebook() {
  const registroFacebook = document.getElementById('registroFacebook');
  registroFacebook.addEventListener('click', () => {
    ingresarFaceBook().then(() => {
      window.location = '#/inicio';
      // eslint-disable-next-line no-restricted-globals
      location.reload();
      // eslint-disable-next-line no-console
      console.log('ingreso facebook');
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
  });
}
