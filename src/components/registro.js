import { autenticar } from '../firebase/firebase.js'

export function registrarse() {
    let registro = `
     <div id="contenedorRegistro" class="formulario">
      <h1>Registro</h1>
      <button type="button" id=registroFacebook">Facebook</button> 
      <button type="button" id="registroGmail">Gmail</button> <br>
    <h4>o si lo prefieres registra tu correo</h4><br>
      <input type="email" id="emailAuth" placeholder="E-mail" required ><br>
      <input type="password" id="passwordAuth" placeholder="Contraseña" required ><br>
      <input type="password" id="passwordAuth" placeholder="Valida tu contraseña" required ><br>
    <button type="button" id="botonUnirse">Unirme</button> <br>
    </div>
    `
    const divRegistro = document.createElement("div");
    divRegistro.innerHTML = registro;
 
    return divRegistro;
    }


export function funcionAutenticar() {
  let email = document.getElementById("emailAuth"); 
  let password = document.getElementById("passwordAuth");
        
  let botonIngresar = document.querySelector("#botonUnirse");
    botonIngresar.addEventListener("click", () => {
              autenticar(email, password ).then(() => {
                 window.location = '#/inicio';
                 location.reload()
                }).catch((error) => {
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 alert(errorMessage)
               });
             })
        };
