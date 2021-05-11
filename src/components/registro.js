import {autenticar, verificarEmail, ingresarGmail, ingresarFaceBook } from '../firebase/firebase.js';
export function registrarse() {
  const registro = `
    <div class="formularioRegistro">
      <h1>¡Bienvenido!</h1>
      <p> Estas a punto de hacer parte de la red más divertida</p>
        <div>
        <input type="email" id="emailAuth" placeholder="E-mail" required >
        <input type="password" id="passwordAuth" placeholder="Contraseña" required >
        <input type="password" id="passwordAuth" placeholder="Valida tu contraseña" required >
        <button type="button" id="botonUnirse">Unirme</button> 
        </div>
      <h6>O</h6>  
      <p>Regístrate con tu cuenta de Google o Facebook</p>
      <figure>
        <img type="button" id="registroGmail" src="img/Icono_Google.png"> 
        <img type="button" id="registroFacebook" src="img/Icono_Facebook.png">
      </figure>
    </div>
    `
  const divRegistro = document.createElement('div');
  divRegistro.innerHTML = registro;
  return divRegistro;
}

export function funcionAutenticar() {
  const email = document.querySelector('#emailAuth');
  const password = document.querySelector('#passwordAuth');
  const botonIngresar = document.querySelector('#botonUnirse');
  botonIngresar.addEventListener('click', () => {
    autenticar(email, password).then(() => {
      alert('Te hemos enviado un correo electrónico, valídalo para iniciar sesión');
      verificarEmail();
    }).catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(error);
    });
  });
}



export function registroConGoogle() {
  const registroGoogle = document.getElementById('registroGmail');
  registroGoogle.addEventListener('click', () => {
    ingresarGmail().then(() => {
      window.location = '#/inicio';
      location.reload();
      console.log('ingreso gmail');
    }).catch((error) => {
      console.log(error);
    });
  });
}

export function registroConFacebook() {
  const registroFacebook = document.getElementById('registroFacebook');
  registroFacebook.addEventListener('click', () => {
    ingresarFaceBook().then(() => {
      window.location = '#/inicio';
      location.reload();
      console.log('ingreso facebook');
    }).catch((error) => {
      console.log(error);
    });
  });
}
