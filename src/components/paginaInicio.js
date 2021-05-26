/* eslint-disable no-undef */
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
<<<<<<< HEAD
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
=======
  const muro = document.getElementById('muro');
  muro.addEventListener('click', (e) => {
    console.log('click');
    e.preventDefault(); // Para que no se refresque la página
    const mensaje = muro.mensaje.value;
    const date = firebase.firestore.Timestamp.now();
    //  console.log(date);
    // const mensaje = document.getElementById('mensaje').value;
     console.log(mensaje);
    guardarPosts(mensaje, date);
  });

  function guardarPosts(mensaje, date) {
    const posts = firebase.firestore().collection('posts').doc().set({
      mensaje,
      date,
    })
      .then(() => {
      // obtener el id del doc, para encontrar la data especifica where
      // document.getElementById("seccionPosteos").innerHTML="hola, este es tu post " + mensaje;
        verPosts();
      // imprimirPosts();
      });
  }
}

export function verPosts() {
  firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    document.getElementById('seccionPosteos').innerHTML = '';
    querySnapshot.forEach((doc) => {
      const divOriginal = document.getElementById('seccionPosteos');
      const mensaje = document.createElement('div');
      mensaje.className = 'elementosPosts';
      const texto = document.createTextNode(doc.data().mensaje);
      const campo = document.createElement('p');
      const botonBorrar = document.createElement('button');
      const botonEditar = document.createElement('button');
      campo.setAttribute('id', 'campo');
      botonBorrar.className = 'botonBorrar';
      botonBorrar.type = 'button';
      botonBorrar.textContent = 'Borrar post';
      botonBorrar.setAttribute('id', 'botonBorrar');
      botonEditar.className = 'botonEditar';
      botonEditar.type = 'button';
      botonEditar.textContent = 'Editar';
      botonEditar.setAttribute('id', 'botonEditar');
      //  botonEditar.innerText = 'Editar post';
      // const fecha = document.createTextNode(doc.data().date);
      mensaje.setAttribute('data-id', doc.id);
      campo.appendChild(texto);
      mensaje.appendChild(campo);
      // divOriginal.appendChild(fecha);
      mensaje.appendChild(botonBorrar);
      mensaje.appendChild(botonEditar);
      divOriginal.appendChild(mensaje);

      botonBorrar.addEventListener('click', () => {
        botonEliminar(doc.id);
        // console.log(doc.id);
      });
      botonEditar.addEventListener('click', () => {
        botonEditarPost(doc.id, campo);
        console.log(campo);
      });
    });
  });
}

function botonEliminar(id) {
  firebase.firestore().collection('posts').doc(id).delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
}

function botonEditarPost(id, campo) {
  document.getElementById('mensaje').value = mensaje;
  mensaje.innerHTML = campo;
  console.log (id, '=>'+ mensaje);
  actualizandoPost(id,campo);
  /* firebase.firestore.Timestamp.now();
      let date = firebase.firestore.Timestamp.now(); */
}

function actualizandoPost(id) {
  const postear = document.getElementById('postear');

  postear.innerHTML = 'Actualizar';
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
        console.error('error al editar');
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
>>>>>>> fbf69a6f04e2f7ca22105371f08406e6610fbb28
