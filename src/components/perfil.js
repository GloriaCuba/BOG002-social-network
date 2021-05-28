// import {  obtenerDatosUsuario } from '../firebase/firestore.js';
import { guardarPosts, obtenerPosts, eliminarPost } from '../firebase/firestore.js';

export function perfil() {
    let perfil = `
    <div class="contenedorPerfil">
       <div id="irAconfiguracionPerfil">
          <button type="button" id="configuracionPerfil">Configurar mi perfil</button> 
        </div>
        <div id="imagenPerfil" class="imagenPerfil">
           <img id="userImage" class="fotoPerfil">
        </div> <br>
        <div id="datosPerfil" class="datosPerfil">
           <p id="datosUsuario" class="datosUsuario"></p> 
        </div>
        <div class="textAreaPerfil">
        <form id="muroPerfil" class="muroPerfil">
           <textarea type="text" id="mensajeUsuario" class="campoPosteoUsuario" placeholder="¿Qué estas pensando?"></textarea>
           <img src="Img/Star_Likes.png" class="star">
           <button class="botonEnviarUsuario" id="postearUsuario">Publicar</button>
        </form>
     </div>
       <div id="publicacionesUsuario" class="publicacionesUsuario"> </div> 
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
 
export function nombreUsuario() {
      const campoUsuario= document.getElementById("datosUsuario")
      var user = firebase.auth().currentUser;
      campoUsuario.innerHTML = user.displayName;
}

export function ImagenPerfil() {
      const campoFoto= document.getElementById("userImage")
      var user = firebase.auth().currentUser;
      campoFoto.src = user.photoURL;
}



// function submitHandler2(e){
//       e.preventDefault(); // Para que no se refresque la página
//          const mensaje = muroPerfil['mensajeUsuario'].value;
//          const date = firebase.firestore.Timestamp.now();
//          let user = firebase.auth().currentUser;
//          let email = user.email;
//          guardarPosts(mensaje, date, email);
//           muro.mensaje.reset()
//        }

// export function postMuro() {
//       const muro = document.getElementById('muro');
//       muro.addEventListener('submit', submitHandler2);
//       }

//  export function verPosts() {
//       obtenerPosts((querySnapshot) => {
//        document.getElementById('publicacionesUsuario').innerHTML = '';
//        querySnapshot.forEach((doc) => {
//         const divOriginal = document.getElementById('publicacionesUsuario');
//         const divMuro = document.createElement('div');
//         divMuro.setAttribute('class', 'divMuro');
//         divOriginal.appendChild(divMuro);
//         const textPost = document.createElement('textarea');
//         textPost.setAttribute('class', 'divText');
//         textPost.innerHTML = (doc.data().mensaje);
//         divMuro.appendChild(textPost);
//         const star = document.createElement('img');
//         star.setAttribute('class', 'star');
//         star.src = 'Img/Star_Likes.png';
//         divMuro.appendChild(star);
//         let user = firebase.auth().currentUser;
//         const usuario = user.displayName;
//         document.getElementById("holaUsuario").innerHTML = ('Hola ' + usuario);
//         const campoBotones = document.createElement('div');
//         const botonBorrar = document.createElement('button');
//         const botonEditar = document.createElement('button');
//         campoBotones.appendChild(botonBorrar);
//         campoBotones.appendChild(botonEditar);
//         botonBorrar.className="botonBorrar"
//         botonBorrar.type = 'button'; 
//         botonBorrar.textContent = 'Borrar post';
//         botonBorrar.setAttribute('id', 'botonBorrar');
//         botonEditar.className="botonEditar"
//         botonEditar.type = 'button';
//         botonEditar.textContent = 'Editar';
//       botonEditar.setAttribute('id', 'botonEditar');
//       divMuro.appendChild(botonEditar);
//       divMuro.appendChild(botonBorrar);
//       botonBorrar.addEventListener('click', () => {
//             botonEliminar(doc.id);
//             console.log(doc.id);
//       });
//       botonEditar.addEventListener('click', () => {
//             botonEditarPost(doc.id, doc.data().mensaje);
//       });
//       });
// });
//       function botonEliminar(id) {
//       eliminarPost(id);
//       }
// }

// function botonEditarPost(id, campo) {
//       document.getElementById('mensaje').value = campo;
//       console.log (id, campo);
//       actualizandoPost(id, campo);
//       }
      
// function actualizandoPost(id) {
//       const muro = document.getElementById('muro');
//       const postear = document.getElementById('postear');
//       postear.innerHTML = 'Actualizar';
//       muro.removeEventListener('submit', submitHandler);
//       postear.addEventListener('click', function x(){
//       const nuevoPost = firebase.firestore().collection('posts').doc(id);
//       const posteditado = document.getElementById('mensaje').value;
//       console.log(nuevoPost);
//       return nuevoPost.update({
//       mensaje: posteditado,
//             }).then(() => {
//             console.log('editado');
//             postear.innerHTML = 'Publicar';
//             muro.addEventListener('submit', submitHandler);
//             window.location = '#/inicio';
//             location.reload();
//             })
//             .catch((error) => {
//             console.error('error al editar', error);
//             });
//       });
//       } 