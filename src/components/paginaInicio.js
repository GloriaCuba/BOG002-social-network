/* eslint-disable no-use-before-define */
import { cerrarSesión } from '../firebase/firebase.js';
import {  guardarPosts, obtenerPosts, eliminarPost } from '../firebase/firestore.js';

// import { guardarPublicacion } from '../firebase/post.js';


export function inicio() {
  const muro = `
   <div id="contenedorMuro">
      <h1>Pet Book</h1>
      <div id="menu" class="menu">
         <button type="button" id="salir">Salir</button> 
         <button type="button" id="perfil">Perfil</button>
      </div>
      <div id="menuToggle" class="menuToggle">
         <div class="inicio"></div>
      </div> 
      <div id="containerFiltro">
         <h3>!Encuentra a tus amigos¡</h3>
         <img src="Img/Perro.jpg" width= 200px height=200px id="filtroCaninos">
         <img src="Img/Gato.jpg" width= 200px height=200px id="filtroFelinos">
         <img src="Img/conejo.jpg" width= 200px height=200px id="filtroRoedores">
         <img src="Img/pez1.jpg" width= 200px height=200px id="filtroRoedores">
      </div>
      <form id="muro">
         <div class="textArea">
            <textarea type="text" id="mensaje" class="campoPosteo" placeholder="¿Qué estas pensando?"></textarea>
         </div>
         <div class="botonesTextArea">
            <button class="botonEnviar" id="postear">Publicar</button>
         </div>
      </form>
      <div id="seccionPosteos"> </div>
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

   export function postMuro() {
     const muro = document.getElementById('muro');
      muro.addEventListener('submit', (e) => {
         e.preventDefault(); // Para que no se refresque la página
         const mensaje = muro['mensaje'].value;
         const date = firebase.firestore.Timestamp.now();
           console.log(date);
            guardarPosts(mensaje, date)
             muro.reset()
      });
   }

 export function verPosts() {
   obtenerPosts((querySnapshot) => {
      document.getElementById('seccionPosteos').innerHTML = '';
      querySnapshot.forEach((doc) => {
         const divOriginal = document.getElementById('seccionPosteos');
         const mensaje = document.createElement('div');
         mensaje.className="elementosPosts";
         const texto = document.createTextNode(doc.data().mensaje);
         const campo = document.createElement('textArea');
         campo.setAttribute('id', 'campo');

         let botonBorrar = document.createElement('button');
         botonBorrar.className="botonBorrar"
         botonBorrar.type = 'button'; 
         botonBorrar.textContent = 'Borrar post';
         botonBorrar.setAttribute('id', 'botonBorrar');

         let botonEditar = document.createElement('button');
         botonEditar.className="botonEditar"
         botonEditar.type = 'button'; 
         botonEditar.textContent = 'Editar post';
         botonEditar.setAttribute('id', 'botonEditar');

         // let botonGuardar = document.createElement('button');
         // botonGuardar.className="botonGuardar"
         // botonGuardar.type = 'button'; 
         // botonGuardar.textContent = 'Guardar post';
         // botonGuardar.setAttribute('id', 'botonGuardar');

         mensaje.setAttribute('data-id', doc.id);
         campo.appendChild(texto);
         mensaje.appendChild(campo);
         mensaje.appendChild(botonBorrar);
         mensaje.appendChild(botonEditar);
         // mensaje.appendChild(botonGuardar);
         divOriginal.appendChild(mensaje);

         botonBorrar.addEventListener('click', () => {
         botonEliminar(doc.id);
         console.log(doc.id);
         });
         botonEditar.addEventListener('click', () => {
         botonEditarPost(doc.id, doc.data().mensaje);
         });
         // botonGuardar.addEventListener('click', () => {
         // botonEditarPost(doc.id, doc.data().mensaje);
         // });
      });
   });
}

   function botonEliminar(id) {
      eliminarPost().then(() => {
      console.log('Document successfully deleted!');
   }).catch((error) => {
      console.error('Error removing document: ', error);
   });
   }

   
   function botonEditarPost(id, mensaje) {
      document.getElementById('campo').value = mensaje
      let botonEditar = document.querySelector('#botonEditar');
      botonEditar.addEventListener('click', () => { 
      let nuevoPost = firebase.firestore().collection('posts').doc(id)
      return nuevoPost.update({
         mensaje: mensaje,
      }).then(() => {   
         console.log("listo")
   });
   });
   };


   export function salir() {
      const salir = document.querySelector('#salir');
      salir.addEventListener('click', () => {
         cerrarSesión();
         window.location = '';
         location.reload();
      });
      };
   


























   

//    function botonEditarMensaje(id, mensaje) {
//    let campoCambiar = document.getElementById("campo").value = mensaje
//    console.log(campoCambiar)
//    var washingtonRef = firebase.firestore().collection("posts").doc(id);
//       return washingtonRef.update({
//          mensaje: mensaje
// })
// .then(() => {
//     console.log("Document successfully updated!");
// })
// .catch((error) => {
//     console.error("Error updating document: ", error);
// });
// }








  /*  function verPostSiempre(){
      db.collection('posts').get().then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
         //console.log(doc.id);
         });
      }) */


      //       let botonEditar = document.createElement("button")
//       botonEditar.className="botonEditar"
//       botonEditar.type = 'button'; 
//       botonEditar.innerText = 'Editar post'; 

// function imprimirPosts(){
//    firebase.firestore().collection('posts').doc().onSnapshot((doc)=>{
//        console.log(doc.data().mensaje);
//       });
// } 


   // function ocultarMostrarPost() {
   //    let eventoMostrar = document.querySelector(".botonMostrarOpciones")
   //    eventoMostrar.addEventListener("click", ()=>{
   //       console.log('funciono')
   //       // document.querySelector(".divEditar").display="inline"
   //    } )
   // } 



// function guardarPosts(mensaje, date) {
//   const posts = firebase.firestore().collection('posts').doc().set({
//     mensaje,
//     date,
//   }).then(() => {
//     // obtener el id del doc, para encontrar la data especifica where
//     // document.getElementById("seccionPosteos").innerHTML="hola, este es tu post " + mensaje;
//     verPosts();
//     // imprimirPosts();
//   });
// }
/*  function verPosts(){
      db.collection('posts').get().then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
         //console.log(doc.id);
         });
      }).then(() => {
         console.log(doc.id);
         //console.log("Este es el .then que se debe ver después de verPosts")
         // imprimirPosts()
      });
   }  */

/*  function imprimirPosts(){
      db.collection("posts").where("mensaje", "==", true)
      .get()
      .then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
               // doc.data() is never undefined for query doc snapshots
               console.log(doc.id, " => ", doc.data());
         });
      })
      .catch((error) => {
         console.log("Error getting documents: ", error);
      });
   } */
/*       function imprimirPosts(){
      db.collection('posts').doc().onSnapshot((doc) => {
         console.log(doc.id);
     });
 */   

     /*  function verPosts(){
      db.collection('posts').get().then((querySnapshot) => {
         querySnapshot.forEach((doc) => { 
         //console.log(doc.id);
         });
      }).then(() => {
         console.log(doc.id);
         //console.log("Este es el .then que se debe ver después de verPosts")
         // imprimirPosts()
      });
   }  */



// export function postMuro() {
// // const idPost = document.getElementById('la');
//   const mensaje = document.getElementById('mensaje');
//   const postear = document.getElementById('postear');
//   // const especie = document.getElementById('especie');
//   const database = firebase.firestore();
//   const posteando = database.collection('muro');
//   // const btndatos = document.getElementById('btnDatos');
//   postear.addEventListener('click', (e) => {
//     // eslint-disable-next-line no-console
//     console.log('posteo');
//     e.preventDefault();
//     posteando.add({
//       mensaje: mensaje.value,
//     })
//       // eslint-disable-next-line no-console
//       .then(() => { console.log('Data'); })
//       // eslint-disable-next-line no-console
//       .catch((error) => { console.error(error); });
//   });
// }

// const listaPublicaciones = document.querySelector("#publicaciones")
//  export const setUpPublicaciones = data => {
//      if(data.length){
//         let html = ""
//         data.forEach(doc => {
//          const post = doc.data();
//          const li = `<li> ;
//             <h5>${post.titulo}</h5>
//             <p>${post.descripcion}</p>
//             </li>
//             `;
//           html += li;
//         });
//         listaPublicaciones.innerHTML = html
//      } else {
//         listaPublicaciones.innerHTML = "<p>logueate para ver las públicaciones</p>"
//      }
//   };

//   post(setUpPublicaciones)
