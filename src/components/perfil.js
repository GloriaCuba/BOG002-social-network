export function perfil() {
    let perfil = `
    <div id="contenedorPerfil">
       <div id="imagenPerfil" class="imagenPerfil">
       <p> Hola soy el perfil </p>
       </div>
       <div id="publicacionesUsuario" class="publicacionesUsuario"></div> 
    </div>
    `;
    const divPerfil = document.createElement("div");
    divPerfil.innerHTML = perfil;
 
    return divPerfil
     }  