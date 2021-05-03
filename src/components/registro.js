import { autenticar } from '../firebase/firebase.js'

export function registrarse() {
    let registro = `
    <form class="formulario" id="formulario" method ="post">
    <h1>PETBOOK</h1>
     <div class="emailandpasword">
        <label for="email"></label><input type="email" id="emailAuth" placeholder="Email" required>
        <label for="password"></label><br>
        <input type="password" id="passwordAuth" placeholder="Password" name="password" required ><br>
        <button type="button" id="botonUnirse">Unirse</button>
      </div>
     </form>
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
