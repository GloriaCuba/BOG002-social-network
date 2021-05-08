import { ingresar, ingresarGmail, ingresarFaceBook } from '../firebase/firebase.js'

export function iniciarSesion() {
   let formularioInicioSesion =
   `
     <form class="formulario" id="formulario" method ="post">
         <h1>¡Hola de nuevo! </h1> 
         <div class="emailandpassword">
            <label for="email"></label><input type="email" id="email" placeholder="Email" required>
            <label for="password"></label><br>
            <input type="password" id="password" placeholder="Password" name="password" required ><br>
            <img src="Img/gato_negro_.png" alt=""> 
            <button type="button" id="botonIngresar">ingresar</button> <br>
            <h4 id="olvidarContrasena" class="olvidarContrasena">¿Olvidaste tu contraseña?</h4>
         </div>
         <div class="inicioConProveedores">
             <h4>Ingresa con tu cuenta de Google o Facebook </h4>
            <div class="inicioGoogleFacebook">
               <button type="button" id="botonGoogle">G+</button> <br>
               <button type="button" id="botonFacebook">F</button>
         </div>
         </div>
     </form>
    
 ` 
 
const divFormulario = document.createElement("div");
divFormulario.className = "formularioInicioSesion"
divFormulario.innerHTML = formularioInicioSesion;
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

export function iniciarConGoogle(){
   let registroGoogle=document.getElementById("botonGoogle");
   registroGoogle.addEventListener("click",() =>{
      ingresarGmail().then(()=> {
         window.location = '#/inicio';
         location.reload()
         console.log("ingreso gmail")
         
      }).catch(err => {
         console.log(err)
      
      })
      })
   }
            
            
export function iniciarConFacebook(){
   let registroFacebook=document.getElementById("botonFacebook");
   registroFacebook.addEventListener("click",() =>{
      ingresarFaceBook().then(()=> {
      window.location = '#/inicio';
      location.reload()
      console.log("ingreso facebook")
      
      }).catch(err => {
      console.log(err)
      
      })
      
   })
   }