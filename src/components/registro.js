/* eslint-disable no-restricted-globals */
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
          <div class="divFormularioInputs">
            <input type="email" id="emailAuth" placeholder="E-mail" name="email" required ><br>
            <input type="password" id="passwordAuth" placeholder="Contraseña" name="password" required >
            <p class="descripcionError" id="descripcionError"> La contraseña debe ser de al menos 6 digitos, contener una mayuscula y un numero</p><br>
            <input type="password" id="passwordAuth2" placeholder="Valida tu contraseña" name="password2" required> <br>
            <button type="button" id="botonUnirse">Unirme</button> 
          </div>
        </form>
        <h6>O</h6>  
      <p class="registroProveedores">Regístrate con tu cuenta de Google o Facebook</p>
      <figure>
        <img type="button" id="registroGmail" src="Img/Icono_Google.png"> 
        <img type="button" id="registroFacebook" src="Img/Icono_Facebook.png">
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
  // email.addEventListener('blur', validarFormulario);

  const password = document.querySelector('#passwordAuth');
  password.addEventListener('keyup', validarFormulario);
  // password.addEventListener('blur', validarFormulario);

  const password2 = document.querySelector('#passwordAuth2');
  password2.addEventListener('keyup', validarFormulario);
  // password2.addEventListener('blur', validarFormulario);

  const botonIngresar = document.querySelector('#botonUnirse');
  botonIngresar.addEventListener('click', () => {
    autenticar(email.value, password.value).then(() => {
      // eslint-disable-next-line no-alert
      alert('Te hemos enviado un correo electrónico, valídalo para iniciar sesión');
      verificarEmail();
      irConfigPerfil();
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

export function irConfigPerfil() {
  window.location = '#/configuracionPerfil';
  location.reload();
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
