import { cerrarSesión} from '../firebase/firebase.js';

export function inicio() {
   let muro = `
   <div id="contenedorMuro">
   <h1>Pet Book</h1>
   <div id="menu" class="menu">
      <button type="button" id="salir">Salir</button> 
      <button type="button" id="editarPerfil">Configurar perfil</button>
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
   <div id="post">
      <h4>¿Que estas pensando<h4>
      <input type="text" id"text"></input><br>
      <input type="text" id"text"></input><br>
      <input type="text" id"text"></input><br>
   </div>
   </div>
   `;
   const divMuro = document.createElement("div");
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

      export function irAperfil(){
         const perfil=document.getElementById("editarPerfil");
         perfil.addEventListener("click",()=>{
               window.location = '#/configuracionPerfil';
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
  

   // const listaPublicaciones = document.querySelector("#publicaciones")
   //  export const setUpPublicaciones = data => {
   //      if(data.length){
   //         let html = ""
   //         data.forEach(doc => {
   //          const post = doc.data();
   //          const li = `<li> 
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

   //   post(setUpPublicaciones);