export function inicio() {
   let muro = `
   <p> Este es el muro </p>
   `;
   const divMuro = document.createElement("div");
   divMuro.innerHTML = muro;

   return divMuro
    }
