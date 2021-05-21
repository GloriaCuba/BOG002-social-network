import { cerrarSesión } from '../firebase/firebase.js';
// import { db } from '../index.html';

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
         <button class="botonEnviar id="postear">Enviar</button>
      </div>
   </form>
   <div id="seccionPosteos"> </div>
   </div>
   `;
  const divMuro = document.createElement('div');
  divMuro.innerHTML = muro;

   return divMuro
    }  

   export function menuToggle() {
      let icono = document.querySelector("#menuToggle")
        icono.addEventListener("click", () => {
         let menu = document.querySelector("#menu");  
         menu.classList.toggle("opcionesMenuOpen")
         let menuOpen = document.getElementById('menuToggle');
         menuOpen.classList.toggle('menuToggleOpen'); 
        })          
      }

      export function irAPerfil(){
         const perfil=document.getElementById("perfil");
         perfil.addEventListener("click",()=>{
               window.location = '#/perfil';
               location.reload()                          
         })
   }

   export function salir(){
      const salir=document.querySelector("#salir");
      salir.addEventListener("click",()=>{
            cerrarSesión()
            window.location = '';
            location.reload()                          
      })
   }

export function postMuro(){
   const muro = document.getElementById("muro");
   muro.addEventListener('submit', e =>{
      e.preventDefault();  /* Para que no se refresque la página*/
      const mensaje = muro['mensaje'].value;
      const date = firebase.firestore.Timestamp.now();
      console.log(date)
   // const mensaje = document.getElementById('mensaje').value;
      //console.log(mensaje);
      guardarPosts(mensaje,date)
      
   });



   function guardarPosts(mensaje,date){
      let posts = firebase.firestore().collection('posts').doc().set({
      mensaje,
      date 
      }).then(() => { 
         //obtener el id del doc, para encontrar la data especifica where
         //document.getElementById("seccionPosteos").innerHTML="hola, este es tu post " + mensaje;
        verPosts();
         //imprimirPosts();
      });
   }
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
   function verPosts(){
      firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
         document.getElementById("seccionPosteos").innerHTML='';
         querySnapshot.forEach((doc) => {
         //console.log(doc.id + doc.data().mensaje );
         let campo = document.createElement("div")
         let texto = document.createTextNode(doc.data().mensaje );
         campo.appendChild(texto);
         let divOriginal = document.getElementById("seccionPosteos")
         divOriginal.appendChild(campo);
         });
      });
   } 
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

      function imprimirPosts(){
         firebase.firestore().collection('posts').doc().onSnapshot((doc)=>{
             console.log(doc.data().mensaje);
            });
      } 
}


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
