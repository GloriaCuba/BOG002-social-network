// import {  obtenerDatosUsuario } from '../firebase/firestore.js';
import { guardarPosts, obtenerDatosUsuario, eliminarPost} from '../firebase/firestore.js';

export function perfil() {
  let perfil = `
    <div class="contenedorInterfazPerfil">
       <div class="opcionesPerfil">
          <img type="button" src="Img/home.png" id="irAPost"> 
         <img type="button" src="Img/cog.png" id="configuracionPerfil">   
       </div>
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
            <button class="botonEnviarPerfil" id="postearPerfil">Publicar</button>
         </form>
         <div id="modalOverlay" class="modalOverlay">
           <div id="modal" class="modal">
            <form id="muroModal" class="muroModal">
              <a href="#" id="cerrarPopup" class="cerrarPopup"><i class="fas fa-times"></i></a> <br>
              <textarea type="text" id="mensajeModal" class="campoMensajeModal" placeholder="¿Qué estas pensando?"></textarea> <br>
              <button class="botonActualizar" id="actualizar">Actualizar</button>
            </form>
         </div>
         </div>
      </div>
       <div id="publicacionesUsuario" class="publicacionesUsuario"></div> 
    </div>
    `;
  const divPerfil = document.createElement('div');
  divPerfil.innerHTML = perfil;
  return divPerfil;
}

export function configurarPerfil() { // cambio de pagina configuracion perfil
  const perfil = document.getElementById('configuracionPerfil');
  perfil.addEventListener('click', () => {
    window.location = '#/configuracionPerfil';
    location.reload();
  });
}

export function irAHome() {// cambio de pagina muro
  const perfil = document.getElementById('irAPost');
  perfil.addEventListener('click', () => {
    window.location = '#/inicio';
    location.reload();
  });
}

export function ImagenPerfil() {
  const campoFoto= document.getElementById("userImage");// campo donde se ingresa la imagen
  var user = firebase.auth().currentUser;// usuario actual
  campoFoto.src = user.photoURL;//asignamos la URL a campoFoto
  console.log(user.providerData);
  document.getElementById("nameUser").innerHTML= user.displayName;//??
} 

function guardarPublicacion(e){
  e.preventDefault(); // Para que no se refresque la página
  const mensaje = muroPerfil['mensajePerfil'].value;
  const date = firebase.firestore.Timestamp.now();
  let user = firebase.auth().currentUser;
  let email = user.email;
  let imagen = user.photoURL;
  let likes ='';
  let userId = user.uid;
  guardarPosts(mensaje, date, email, imagen, likes, userId);
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
        const divLike = document.createElement('div');
        divLike.setAttribute('class','divLike');
        divLike.setAttribute('id','divLike');
        divLike.innerHTML= (doc.data().likes);
        divMuro.appendChild(divLike);
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
          overlayEditar()
          cerrarModal()
          botonEditarPost(doc.id, doc.data().mensaje)
        });
      };
    });
  });

  function botonEliminar(id) {
    eliminarPost(id);
  }
}

function overlayEditar() {
  let overlay = document.getElementById ("modalOverlay");
  let popUp = document.getElementById ("modal");
  overlay.classList.add('active');
  popUp.classList.add('active');
};

function cerrarModal() {
  let overlay = document.getElementById ("modalOverlay");
  let popUp = document.getElementById ("modal");
  let btnCerrar = document.getElementById ("cerrarPopup");
  btnCerrar.addEventListener('click', function(e){  
    e.preventDefault();
    overlay.classList.remove('active');
    popUp.classList.remove('active');
  })
}

function botonEditarPost(id, campo) {
  document.getElementById('mensajeModal').value = campo;
  console.log (id, campo);
  actualizandoPost(id, campo);
}
      
function actualizandoPost(id) {
  const postear = document.getElementById('actualizar');
  postear.addEventListener('click', function x(){
    const nuevoPost = firebase.firestore().collection('posts').doc(id);
    const posteditado = document.getElementById('mensajeModal').value;
    console.log(nuevoPost);
    return nuevoPost.update({
      mensaje: posteditado,
    }).then(() => {
      console.log('editado');
      window.location = '#/perfil';
      location.reload();
    })
      .catch((error) => {
        console.error('error al editar', error);
      });
  });
} 