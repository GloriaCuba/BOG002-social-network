import { autenticar,ingresarGmail,ingresarFaceBook} from '../firebase/firebase.js'

export function registrarse() {
    let registro = `
     <div id="contenedorRegistro" class="formulario">
     <div> <h1>Registro</h1></div>
     <div> <button type="button" id="registroFacebook">Facebook</button> 
      <button type="button" id="registroGmail">Gmail</button> <br> </div>
      <div><h4>o si lo prefieres registra tu correo</h4><br>
     <input type="email" id="emailAuth" placeholder="E-mail" required ><br>
      <input type="password" id="passwordAuth" placeholder="Contraseña" required ><br>
      <input type="password" id="passwordAuth2" placeholder="Valida tu contraseña" required ><br>
      <button type="button" id="botonUnirse">Unirme</button> <br>
      </div>
    </div>
    `
    const divRegistro = document.createElement("div");
    divRegistro.innerHTML = registro;
 
    return divRegistro;
    }


export function funcionAutenticar() {
  let email = document.querySelector("#emailAuth"); 
  let password = document.querySelector("#passwordAuth");

let botonIngresar = document.querySelector("#botonUnirse");
botonIngresar.addEventListener("click", () => {
          autenticar(email, password).then(() => {
             window.location = '#/inicio';
             location.reload()
            }).catch((error) => {
             var errorCode = error.code;
             var errorMessage = error.message;
             alert(errorMessage)
           });
      })
};



export function registroConGoogle(){
let registroGoogle=document.getElementById("registroGmail");
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


export function registroConFacebook(){
  let registroFacebook=document.getElementById("registroFacebook");
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


