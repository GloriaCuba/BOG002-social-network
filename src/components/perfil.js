import {  obtenerDatosUsuario } from '../firebase/firestore.js';

export function perfil() {
    let perfil = `
    <div id="contenedorPerfil">
       <button type="button" id="configuracionPerfil">Configurar mi perfil</button> 
       <div id="imagenPerfil" class="imagenPerfil">
          <img id="imagenPerfil">
       </div>
       <div id="datosUsuario" class="datosUsuario"></div> 
       <div id="publicacionesUsuario" class="publicacionesUsuario"></div> 
    </div>
    `;
    const divPerfil = document.createElement("div");
    divPerfil.innerHTML = perfil;
 
    return divPerfil
     }  

     export function configurarPerfil(){
      const perfil=document.getElementById("configuracionPerfil");
      perfil.addEventListener("click",()=>{
            window.location = '#/configuracionPerfil';
            location.reload()                          
      })
}
 
export function infoPerfil() {
      obtenerDatosUsuario((querySnapshot)=> {
      document.getElementById('datosUsuario').innerHTML = '';
      querySnapshot.forEach((doc)  => {
      const usuarioData = document.getElementById('datosUsuario')
         const divUsuario = document.createElement('div');
          divUsuario.setAttribute('class','divUsuario');
         const textUsuario = document.createElement('p');
          textUsuario.setAttribute('class','divTextUsuario');
          textUsuario.innerHTML=(doc.data().NombreMascota);
          console.log(doc.data().NombreMascota)
          divUsuario.appendChild(textUsuario)
          usuarioData.appendChild(divUsuario)
        })  
       })
      }
      
// var user = firebase.auth().currentUser;
// if (user) {
   
// } else {
//         // No user is signed in.
//  }
// }
