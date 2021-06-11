/* eslint-disable no-undef */
import { cerrarSesión } from '../firebase/firebase.js';
import { guardarPosts, obtenerPosts, eliminarPost, updateLikes, nuevoPost } from '../firebase/firestore.js';

// import { mostrarPosts } from '../firebase/post.js';

export function inicio() {
  const muro = `
   <div id="contenedorMuro">
      <div class='logo' id='Logo'>
         <h1>Pet</h1>
         <h2>Book</h2>
      </div>
      <div id="menu" class="menu">
         <button type="button" id="salir">Salir</button> 
         <button type="button" id="perfil">Perfil</button>
      </div>
      <div id="menuToggle" class="menuToggle">
         <div class="inicio"></div>
      </div> 
      <div id="containerFiltro"> 
         <img src="Img/Perro.jpg" id="filtroCaninos">
         <img src="Img/Gato.jpg" id="filtroFelinos">
         <img src="Img/conejo.jpg" id="filtroRoedores">
         <img src="Img/pez1.jpg" id="filtroAves">
         <img src="Img/Categoria_Aves.jpg" id="filtroOtros">
      </div>
      <div class="textArea">
         <form id="muro" class="muro">
         <p id="holaUsuario" class="holaUsuario" ></p>
            <textarea type="text" id="mensaje" class="campoPosteo" placeholder="¿Qué estas pensando?"></textarea>
            <button class="botonEnviar" id="postear">Publicar</button>
         </form>
      </div>
      <div id="divSeccionPosts" class="divSeccionPosts">
      </div>
   </div>
   `;
  const divMuro = document.createElement('div');
  divMuro.innerHTML = muro;
  return divMuro;
}
// se crea evento para el menu hamburguesa
export function menuToggle() {
  const icono = document.querySelector('#menuToggle');
  icono.addEventListener('click', () => {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('opcionesMenuOpen');
    const menuOpen = document.getElementById('menuToggle');
    menuOpen.classList.toggle('menuToggleOpen');
  });
}

export function irAPerfil() {
  const perfil = document.getElementById('perfil');
  perfil.addEventListener('click', () => {
    window.location = '#/perfil';
    location.reload();
  });
}
// Se definen los campos a almacenar en la coleccion post 
function submitHandler(e){
e.preventDefault(); // Para que no se refresque la página
   const mensaje = muro['mensaje'].value;
   const date = firebase.firestore.Timestamp.now();
   let user = firebase.auth().currentUser;
   let displayName = user.displayName;
   let imagen = user.photoURL;
   let likes =[];
   let userId = user.uid;
   guardarPosts(mensaje, date, displayName, imagen, likes, userId);
   muro.reset()
 }
// se añade el evento para almacenar los campos en firebase
export function postMuro() {
   const muro = document.getElementById('muro');
   muro.addEventListener('submit', submitHandler);
   }
   
// se crean los elementos que contendra el muro
export function verPosts() {
  obtenerPosts((querySnapshot) => {
    document.getElementById('divSeccionPosts').innerHTML = '';
    querySnapshot.forEach((doc) => {
      let user = firebase.auth().currentUser;
      let nombreUsuario = user.displayName;
      console.log(user.uid);
      const emailOtros = doc.data().user;
      const idOtros = doc.data().userId;
      console.log(idOtros);
      const divOriginal = document.getElementById('divSeccionPosts');
      const divMuro = document.createElement('div');
      divMuro.setAttribute('class', 'divMuro');
      divOriginal.appendChild(divMuro);
      const autorPost = document.createElement('p');
      autorPost.setAttribute('class', 'autorPost');
      divMuro.appendChild(autorPost);
      autorPost.innerHTML = (doc.data().user);
      const divTextPost = document.createElement('div');
      divTextPost.setAttribute('class', 'divText');
      const textPost = document.createElement('p');
      textPost.setAttribute('class', 'pText');
      divTextPost.appendChild(textPost);
      textPost.innerHTML = (doc.data().mensaje);
      divMuro.appendChild(divTextPost);
      const star = document.createElement('input');
      star.setAttribute('type','image');
      star.setAttribute('id','star');
      star.setAttribute('class','star');
      star.src="Img/Star_Likes_Blanca.png"; 
      divMuro.appendChild(star);
      const starYellow = document.createElement('input');
      starYellow.setAttribute('type','image');
      starYellow.setAttribute('id','starYellow');
      starYellow.setAttribute('class','ocultar');
      starYellow.src="Img/Star_Likes.png"; 
      /* if(doc.data().likes==!'') {
        starYellow.classList.remove('ocultar');
        starYellow.classList.add('starYellow');
      } */
      const likes = doc.data().likes;
      const miLike = likes.find(item=>item===user.uid);
      if(miLike){
        starYellow.classList.remove('ocultar');
        starYellow.classList.add('starYellow');
      }else{
        starYellow.classList.remove('starYellow');
        starYellow.classList.add('ocultar');
      }
      divMuro.appendChild(starYellow);
      document.getElementById("holaUsuario").innerHTML = ('Hola ' + nombreUsuario);
      const photoProfile= document.createElement('img');
      photoProfile.setAttribute('class', 'photoProfile');
      photoProfile.src = (doc.data().imagen);
      divMuro.appendChild(photoProfile);
      const divLike = document.createElement('div');
      divLike.setAttribute('class','divLike');
      divLike.setAttribute('id','divLike');
      divLike.innerHTML= doc.data().likes.length===0?'':doc.data().likes.length;/*  operador ternario */
      divMuro.appendChild(divLike);
      if(nombreUsuario ==emailOtros){ 
        const campoBotones = document.createElement('div');
        const botonBorrar = document.createElement('button');
        campoBotones.appendChild(botonBorrar);
        botonBorrar.className="botonBorrar"
        botonBorrar.type = 'button'; 
        botonBorrar.textContent = 'Borrar post';
        botonBorrar.setAttribute('id', 'botonBorrar');
        const botonEditar = document.createElement('button');
        botonEditar.className="botonEditar"
        botonEditar.type = 'button';
        botonEditar.textContent = 'Editar';
        botonEditar.setAttribute('id', 'botonEditar');
        campoBotones.appendChild(botonEditar);
        divMuro.appendChild(botonEditar);
        divMuro.appendChild(botonBorrar);

      botonBorrar.addEventListener('click', () => {
        botonEliminar(doc.id);
        /* console.log(doc.id);
        console.log(user.uid)
        console.log(nombreUsuario)
        console.log(emailOtros) */
        });
        botonEditar.addEventListener('click', () => {
        botonEditarPost(doc.id, doc.data().mensaje);
        });
      botonEditar.addEventListener('click', () => {
      botonEditarPost(doc.id, doc.data().mensaje);
      });
      }else{
        /* console.log('no estan los botones'); */
      }

      star.addEventListener('click', () => {
        likes.push(user.uid);
        updateLikes(doc.id, likes);
      });
        
      starYellow.addEventListener('click', () => {
        let indexUser = likes.indexOf(user.uid);
        console.log(indexUser)
        if(indexUser!=-1){
          likes.splice(indexUser,1);
          updateLikes(doc.id, likes);
        }
        
      });
        
      });
     /* function remover(){
      const starYellow = document.getElementById('starYellow'); 
      starYellow.addEventListener('click', () => {
      restarLikes(doc.id).then(() => {
      console.log('wiii')
    });
  })
} */
});
      
      
  
  function botonEliminar(id) {
    eliminarPost(id);
    }

    }

    function botonEditarPost(id, campo) {
        document.getElementById('mensaje').value = campo;
        console.log (id, campo);
        actualizandoPost(id, campo);
      }
      

    function actualizandoPost(id) {
    const muro = document.getElementById('muro');
    const postear = document.getElementById('postear');
    postear.innerHTML = 'Actualizar';
    muro.removeEventListener('submit', submitHandler);
    postear.addEventListener('click', function (){
      const posteditado = document.getElementById('mensaje').value;
      nuevoPost(posteditado, id).then(() => {
        console.log('editado');
        postear.innerHTML = 'Publicar';
        muro.addEventListener('submit', submitHandler);
        window.location = '#/inicio';
        location.reload();
      })
        .catch((error) => {
          console.error('error al editar', error);
        });
        });
      } 



        
export function salir() {
const salir = document.querySelector('#salir');
salir.addEventListener('click', () => {
  cerrarSesión();
  window.location = '';
  location.reload();
});
}


export function filtrarAmigos() {
  const filtros = document.getElementById('filtroCaninos');
  filtros.addEventListener('click', filtrarSpecie);
  //   window.location = '#/filtroAmigos';
  //   location.reload();
  // });

function filtrarSpecie() {
  // const filtros = document.getElementById(filtro);
 window.location = '#/filtroAmigos';
location.reload();
}
}

// export function filtrarAmigos(especie) {
//   const filtros = document.getElementById(especie);
//   filtros.addEventListener('click', filtrarSpecie);
//   //   window.location = '#/filtroAmigos';
//   //   location.reload();
//   // });

// function filtrarSpecie(especie) {
//   // const filtros = document.getElementById(filtro);
//  window.location = '#/filtroAmigos';
// location.reload();
// }
// }

// filtrarAmigos('filtrarFelinos')
 // const filtros = document.getElementById('filtroFelinos');
  // const filtros = document.getElementById('filtroRoedores');
  // const filtros = document.getElementById('filtroAves');
  // const filtros = document.getElementById('filtroOtros');