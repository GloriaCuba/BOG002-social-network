export function configPerfil() {
    const formularioPerfil = `
      <div class="contenedorPerfil" method ="post">
          <h1>Configuración de Perfil</h1>
          <input id='inputUserName' placeholder="Nombre de Usuario">
          <p>Sube una imagen de perfil</p>
          <input type='file' id='inputUserImage'>
          <ul class="menuEspecies">
              <li><a id="linkMenuEspecies" href="#">Selecciona tu especie</a>
                  <ul class="subMenuEspecies" id="subMenuEspecies">
                      <li><a href="#">Canino</a></li>
                      <li><a href="#">Gatuno</a></li>
                      <li><a href="#">Roedor</a></li>
                      <li><a href="#">Otros</a></li>
                  </ul>
              </li>
          </ul>
          <figure>
              <img src='img/foto_perfil.jpg' id='userImage'>
          </figure>
          <button type='button' id='botonGuardar'>Guardar</button>
      </div>
    `;
    const divPerfil = document.createElement('div');
    divPerfil.innerHTML = formularioPerfil;
    return divPerfil;
  }
  export function menuEspecies() {
    const linkMenu = document.getElementById('linkMenuEspecies');
    const subMenu = document.getElementById('subMenuEspecies');
    linkMenu.addEventListener('click', function () {
      subMenu.classList.toggle('mostrarMenu');
      return console.log('hiciste click');
    });
  }
  export function irAlMuro() {
    let botonGuardar = document.getElementById("botonGuardar");
    botonGuardar.addEventListener("click", () => {
             window.location = '#/inicio';
             location.reload()
            });
}