import { cerrarSesión } from '../firebase/firebase.js';

export function inicio() {
  const muro = `
   <div id="contenedorMuro">
   <h1>Pet Book</h1>
   <div id="botones">
   <button type="button" id="salir">Salir</button> 
   <button type="button" id="editarPerfil">Configurar perfil</button> 
   </div>
   <div id="containerFiltro">
   <h2>!Encuentra a tus amigos¡</h2>
   <img src="Img/Perro.jpg" width= 200px height=200px id="filtroCaninos">
   <img src="Img/Gato.jpg" width= 200px height=200px id="filtroFelinos">
   <img src="Img/conejo.jpg" width= 200px height=200px id="filtroRoedores">
   <img src="Img/pez1.jpg" width= 200px height=200px id="filtroRoedores">
   </div>
   <div id="muro">
   <h4>¿Que estas pensando<h4>
   <input type="text" id="mensaje"></input><br>
   <button type="button" id="postear">Enviar</button>
   
   </div>
   </div>
   `;
  const divMuro = document.createElement('div');
  divMuro.innerHTML = muro;

  return divMuro;
}

export function salir() {
  // eslint-disable-next-line no-shadow
  const salir = document.querySelector('#salir');
  salir.addEventListener('click', () => {
    cerrarSesión();
    window.location = '';
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
}

export function editarPerfil() {
  // eslint-disable-next-line no-shadow
  const editarPerfil = document.querySelector('#editarPerfil');
  editarPerfil.addEventListener('click', () => {
    window.location = '#/configuracionPerfil';
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
}

export function postMuro() {
// const idPost = document.getElementById('la');
  const mensaje = document.getElementById('mensaje');
  const postear = document.getElementById('postear');
  // const especie = document.getElementById('especie');
  const database = firebase.firestore();
  const posteando = database.collection('muro');
  // const btndatos = document.getElementById('btnDatos');
  postear.addEventListener('click', (e) => {
    // eslint-disable-next-line no-console
    console.log('posteo');
    e.preventDefault();
    posteando.add({
      mensaje: mensaje.value,
    })
      // eslint-disable-next-line no-console
      .then(() => { console.log('Data'); })
      // eslint-disable-next-line no-console
      .catch((error) => { console.error(error); });
  });
}

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
