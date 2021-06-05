import { ingresar, ingresarGmail, ingresarFaceBook } from '../firebase/firebase.js';// traemos las funciones de firebase que autentica al usuario

export function iniciarSesion() { // template de # iniciar sesion
  const formularioInicioSesion = `
     <form class="formulario" id="formulario" method ="post">
         <h1>¡Hola de nuevo! </h1> 
         <div class="emailandpassword">
            <label for="email"></label><input type="email" id="email" placeholder="Email" required>
            <label for="password"></label><br>
            <input type="password" id="password" placeholder="Password" name="password" required ><br>
           <div id="botonIniciar">
            <div id="botonGato">
            <img src="Img/gato_negro_.png" alt=""> 
            <button type="button" id="botonIngresar">ingresar</button> <br>
            </div>
            </div>
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
export function funcionIngresar() { // esta funcion trae los input ingresados
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
    location.reload();
  }).catch((error) => {
    const errorMessage = error.message;
    // eslint-disable-next-line no-alert
    // alert(errorMessage);
  });
}

// iniciar sesion con google
export function iniciarConGoogle() { // asignamos el boton que tendra el evento para ejecutar ingresarGmail
  const registroGoogle = document.getElementById('botonGoogle');
  registroGoogle.addEventListener('click', () => {
    ingresarGmail().then(() => { // funcion traida de firebase si cumple pasa al muro
      window.location = '#/inicio';
      location.reload();
      console.log('ingreso gmail');
    }).catch((err) => {
      console.log(err);// si no capta el error y lo muestra en consola
    });
  });
}

// iniciar sesion con facebook
export function iniciarConFacebook() { // asignamos el boton que tendra el evento para ejecutar facebook
  const registroFacebook = document.getElementById('botonFacebook');
  registroFacebook.addEventListener('click', () => {
    ingresarFaceBook().then(() => {// funcion traida de firebase si cumple pasa al muro
      window.location = '#/inicio';
      location.reload();
      console.log('ingreso facebook');
    }).catch((err) => {
      console.log(err);// si no capta el error y lo muestra en consola
    });
  });
}

export function olvidarContrasena() { // redireccion a #restablecerContraseña
  const nuevaContrasena = document.getElementById('olvidarContrasena');
  nuevaContrasena.addEventListener('click', () => {
    window.location = '#/restablecerContrasena';
    location.reload();//recarga la nueva ubicacion
  });
}
