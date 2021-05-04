import { ingresar } from '../firebase/firebase.js'
import { registrarse } from '../components/registro.js'

export function iniciarSesion() {

   let formularioInicio =

   `<div id="contenedorInicio">
   <form id="formulario" method ="post">
    <h1>PETBOOK</h1>
     <div class="emailandpasword">
        <label for="email"></label><input type="email" id="email" placeholder="Email" required>
        <label for="password"></label><br>
        <input type="password" id="password" placeholder="Password" name="password" required ><br>
        <button type="button" id="botonIngresar">ingresar</button> <br>
     <h4><a href=""> ¿Olvidaste tu contraseña?</a></h4>
      </div>
    </form>
     <h4>¿Aun no tienes una cuenta?<h4>
        <button type="button" id="botonRegistro">Registrate</button>
   </div>
 ` 

const divFormulario = document.createElement("div");
divFormulario.innerHTML = formularioInicio;
return divFormulario
}

export function funcionIngresar() {
let botonIngresar = document.querySelector("#botonIngresar");
botonIngresar.addEventListener("click", () => {
   window.location = '#/inicio'
   ingresar()
   
 });
};

export function funcionRegistrarse() {
   let botonRegistrarse = document.querySelector("#botonRegistro");
   botonRegistrarse.addEventListener("click",()=>{
      console.log("hagoclick")
      window.location = '#/registro'
      registrarse()
   }); 
};





