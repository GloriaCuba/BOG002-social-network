import { cerrarSesión} from '../firebase/firebase.js';

export function inicio() {
   let muro = `
   <div id="contenedorMuro">
   <h1>Pet Book</h1>
   <div class="iconoMenu"">
      <img src="Img/menu-regular.png" width= 15em height=40em id="iconoMenu">
   </div>
   <div id="menu" class="menu active">
   <ul>
     <li><button type="button" id="perfil" class="perfil">Perfil</button></li>
     <li>  <button type="button" id="salir" class="salir">Salir</button></li>
   </ul>
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
   
   export function salir(){
      const salir=document.querySelector("#salir");
      salir.addEventListener("click",()=>{
         cerrarSesión()
            window.location = '';
            location.reload()                          
      })
   }

   export function menuToggle() {
   const icono = document.querySelector("#iconoMenu")
   const menu = document.querySelector("menu");

     icono.addEventListener("click", () => {
      menu.classList.toggle("active");
      document.body.classList.toggle("opacity");
       })
     }

   // const rutaActual = e.target.getAttribute("src")
   // if (rutaActual== "Img/menu-regular.png"){
   //    e.target.setAttribute("src", "Img/menu-regular2.png")
   // }else {
   //    e.target.setAttribute("src", "Img/menu-regular2.png")
   // }

   

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