import { restablecimientoContrasena } from '../firebase/firebase.js';

export function resetContraseña() {// template de #restablecerContraseña
  const inputEmail = `      
            <div class="imagen"> <img src="Img/imagen_restablecer.png" alt=""> </div>
            <div class="descripcion"> <h4> Restablece tu contraseña ingresando tu correo <br> acontinuación</h4></div>
            <div class="input"><label for="email"></label><br>
             <input type="email" id="emailRestablecer" placeholder="Email" required><br>
             <button type="button" id="botonRestablecer">Restablecer</button> 
             </div>   
    `;
  const divRestablecer = document.createElement('div');
  divRestablecer.className = 'formularioRestablecerContrasena';
  divRestablecer.innerHTML = inputEmail;
  return divRestablecer;
}

// restablecimiento de contraseña
export function restableceContrasena() {
  const email = document.getElementById('emailRestablecer');
  const botonRestablecer = document.getElementById('botonRestablecer');
  botonRestablecer.addEventListener('click', () => {
    alert('Revisa tu correo');
    console.log('hola');
    restablecimientoContrasena(email).then(() => {// ejecuta restablecimientoContraseña de firebase, quien envia correo predeterminado para restablecer contraseña
      irPrincipal();
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
  });
}
export function irPrincipal() { // cambia pantalla a iniciar sesion
  window.location = '#iniciarSesion';
  location.reload();
  // });
}