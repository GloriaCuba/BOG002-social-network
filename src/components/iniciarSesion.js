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
         <div class="inicioConProveedores"><h4>Ingresa con tu cuenta de Google o Facebook </h4></div>
          <figure>
             <img type="button" id="botonGoogle" src="img/Icono_Google.png"> 
             <img type="button" id="botonFacebook" src="img/Icono_Facebook.png">
           </figure> 
      
     </form>
    
 `  
const divFormulario = document.createElement("div");
divFormulario.className = "formularioInicioSesion"
divFormulario.innerHTML = formularioInicioSesion;
return divFormulario
}

// iniciar sesion con email y contraseña
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

// iniciar sesion con google
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
// iniciar sesion con facebook        
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

export function olvidarContrasena() {
 let nuevaContrasena =document.getElementById("olvidarContrasena");
 nuevaContrasena.addEventListener("click",() =>{
    console.log("hola")
   window.location = '#/restablecerContrasena';
   location.reload()
  })
}
