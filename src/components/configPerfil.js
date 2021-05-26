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
<<<<<<< HEAD
             <input type='file' id='inputUserImage' multiple="false" accept="image/*">
=======
            <input type='file' id='inputUserImage' multiple="false" accept="image/*">
>>>>>>> 3a232c6cc1e7805398bc5e67dbaa4b8c0bdfddb4
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


/* <button onclick="recoletandoImagen() id="botonGuardar"> Guardar </button> */

export function irAlPerfil() {
  const botonGuardar = document.getElementById('botonGuardar');
  botonGuardar.addEventListener('click', () => {
 /*    window.location = '#/perfil';
    // eslint-disable-next-line no-restricted-globals
    location.reload(); */
  });
}


export function recoletandoDatos() {
  const userId = document.getElementById('userId');
  const nomMascota = document.getElementById('nombreMascota');
  const especie = document.getElementById('menuEspecies');
  // const datosCollection = firebase.firestore().collection('Datos');
  const btndatos = document.getElementById('btnDatos');
  btndatos.addEventListener('click', () => {
    datosCollection(userId, nomMascota, especie)
    .then(() => { console.log('Data'); 
    // recoletandoImagen()
    // location.reload()
  })
  .catch((error) => { console.error(error); });
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
      campoFoto.src= url
    })
   })
  }



// export function recoletandoImagen() {
// const btnGuardarPhoto = document.getElementById('botonGuardar');
//   btnGuardarPhoto.addEventListener('click', (e) => {
//   let userImagen = document.querySelector('#inputUserImage').files[0];
//   const campoFoto= document.getElementById("userImage");
//   const name = userImagen.name;
//   guardarFotoPerfil(name, userImagen)
//   .then((url) => {
//     console.log(url)
//     alert("subio")
//     campoFoto.src= url
//   })
//  })
// }

export function recoletandoImagen() {
  const ref = firebase.storage().ref()
  const btnGuardarPhoto = document.getElementById('botonGuardar');
    btnGuardarPhoto.addEventListener('click', (e) => {
    let userImagen = document.querySelector('#inputUserImage').files[0];
    const campoFoto= document.getElementById("userImage")
    const name = userImagen.name
    const task = ref.child(name).put(userImagen)
    task.then(snapshot => snapshot.ref.getDownloadURL())
    .then(url=> {
      console.log(url)
      alert("subio")
      campoFoto.src= url
    })
   })
  }

  



  


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



