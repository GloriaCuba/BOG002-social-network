import { datosCollection, guardarFotoPerfil } from '../firebase/firestore.js';// traemos las funciones de firestore que guardan las colecciones

export function configPerfil() { // template de # configperfil
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
            <p id="mensajeCargarFoto" class="mensajeCargarFoto"> Espere un momento mientras carga la foto </p>
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
  window.history.go(-1)//
  // location.reload()
})
}

export function irAlPerfil() {
  const botonGuardar = document.getElementById('botonGuardar');
  botonGuardar.addEventListener('click', () => {
    console.log('hola1')
    window.location = '#/perfil';
    location.reload();
  });
}


export function recoletandoDatos() {//traemos la informacion del formulario, ejecutamos datosCollection que guarda la info en la base de datos
  const userId = document.getElementById('userId');
  const nomMascota = document.getElementById('nombreMascota');
  const especie = document.getElementById('menuEspecies');
  const btndatos = document.getElementById('btnDatos');
  btndatos.addEventListener('click', () => {
    console.log('hola'),
    window.location = '#/perfil';
    location.reload();
    datosCollection(userId, nomMascota, especie)
  });
};


export function recolectandoImagen() {
  const campoFoto = document.getElementById("userImage")//es donde se mostrara la imagen elegida
  var user = firebase.auth().currentUser;//se le asigna una variable al usuario actual
  campoFoto.src = user.photoURL;//se llama el campo y se le asigna la URL de la foto cargada al usuario 
  const ref = firebase.storage().ref()// se declara una varible para la ref. de storage donde almacenara las imagenes
  const btnGuardarPhoto = document.getElementById('botonGuardar');
    btnGuardarPhoto.addEventListener('click', (e) => {// q es e?
    document.getElementById("mensajeCargarFoto").style.display = "block" //el evento 
    console.log("diste click")
    let userImagen = document.querySelector('#inputUserImage').files[0];//id de input tipo file para la imagen
    const name = userImagen.name//
    readImage();
    guardarFotoPerfil(name, userImagen)//importada de firestore, guarda la foto cargada en URL unico
   })
}
export function readImage() {
  const campoFoto= document.getElementById("userImage")//donde se mostrara la foto
  const btnFile= document.getElementById("inputUserImage")//id de input tipo file para la imagen
  btnFile.addEventListener("change", function() {//evento change -cambio para que sea automatico cuando exista un cambio de eleccion
    const file = this.files[0];//se declara una variable que aloja el archivo 
    const reader=new FileReader(); //fileReader un objeto q permite leer el contenido de archivos
    reader.onload =function(){ //onload evento que se ejecuta cuando la carga esta terminada
    const result= reader.result;//se guarda el resultado del evento
    campoFoto.src = result;//el resultado de la lectura se muestra en el campoFoto
  }
  if (file){ 
  reader.readAsDataURL(file);//si file carga se dara el metodo readAsDataURL que se usa para leer el contenido del archivo
  }
  });
}

export function mostrarInputs() {// cambio de formulario
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
