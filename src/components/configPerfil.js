import { datosCollection } from '../firebase/firestore.js';

export function configPerfil() {
  const formularioPerfil = `
      <div class="contenedorPerfil" method ="post">
          <h1>Configuración de Perfil</h1>
          <div class="contenedorOpciones">
          <h3> Opciones a configurar </h3> <br>
          <button type='button' id='botonInputs'>Informacion Personal</button>
          <button type='button' id='botonImagen'>Foto de perfil</button>
        </div>
          <div class="contenedorInputs" id="contenedorInputs">
              <h3> Complete los siguientes campos </h3> <br>
             <form id="datosUsuario">
              <input type='text' id='userId'placeholder="Nombre de Usuario"></input> <br>
              <input id='nombreMascota' placeholder="Nombre de tu mascota"></input><br>
              <h3> ¿Que mascota tienes? </h3>
              <select id="menuEspecies" class="menuEspecies">
                <option>Ave</option>
                <option>Caballo</option>
                <option>Conejo</option>
                <option>Gato</option>
                <option>Perro</option>
                <option>Pez</option>
                <option>Roedor</option>
                <option>Otro</option>
              </select> <br>
            <button id='btnDatos'>Guardar</button>
            </form>
          </div>
          <div class="contenedorImagen" id="contenedorImagen">
            <p>Sube una imagen de perfil</p> <br>
            <input type='file' id='inputUserImage' multiple="false" accept="image/*">
             <figure id="imagenPerfil">
                <img id='userImage'>
             </figure>
            <button type='button' id='botonGuardar'>Guardar</button>
          </div>
      </div>
    `;
  const divPerfil = document.createElement('div');
  divPerfil.innerHTML = formularioPerfil;
  return divPerfil;
}

// export function menuEspecies() {
//   const linkMenu = document.getElementById('linkMenuEspecies');
//   const subMenu = document.getElementById('subMenuEspecies');
//   linkMenu.addEventListener('click', () => {
//     subMenu.classList.toggle('mostrarMenu');
//     eslint-disable-next-line no-console
//     return console.log('hiciste click');
//   });
//
export function irAlPerfil() {
  const botonGuardar = document.getElementById('botonGuardar');
  botonGuardar.addEventListener('click', () => {
  //  window.location = '#/perfil';
    // eslint-disable-next-line no-restricted-globals
  // location.reload();
  });
}

export function recoletandoDatos() {
  const userId = document.getElementById('userId');
  const nomMascota = document.getElementById('nombreMascota');
  const especie = document.getElementById('menuEspecies');
  // const datosCollection = firebase.firestore().collection('Datos');
  const btndatos = document.getElementById('btnDatos');
    btndatos.addEventListener('click', () => {
  console.log('click');
   datosCollection(userId, nomMascota, especie)
    });
}

export function recolectandoImagen() {
  const ref = firebase.storage().ref()
  const btnGuardarPhoto = document.getElementById('botonGuardar');
    btnGuardarPhoto.addEventListener('click', (e) => {
    console.log("diste click")
    let userImagen = document.querySelector('#inputUserImage').files[0];
    const campoFoto= document.getElementById("userImage")
    const name = userImagen.name
    const task = ref.child(name).put(userImagen)
    task.then(snapshot => snapshot.ref.getDownloadURL())
    .then(url=> {
      console.log(url)
      console.log("subio")
      var user = firebase.auth().currentUser;
      console.log(user);
      user.updateProfile({
      photoURL: url
      }).then(() =>{
      campoFoto.src= url
      }).catch(function(error) {
      // An error happened.
      });
    })
   })
}

// function init() {
//   var inputFile = document.getElementById('inputUserImage');
//   inputFile.addEventListener('change', mostrarImagen, false);
// }

// export function mostrarImagen(event) {
//   var file = event.target.files[0];
//   var reader = new FileReader();
//   reader.onload = function(event) {
//     var img = document.getElementById('userImage');
//     img.src= event.target.result;
//   }
//   reader.readAsDataURL(file);
// }

// window.addEventListener('load', init, false);



// export function seleccionarFoto() {
//   const divPhoto = document.getElementById(' imagenPerfil');
//   const inputUser = document.getElementById('inputUserImage').value;
//   inputUser.addEventListener("click", ()=> {
//     let img = document.createElement("img")
//     img = `${doc.userPhoto}`;
//     divPhoto.appendChild(img)
//   })
// }

// export function fotoUsuario(){
//   // const userId = document.getElementById('userId');
//   const userPhoto = document.getElementById('userImage');
//   const datosCollection = database.collection('Datos');
//   const btnPhoto = document.getElementById('botonGuardar');
//   btnPhoto.addEventListener('click', (e) => {
//     console.log('click');
//     e.preventDefault();
//     datosCollection.doc(userId.value).set({
//       // usuario: userId.value,
//       fotoPerfil: userPhoto
//     })     
//     .then(() => { 
//     let div = document.createElement("img")

  
//     })
//   .catch((error) => { console.error(error); });
//    });
// }


export function mostrarInputs() {
const botonMostrarInputs= document.getElementById('botonInputs');
botonMostrarInputs.addEventListener("click", ()=> {
  document.querySelector("#contenedorImagen").style.display="none"
  document.querySelector("#contenedorInputs").style.display="block"
 })
}

export function ocultarCambioImagen() {
  const botonMostrarInputs= document.getElementById('botonImagen');
  botonMostrarInputs.addEventListener("click", ()=> {
   document.querySelector("#contenedorImagen").style.display="block"
   document.querySelector("#contenedorInputs").style.display="none"
   
  })
}

