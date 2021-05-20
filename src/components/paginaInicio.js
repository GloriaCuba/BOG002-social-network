import { cerrarSesión } from '../firebase/firebase.js';

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
   <div id="muro">
   <h4>¿Que estas pensando<h4>
     <form id="mensajePostear">
     <input type="text" id="mensaje"></input><br>
     <button type="submit" id="postear">Enviar</button>
     </form>
   </div>
   <div id="contenedorPublicaciones"> </div>
   </div>
   `;
  const divMuro = document.createElement('div');
  divMuro.innerHTML = muro;

   return divMuro
    }  

   //  <button type="button" id="perfil" class="perfil">Perfil</button>
   //  <button type="button" id="salir" class="salir">Salir</button>

 
//     <div class="iconoMenu"">
//     <img src="Img/menu-regular.png" id="iconoMenu">
//  </div>

 
   
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
let  database = firebase.firestore();

export function postMuro() {
//   const mensaje = document.getElementById('mensaje');
  const publicaciones = document.querySelector('#mensajePostear')
  publicaciones.addEventListener('submit', async (e) =>{
   e.preventDefault();
   const mensaje = publicaciones["mensaje"].value;   
      await guardarPublicacion(mensaje)
         publicaciones.reset();
   })

const guardarPublicacion = (mensaje) => 
database.collection('muro').add({
   mensaje
   })
  }

export function mostrarData() {
   let contenedorPublicaciones = document.getElementById("contenedorPublicaciones")
   database.collection("muro").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc)=> {
      console.log(`${doc.id} => ${doc.data().mensaje}`)
      contenedorPublicaciones.innerHTML += `
         <div> 
           ${doc.data().mensaje}
         </div>`
         })
      })
   }

export function borrarCampos() {
   db.collection("cities").doc("DC").delete().then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
}

  //   const postear = document.getElementById('postear');
//   postear.addEventListener('click', (e) => {
//     // eslint-disable-next-line no-console
//     console.log('posteo');
//     e.preventDefault();
//     posteando.add({
//       mensaje: mensaje.value,
//     })
//       // eslint-disable-next-line no-console
//       .then(() => { console.log('Data');})
//       // eslint-disable-next-line no-console
//       .catch((error) => { console.error(error); });



// export function postear() {
// const db = firebase.firestore();
// const publicaciones = document.querySelector('#mensajePostear')
// publicaciones.addEventListener('submit', async (e) =>{
//    e.preventDefault();

// const description = publicaciones["mensajePosteo"].value;   
//    await guardarPublicacion(description)
// publicaciones.reset();
// })

// const guardarPublicacion = (description) => 
// db.collection("publicaciones").doc().set({
//    description
//    })
//   }




// const contenedorPublicaciones = document.querySelector("#contenedorPublicaciones")
// const mostrarPublicaciones = () => db.collection("publicaciones").get();
// window.addEventListener("DOMContentLoaded", async (e) => {
//    const querySnapshot = await mostrarPublicaciones();
//    querySnapshot.forEach(doc => {
//       contenedorPublicaciones.innerHTML +=`<div> 
//        ${doc.data()}
//       </div>`
//       console.log(doc.data())
//    })
   
//  })
// }





