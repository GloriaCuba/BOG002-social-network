import { restablecimientoContrasena } from '../firebase/firebase.js';

export function resetContraseña() {
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
  // eslint-disable-next-line no-alert
    alert('Revisa tu correo');
    // eslint-disable-next-line no-console
    console.log('hola');
    restablecimientoContrasena(email).then(() => {
      // window.location = "http://localhost:5000/"
      //    location.reload()
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
  });
}
