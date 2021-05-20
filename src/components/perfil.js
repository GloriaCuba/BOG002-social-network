export function perfil() {
    let perfil = `
    <div id="contenedorPerfil">
       <button type="button" id="configuracionPerfil">Configurar mi perfil</button> 
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

     export function configurarPerfil(){
      const perfil=document.getElementById("configuracionPerfil");
      perfil.addEventListener("click",()=>{
            window.location = '#/configuracionPerfil';
            location.reload()                          
      })
}
