// import {  obtenerDatosUsuario } from '../firebase/firestore.js';
import { guardarPosts, obtenerDatosUsuario, eliminarPost} from '../firebase/firestore.js';

export function perfil() {
    let perfil = `
    <div class="contenedorInterfazPerfil">
       <img type="button" src="Img/cog.png" id="configuracionPerfil"> 
       <div id="datosUsuarioPerfil" class="datosUsuarioPerfil">
          <div id="divPerfilUsuario" class="divPerfilUsuario">
            <div id="fotoPerfilUsuario" class="fotoPerfilUsuario">
             <img id="userImage">
            </div>
            <div class="datosPerfil">
             <h2 id="nameUser"> </h2>
            </div>
         </div>
         </div>
         <div class="textAreaPerfil">
         <form id="muroPerfil" class="muroPerfil">
            <textarea type="text" id="mensajePerfil" class="campoPosteoPerfil" placeholder="¿Qué estas pensando?"></textarea>
            <img src="Img/Star_Likes.png" class="starPerfil">
            <button class="botonEnviarPerfil" id="postearPerfil">Publicar</button>
         </form>
      </div>
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
 
export function ImagenPerfil() {
      const campoFoto= document.getElementById("userImage")
      var user = firebase.auth().currentUser;
/*    var name, email, photoUrl, uid, emailVerified;
 */   campoFoto.src = user.photoURL;
      console.log(user.providerData);
   document.getElementById("nameUser").innerHTML= user.displayName;
} 

function guardarPublicacion(e){
      e.preventDefault(); // Para que no se refresque la página
         const mensaje = muroPerfil['mensajePerfil'].value;
         const date = firebase.firestore.Timestamp.now();
         let user = firebase.auth().currentUser;
         let email = user.email;
         let imagen = user.photoURL;
         guardarPosts(mensaje, date, email, imagen);
         muroPerfil.reset()
       }
 export function postPerfil() {
         const muro = document.getElementById('muroPerfil');
         muro.addEventListener('submit', guardarPublicacion);
         }

// function mostrar(doc){
// let userActual = firebase.auth().currentUser;
// let datos = doc.filter(user => user == userActual)
// return datos
// }
// let userActual = firebase.auth().currentUser;
// let filtro = doc.filter(user => user == userActual)
// if (filtro) { 

export function verPostsPerfil() {
      obtenerDatosUsuario((querySnapshot) => {
      document.getElementById('publicacionesUsuario').innerHTML = '';
      querySnapshot.forEach((doc) => {    
      let userActual = firebase.auth().currentUser;
      const email = userActual.email
      const usuarioNombre = userActual.displayName
      if (doc.data().user == email) { 
      const divOriginal = document.getElementById('publicacionesUsuario');
      const divMuro = document.createElement('div');
      divMuro.setAttribute('class', 'divMuro');
      divOriginal.appendChild(divMuro);
      const autorPost = document.createElement('h3');
      autorPost.setAttribute('class', 'autorPost');
      divMuro.appendChild(autorPost);
      autorPost.innerHTML = usuarioNombre + " ha publicado:";
      const textPost = document.createElement('p');
      textPost.setAttribute('class', 'divText');
      textPost.innerHTML = (doc.data().mensaje);
      divMuro.appendChild(textPost);
      const star = document.createElement('img');
      star.setAttribute('class', 'starPerfil');
      star.src = 'Img/Star_Likes.png';
      divMuro.appendChild(star);
      // let user = firebase.auth().currentUser;
      // console.log(user.email);
      // const email = user.email;
      // document.getElementById("holaUsuario").innerHTML = ('Hola ' + email);
      const photoProfile= document.createElement('img');
      photoProfile.setAttribute('class', 'photoProfile');
      photoProfile.src = (doc.data().imagen);
      divMuro.appendChild(photoProfile);
      const campoBotones = document.createElement('div');
      const botonBorrar = document.createElement('button');
      const botonEditar = document.createElement('button');
      campoBotones.appendChild(botonBorrar);
      campoBotones.appendChild(botonEditar);
      botonBorrar.className="botonBorrar"
      botonBorrar.type = 'button'; 
      botonBorrar.textContent = 'Borrar post';
      botonBorrar.setAttribute('id', 'botonBorrar');
      botonEditar.className="botonEditar"
      botonEditar.type = 'button';
      botonEditar.textContent = 'Editar';
      botonEditar.setAttribute('id', 'botonEditar');
      divMuro.appendChild(botonEditar);
      divMuro.appendChild(botonBorrar);
      botonBorrar.addEventListener('click', () => {
      botonEliminar(doc.id);
      console.log(doc.id);
      });
      botonEditar.addEventListener('click', () => {
      botonEditarPost(doc.id, doc.data().mensaje);
      });
     };
   });
});

function botonEliminar(id) {
      eliminarPost(id);
}
}

function botonEditarPost(id, campo) {
      document.getElementById('mensajePerfil').value = campo;
      console.log (id, campo);
      actualizandoPost(id, campo);
      }
      
function actualizandoPost(id) {
const muro = document.getElementById('muroPerfil');
const postear = document.getElementById('postearPerfil');
postear.innerHTML = 'Actualizar';
muro.removeEventListener('submit', submitHandler);
postear.addEventListener('click', function x(){
const nuevoPost = firebase.firestore().collection('posts').doc(id);
const posteditado = document.getElementById('mensajePerfil').value;
console.log(nuevoPost);
      return nuevoPost.update({
      mensaje: posteditado,
      }).then(() => {
            console.log('editado');
            postear.innerHTML = 'Publicar';
            muro.addEventListener('submit', submitHandler);
            window.location = '#/perfil';
            location.reload();
      })
            .catch((error) => {
            console.error('error al editar', error);
            });
      });
      } 