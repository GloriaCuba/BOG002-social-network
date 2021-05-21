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
             <input type='file' id='inputUserImage'>
             <figure id="imagenPerfil">
                <img src='' id='userImage'>
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
// }
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
  const datosCollection = database.collection('Datos');
  const btndatos = document.getElementById('btnDatos');
  btndatos.addEventListener('click', (e) => {
    // eslint-disable-next-line no-console
    console.log('click');
    e.preventDefault();
    datosCollection.doc(userId.value).set({
      usuario: userId.value,
      Nombre_Mascota: nomMascota.value,
      Especie: especie.value,
    })
      .then(() => { console.log('Data'); })
        location.reload()
      .catch((error) => { console.error(error); });
  });
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

