export function inicio() {
   let muro = `
  <div id="contenedorMuro">
   <h1>Pet Book</h1>
   <div id="containerFiltro">
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
