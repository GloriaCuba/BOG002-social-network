import { ingresar } from '../firebase/firebase.js'

export function iniciarSesion() {
   let formulario =

   `<form class="formulario" id="formulario" method ="post">
    <h1>PETBOOK</h1>
    <div class="inicioGoogleFacebook">
         <button type="button" id="botonGoogle">Google</button> <br>
         <button type="button" id="Facebook">Facebook</button> <br>
     </div>
     <div class="emailandpasword">
        <label for="email"></label><input type="email" id="email" placeholder="Email" required>
        <label for="password"></label><br>
        <input type="password" id="password" placeholder="Password" name="password" required ><br>
        <button type="button" id="botonIngresar">ingresar</button> <br>
         <a href=""> ¿Olvidaste tu contraseña?</a>
      </div>
     </form>
 ` 
 
const divFormulario = document.createElement("div");
divFormulario.innerHTML = formulario;
return divFormulario
}

export function funcionIngresar() {
let email = document.getElementById("email"); 
let password = document.getElementById("password");
let botonIngresar = document.querySelector("#botonIngresar");

botonIngresar.addEventListener("click", () => {
      ingresar(email, password ).then(() => {
         window.location = '#/inicio';
         location.reload()
        }).catch((error) => {
         var errorCode = error.code;
         var errorMessage = error.message;
         alert(errorMessage)
       });
     })
};