import { ingresar } from '../firebase/firebase.js'
import { registrarse } from '../components/registro.js'

export function iniciarSesion() {

   let formulario =

   `<form class="formulario" id="formulario" method ="post">
    <h1>PETBOOK</h1>
     <div class="emailandpasword">
        <label for="email"></label><input type="email" id="email" placeholder="Email" required>
        <label for="password"></label><br>
        <input type="password" id="password" placeholder="Password" name="password" required ><br>
        <button type="button" id="botonIngresar">ingresar</button> <br>
      <a href=""> ¿Olvidaste tu contraseña?</a>
      </div>
     <div class="registrarse">
        <h4>¿Aun no tienes una cuenta?<h4>
        <button type="button" id="botonRegistro">registrarse</button>
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

export function funcionRegistrarse() {
   const botonRegistrarse = document.getElementById("botonRegistro");
   botonRegistrarse.addEventListener("click", function() {
    window.location = '#/registro';
    location.reload()
   }); 
};


// 
// console.log(window.location = '#/inicio')
// });


