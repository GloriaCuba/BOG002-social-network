import { cerrarSesión } from '../firebase/firebase.js';

export function inicio() {
   let muro = `
   <div id="contenedorMuro">
   <h1>Pet Book</h1>
   <div id="containerFiltro">
   <button type="button" id="salir">Salir</button>
   <h3>!Encuentra a tus amigos¡</h3>
   <button type="button" id="filtroCaninos"> Caninos</button>
   <button type="button" id="filtroFelinos"> Felinos </button>
   <button type="button" id="filtroRoedores"> Roedores </button>
   <button type="button" id="filtroOtros"> Otros </button> <br>
   <h4>¿Que estas pensando<h4>
   <input type="text" id="post"></input><br>
   <input type="text" id="post"></input><br>
   <input type="text" id="post"></input><br>
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
            window.location = '#/';
            location.reload()
            console.log("cerrarSesion")
            
          
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