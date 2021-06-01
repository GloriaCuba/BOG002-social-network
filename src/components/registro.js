/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import {
  autenticar, verificarEmail, ingresarGmail, ingresarFaceBook,
  // traemos las funciones de autenticacion de firebase
} from '../firebase/firebase.js';
import { validarFormulario } from './validacionFormulario.js';// funcion para condicionar el formulario de registro, expresiones regulares contraseña

export function registrarse() {
  const registro = `
    <div id="formularioRegistro" class="formularioRegistro">
      <h1>¡Bienvenido!</h1>
      <p> Estas a punto de hacer parte de la red más divertida</p>
        <form id="formularioInputs">
          <input type="email" id="emailAuth" placeholder="E-mail" name="email" required ><br>
          <input type="password" id="passwordAuth" placeholder="Contraseña" name="contraseña" required > <br>
          <p class="descripcionError" id="descripcionError"> La contraseña debe ser de almenos 6 digitos y contener una mayuscula y un numero</p><br>
          <input type="password" id="passwordAuth2" placeholder="Valida tu contraseña" name="contraseña2" required> <br>
          <button type="button" id="botonUnirse">Unirme</button> 
        </form>
      <h6>O</h6>  
      <p class="registroProveedores">Regístrate con tu cuenta de Google o Facebook</p>
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

export function funcionAutenticar() {// funcion con evento keyup y blur, sobre el id de los campos ingresados
  const email = document.querySelector('#emailAuth');
  email.addEventListener('keyup', validarFormulario);// validar formulario compara con las expresiones regulares predeterminadas
  email.addEventListener('blur', validarFormulario);

  const password = document.querySelector('#passwordAuth');
  password.addEventListener('keyup', validarFormulario);
  password.addEventListener('blur', validarFormulario);

  const password2 = document.querySelector('#passwordAuth2');
  password2.addEventListener('keyup', validarFormulario);
  password2.addEventListener('blur', validarFormulario);

  const botonIngresar = document.querySelector('#botonUnirse');// este evento ejecutara autenticar(promesa?)
  botonIngresar.addEventListener('click', () => {
    autenticar(email, password).then(() => { // si los datos cumplen las condiciones se ejecuta autenticar
      // eslint-disable-next-line no-alert
      // alert('Te hemos enviado un correo electrónico, valídalo para iniciar sesión');
      verificarEmail();// funcion de firebase, envia correo de verificacion
      irConfigPerfil();
      /* Aquí iría la Configuración para ir a #/configuracionPerfil */
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(error);
    });
  });
}

export function irConfigPerfil() { // cambia pantalla a configuracion de perfil
  window.location = '#/configuracionPerfil';
  location.reload();
  // });
}
export function registroConGoogle() {// este evento ejecuta ingresarGmail, de firebase
  const registroGoogle = document.getElementById('registroGmail');
  registroGoogle.addEventListener('click', () => {
    ingresarGmail().then(() => {
      window.location = '#/inicio';// si se ejecuta correctamente cambia pantalla a inicio(muro)
      location.reload();
      console.log('ingreso gmail');
    }).catch((error) => {
      console.log(error);
    });
  });
}

export function registroConFacebook() {// este evento ejecuta ingresarFacebook, de firebase
  const registroFacebook = document.getElementById('registroFacebook');
  registroFacebook.addEventListener('click', () => {
    ingresarFaceBook().then(() => {
      window.location = '#/inicio';// si se ejecuta correctamente cambia pantalla a inicio(muro)
      location.reload();
      console.log('ingreso facebook');
    }).catch((error) => {
      console.log(error);
    });
  });
}
