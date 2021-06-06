import { datosCollection, guardarFotoPerfil } from '../firebase/firestore.js';

export function configPerfil() {
  const formularioPerfil = `
      <div class="contenedorPerfil" method ="post">
        <header>
        <div class="history">
          <img src="Img/atrasIcono.png" type='button' id='irAtras'>
          <img src="Img/adelanteIcono.png" type='button' id='irDelante'>
        </div>
      </header>
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
            <p id="mensajeCargarFoto" class="mensajeCargarFoto"> De click en guardar para almacenar su foto correctamente  </p>
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

export function atras() { 
let siguientePagina = document.getElementById("irAtras");
siguientePagina.addEventListener("click", ()=> {
  console.log("si funciono")
  window.history.go(-1)
  // location.reload()
})
}

export function irAlPerfil() {
  const botonGuardar = document.getElementById('botonGuardar');
  botonGuardar.addEventListener('click', () => {
   window.location = '#/perfil';
    // eslint-disable-next-line no-restricted-globals
  location.reload();
  });
}


export function recoletandoDatos() {
  const userId = document.getElementById('userId');
  const nomMascota = document.getElementById('nombreMascota');
  const especie = document.getElementById('menuEspecies');
  const btndatos = document.getElementById('btnDatos');
  btndatos.addEventListener('click', () => {
    datosCollection(userId, nomMascota, especie)
  });
};


 export function recolectandoImagen() {
  const campoFoto= document.getElementById("userImage")
  var user = firebase.auth().currentUser;
  campoFoto.src = user.photoURL;
  const ref = firebase.storage().ref()
  const btnGuardarPhoto = document.getElementById('botonGuardar');
    btnGuardarPhoto.addEventListener('click', (e) => {
      let userImagen = document.querySelector('#inputUserImage').files[0];
          const name = userImagen.name;
          guardarFotoPerfil(name, userImagen)
          readImage()
    })
  }

export function readImage() {
  const campoFoto= document.getElementById("userImage")
  const btnFile= document.getElementById("inputUserImage")
  btnFile.addEventListener("change", function() {
    document.getElementById("mensajeCargarFoto").style.display="block"
    const file = this.files[0];
    const reader=new FileReader();
    reader.onload =function(){ 
    const result= reader.result;
    campoFoto.src = result;
  }
  if (file){ 
    reader.readAsDataURL(file);
  }
  });
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
