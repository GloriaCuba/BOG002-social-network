/* eslint-disable no-use-before-define */
import { cerrarSesión } from '../firebase/firebase.js';
import {  guardarPosts, obtenerPosts, eliminarPost } from '../firebase/firestore.js';


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
            <img src="Img/Star_Likes.png" class="star">
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
   guardarPosts(mensaje, date, email);
   muro.reset()
 }
export function postMuro() {
   const muro = document.getElementById('muro');
   muro.addEventListener('submit', submitHandler);
      
      /*.then(function(doc) { 
         console.log('El documento se creo con el ID: ', doc.id);
         verPosts();
      }).catch((error) => {
         console.error("Error adding document: ", error);
     });*/
   }
   export function verPosts() {
      obtenerPosts((querySnapshot) => {     
      document.getElementById('divSeccionPosts').innerHTML = '';
      querySnapshot.forEach((doc) => {
         const divOriginal = document.getElementById('divSeccionPosts');
         const divMuro = document.createElement('div');
         divMuro.setAttribute('class','divMuro');
         divOriginal.appendChild(divMuro);
         const textPost = document.createElement('textarea');
         textPost.setAttribute('class','divText');
         textPost.innerHTML=(doc.data().mensaje);
         divMuro.appendChild(textPost);
         const star = document.createElement('img');
         star.setAttribute('class','star');
         star.src = 'Img/Star_Likes.png';
         divMuro.appendChild(star);
         let user = firebase.auth().currentUser;
         let email = user.email;
         document.getElementById("holaUsuario").innerHTML = ('Hola ' + email);
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
      });
   });

   function botonEliminar(id) {
      eliminarPost(id);
   }
}
/*    function botonEliminar(id) {
      firebase.firestore().collection('posts').doc(id).delete()
        .then(() => {
          console.log('Document successfully deleted!');
        })
        .catch((error) => {
          console.error('Error removing document: ', error);
        });
    } */

   /* function botonEditarPost(id,mensaje) {
      document.getElementById('mensaje').value = mensaje;
      console.log(id + mensaje);
      /* firebase.firestore.Timestamp.now();
      let date = firebase.firestore.Timestamp.now();
      let postear = document.getElementById('postear');
      postear.innerHTML='Actualizar';
      postear.addEventListener('click', (id) => { 
      firebase.firestore().collection('postss').doc(id).update(mensaje);
      })     
   } */

   function botonEditarPost(id, campo) {
      document.getElementById('mensaje').value = campo;
      console.log (id, campo);
      actualizandoPost(id, campo);
      /* firebase.firestore.Timestamp.now();
          let date = firebase.firestore.Timestamp.now(); */
    }
   /*  function actualizandoPost() {
      const muro = document.getElementById('muro');
      const postear = document.getElementById('postear');
      postear.innerHTML = 'Actualizar';
      muro.removeEventListener('submit', submitHandler);
      postear.addEventListener('click', submitHandler2)
   } */
      /* function submitHandler2(id){
         const nuevoPost = firebase.firestore().collection('posts').doc(id);
         const posteditado = document.getElementById('mensaje').value;
         return nuevoPost.update({
          mensaje: posteditado,
        }).then(() => {
          console.log('editado');
          postear.innerHTML = 'Publicar';
          muro.addEventListener('submit', submitHandler);
          postMuro() */
         /*  postear.removeEventListener('click', submitHandler2); 
        })
          .catch((error) => {
            console.error('error al editar', error);
          });
      }; */
      /* function remover(){
         const postear = document.getElementById('postear');
         postear.removeEventListener('click', submitHandler2());
       } */
 
 /*    function remover(){
      const postear = document.getElementById('postear');
      postear.removeEventListener('click', submitHandler2());
    } */
    function actualizandoPost(id) {
      const muro = document.getElementById('muro');
      const postear = document.getElementById('postear');
      postear.innerHTML = 'Actualizar';
      muro.removeEventListener('submit', submitHandler);
      postear.addEventListener('click', () => {
         const nuevoPost = firebase.firestore().collection('posts').doc(id);
         const posteditado = document.getElementById('mensaje').value;
         console.log(nuevoPost);
         return nuevoPost.update({
          mensaje: posteditado,
        }).then(() => {
          console.log('editado');
          postear.innerHTML = 'Publicar';
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
   };