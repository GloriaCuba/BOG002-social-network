import { cerrarSesión } from '../firebase/firebase.js';
import { guardarPosts, obtenerPosts, eliminarPost, sumarLikes, restarLikes, obtenerLikes} from '../firebase/firestore.js';

// import { mostrarPosts } from '../firebase/post.js';

export function inicio() { // template de #inicio
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
            <input type='file' id='inputImagenPost' multiple="true" accept="image/*">
            <figure id="imagenPerfil">
                <img id='imagenPosteada'>
             </figure>
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

export function menuToggle() {// menu con acceso a perfil o salir de la plataforma
  const icono = document.querySelector('#menuToggle');
  icono.addEventListener('click', () => {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('opcionesMenuOpen');
    const menuOpen = document.getElementById('menuToggle');
    menuOpen.classList.toggle('menuToggleOpen');
  });
}

export function irAPerfil() {// redireccion a perfil
  const perfil = document.getElementById('perfil');
  perfil.addEventListener('click', () => {
    window.location = '#/perfil';
    location.reload();
  });
}

function submitHandler(e){ // asignando valores a los campos de nuestra bd posts
  e.preventDefault(); // Para que no se refresque la página
  const mensaje = muro['mensaje'].value;
  const date = firebase.firestore.Timestamp.now();
  let user = firebase.auth().currentUser;
  let displayName = user.displayName;
  let imagen = user.photoURL;
  let likes ='';
  let userId = user.uid;
  guardarPosts(mensaje, date, displayName, imagen, likes, userId);// funcion de firestore que almacena los valores de los parametros en la bd
  muro.reset()// limpia el campo de recoleccion 
}
export function postMuro() { 
  const muro = document.getElementById('muro');
  muro.addEventListener('submit', submitHandler);// envia los datos del formulario muro a la bd
}

export function verPosts() {// creamos el posts
  obtenerPosts((querySnapshot) => { // traemos obtener post de firestore callback q trae los datos, querySnapshot propiedad que da accesos a la bd
    document.getElementById('divSeccionPosts').innerHTML = ''; // vaciamos nuestro muro
    querySnapshot.forEach((doc) => { // accede a la bd uno por uno
      let user = firebase.auth().currentUser; // declaramos el usuario actual
      const nombreUsuario = user.displayName; // guardamos el user.display,asignado en bd de datos de configuracio perfil
      const emailUsuarios = doc.data().user;// accedemos a la data de los usuarios logeados
      // console.log(emailUsuarios);
      const divOriginal = document.getElementById('divSeccionPosts'); // div que contiene el muro
      const divMuro = document.createElement('div');// div muro, contiene el form para enviar
      divMuro.setAttribute('class', 'divMuro');
      divOriginal.appendChild(divMuro);// pintando form en contenedor
      const autorPost = document.createElement('p');//creando elemento p, contiene el nombre del autor 
      autorPost.setAttribute('class', 'autorPost');
      divMuro.appendChild(autorPost);
      autorPost.innerHTML = (doc.data().user);// pintando display name del usuario logeado
      const textPost = document.createElement('p');// creando elemento p, contiene el mensaje posteado
      textPost.setAttribute('class', 'divText');
      textPost.innerHTML = (doc.data().mensaje);// pintando mensaje
      divMuro.appendChild(textPost);
      const star = document.createElement('input');// creando elemento input
      star.setAttribute('type', 'image');
      star.setAttribute('id', 'star');
      star.setAttribute('class', 'star');
      divMuro.appendChild(star);// pintando star en cada post
      // console.log(doc.data()); 
      star.src="Img/Star_Likes_Blanca.png";// asignando ruta de img
      if(doc.data().likes!=''){ // si doc data likes esta vacio
        star.src="Img/Star_Likes.png"; // pinta star con esta nueva ruta de img
      }
      /* const starYellow = document.createElement('input');
      starYellow.setAttribute('type','image');
      starYellow.setAttribute('id','starYellow');
      starYellow.setAttribute('class','ocultar');
      starYellow.src = 'Img/Star_Likes.png';
      divMuro.appendChild(starYellow); */
      document.getElementById("holaUsuario").innerHTML = ('Hola ' + nombreUsuario);// Pintando saludo concatenado con nombre del usuario
      const photoProfile= document.createElement('img');// creando elemento img
      photoProfile.setAttribute('class', 'photoProfile');
      photoProfile.src = (doc.data().imagen);// asignando ruta de imagen dentro de la data
      divMuro.appendChild(photoProfile);// pintando foto
      const divLike = document.createElement('div'); // creando div para pintar star contabilizador de likes
      divLike.setAttribute('class', 'divLike');
      divLike.setAttribute('id', 'divLike');
      divLike.innerHTML= (doc.data().likes);// pintando likes alojados en bd
      divMuro.appendChild(divLike);
      if(nombreUsuario ==emailUsuarios){ // si el usuario es == al email se crearan bton eliminar editar
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
        botonBorrar.addEventListener('click', () => {// este evento ejecutara boton eliminar callback que ejecuta eliminar post de firestore
          botonEliminar(doc.id);
          console.log(doc.id);
          console.log(user.uid)
          console.log(nombreUsuario)
          console.log(emailUsuarios)
        });
        // recolectandoImagenPost(doc)
        botonEditar.addEventListener('click', () => {//este evento ejecutara botonEditar callback que ejecuta actualizandoPost de firestore
          botonEditarPost(doc.id, doc.data().mensaje);
        });
      }else{
        console.log('no estan los botones');
      } 
      star.addEventListener('click', () => {// este evento ejecutara sumar likes de firestore
        sumarLikes(doc.id).then(() => {
          document.getElementById('star').removeAttribute('id', 'star');
          document.querySelector('.star').setAttribute('id', 'starYellow');
          remover();
        });
      })
      function remover(){
        const starYellow = document.getElementById('starYellow'); 
        starYellow.addEventListener('click', () => {
          restarLikes(doc.id).then((id) => {
            console.log('wiii')
          });
        })
      }
      
    
      
      /* function verStars(){
        obtenerLikes((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if(doc.data().likes>0){
            document.getElementById('star').src='Img/Star_Likes.png';
            }
          });      
        });
      } */

    });
      
      
  });
    
  /*  like.addEventListener('click',likes(likes));
    function likes (likes) {
      likes++;
      console.log(likes)
    }; */

  function botonEliminar(id) {// ejecutamos la funcion eliminar post de firestore
    eliminarPost(id);
  }
}

function botonEditarPost(id, campo) {// el post guardado llega al campo de texto para editarlo
  document.getElementById('mensaje').value = campo;
  console.log (id, campo);
  actualizandoPost(id, campo);
}

function actualizandoPost(id) {
  const muro = document.getElementById('muro');// toma el form
  const postear = document.getElementById('postear');
  postear.innerHTML = 'Actualizar';//btn enviar se vuelve actualizar
  muro.removeEventListener('submit', submitHandler);//removemos el primer evento de guardar posts
  postear.addEventListener('click', function x(){
    const nuevoPost = firebase.firestore().collection('posts').doc(id); // ingresamos al id del post a editar
    const posteditado = document.getElementById('mensaje').value;// toma el nuevo valor del post
    console.log(nuevoPost);
    return nuevoPost.update({// retornamos nuevoPost y lo actualizamos con el metodo update
      mensaje: posteditado,// igualamos el campo mensaje de la bd con el post editado
    }).then(() => {
      console.log('editado');
      postear.innerHTML = 'Publicar';//cuando esto pase el btn retornara a publicar
      muro.addEventListener('submit', submitHandler);//retomara el evento para enviar post
      window.location = '#/inicio'; 
      location.reload();
    })
      .catch((error) => {
        console.error('error al editar', error);
      });
  });
} 
export function salir() {// evento que ejecuta cerrarSesion en firebase y redirecciona la interfaz
  const salir = document.querySelector('#salir');
  salir.addEventListener('click', () => {
    cerrarSesión();
    window.location = '';
    location.reload();
  });
}
// export function recolectandoImagenPost(doc) {
//   const campoFoto = document.getElementById("imagenPosteada")//es donde se mostrara la imagen elegida
//   var user = firebase.auth().currentUser;//se le asigna una variable al usuario actual
//   campoFoto.src = (doc.data().photoURL);//se llama el campo y se le asigna la URL de la foto cargada al usuario 
//   const ref = firebase.storage().ref()// se declara una varible para la ref. de storage donde almacenara las imagenes
//   const btnGuardarPhoto = document.getElementById('postear');
//   btnGuardarPhoto.addEventListener('click', (e) => {// q es e?
//     console.log("diste click")
//     let userImagen = document.querySelector('#inputImagenPost').files[0];//id de input tipo file para la imagen
//     const name = userImagen.name//
//     // readImage();
//     guardarFotoPost(name, userImagen)//importada de firestore, guarda la foto cargada en URL unico
//   })
// }