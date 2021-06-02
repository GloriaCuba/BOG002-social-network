/* eslint-disable no-undef */
import { cerrarSesión } from '../firebase/firebase.js';
import { guardarPosts, obtenerPosts, eliminarPost, sumarLikes, restarLikes, obtenerLikes } from '../firebase/firestore.js';

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
         <img src="Img/pez1.jpg" id="filtroRoedores">
         <img src="Img/Categoria_Aves.jpg" id="filtroRoedores">
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

function submitHandler(e){
e.preventDefault(); // Para que no se refresque la página
   const mensaje = muro['mensaje'].value;
   const date = firebase.firestore.Timestamp.now();
   let user = firebase.auth().currentUser;
   let email = user.email;
   let imagen = user.photoURL;
   let likes ='';
   let userId = user.uid;
   guardarPosts(mensaje, date, email, imagen, likes, userId);
   muro.reset()
 }
export function postMuro() {
   const muro = document.getElementById('muro');
   muro.addEventListener('submit', submitHandler);
   }
   
export function verPosts() {
  obtenerPosts((querySnapshot) => {
    document.getElementById('divSeccionPosts').innerHTML = '';
    querySnapshot.forEach((doc) => {
      let user = firebase.auth().currentUser;
      const email = user.email;
      const emailOtros = doc.data().user;
      const divOriginal = document.getElementById('divSeccionPosts');
      const divMuro = document.createElement('div');
      divMuro.setAttribute('class', 'divMuro');
      divOriginal.appendChild(divMuro);
      const autorPost = document.createElement('p');
      autorPost.setAttribute('class', 'autorPost');
      divMuro.appendChild(autorPost);
      autorPost.innerHTML = (doc.data().user);
      const textPost = document.createElement('p');
      textPost.setAttribute('class', 'divText');
      textPost.innerHTML = (doc.data().mensaje);
      divMuro.appendChild(textPost);
      const star = document.createElement('input');
      star.setAttribute('type','image');
      star.setAttribute('id','star');
      star.setAttribute('class','star');
      divMuro.appendChild(star);
      /* console.log(doc.data()); */
      star.src="Img/Star_Likes_Blanca.png"; 
      if(doc.data().likes!=''){
        star.src="Img/Star_Likes.png"; 
        }
      /* const starYellow = document.createElement('input');
      starYellow.setAttribute('type','image');
      starYellow.setAttribute('id','starYellow');
      starYellow.setAttribute('class','ocultar');
      starYellow.src = 'Img/Star_Likes.png';
      divMuro.appendChild(starYellow); */
      document.getElementById("holaUsuario").innerHTML = ('Hola ' + email);
      const photoProfile= document.createElement('img');
      photoProfile.setAttribute('class', 'photoProfile');
      photoProfile.src = (doc.data().imagen);
      divMuro.appendChild(photoProfile);
      const divLike = document.createElement('div');
      divLike.setAttribute('class','divLike');
      divLike.setAttribute('id','divLike');
      divLike.innerHTML= (doc.data().likes);
      divMuro.appendChild(divLike);
     if(email ==emailOtros){ 
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
        console.log(user.uid)
        console.log(email)
        console.log(emailOtros)
        });
        botonEditar.addEventListener('click', () => {
        botonEditarPost(doc.id, doc.data().mensaje);
        });
      }else{
        /* console.log('no estan los botones'); */
      } 
      /* }else{
        console.log('no estan los botones');
      } */
      star.addEventListener('click', () => {
        sumarLikes(doc.id).then(() => {
        document.getElementById('star').removeAttribute('id', 'star');
        document.querySelector('.star').setAttribute('id', 'starYellow');
        remover();        
        });
      })
     function remover(){
      const starYellow = document.getElementById('starYellow'); 
      starYellow.addEventListener('click', () => {
      restarLikes(doc.id).then((id) => {
      console.log('wiii')
    });
  })
     }
      
    
      
      /* function verStars(){
        obtenerLikes((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if(doc.data().likes>0){
            document.getElementById('star').src='Img/Star_Likes.png';
            }
          });      
        });
      } */

    });
      
      
    });
    
   /*  like.addEventListener('click',likes(likes));
    function likes (likes) {
      likes++;
      console.log(likes)
    }; */

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
  postear.addEventListener('click', function x(){
  const nuevoPost = firebase.firestore().collection('posts').doc(id);
  const posteditado = document.getElementById('mensaje').value;
  console.log(nuevoPost);
    return nuevoPost.update({
     mensaje: posteditado,
        }).then(() => {
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
