export function perfil() {
    let perfil = `
    <div id="contenedorPerfil">
       <button type="button" id="configuracionPerfil">Configurar mi perfil</button> 
       <div id="imagenPerfil" class="imagenPerfil">
       <p> Hola soy el perfil </p>
       </div>
       <h2 id="nameUser"> </h2>
       <img id="userImage" class="fotoPerfil">
      
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
export function traerDatos(){
      
}
 
export function ImagenPerfil() {
      const campoFoto= document.getElementById("userImage")
      var user = firebase.auth().currentUser;
/*    var name, email, photoUrl, uid, emailVerified;
 */   campoFoto.src = user.photoURL;
      console.log(user.providerData);
   document.getElementById("nameUser").innerHTML= user.displayName;
  
      /* var user = firebase.auth().currentUser;

      if (user != null) {
            user.providerData.forEach(function (profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
            });
      } */
} 