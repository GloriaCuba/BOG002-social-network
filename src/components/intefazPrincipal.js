export function interfazPrincipal() {
  const seleccionarIngreso = `
      <div id="home" class="home">
        <h1 id="titulo">PET<br>BOOK</h1>
        <img src="img/fondo_perro.jpg" alt="" id="fondoPerro">
        <img src="img/fondo_gato.jpg" alt="" id="fondoGato">
        <img src="img/fondo_perro2.jpg" alt="" id="fondoPerro2">
        <button type="button" id="botonIngreso">Iniciar sesión</button>
        <h3 id="invitacion">¿Aún no eres parte de PetBook?</h3>
        <button type="button" id="botonRegistro">Registrate</button>
      </div>     
  `;
  const divIngreso = document.createElement('div');
  divIngreso.innerHTML = seleccionarIngreso;
  return divIngreso;
}

export function ingresoApp() {
  const botonRegistrarse = document.getElementById('botonIngreso');
  botonRegistrarse.addEventListener('click', () => {
    window.location = '#/iniciarSesion';
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
}

export function funcionRegistrarse() {
  const botonRegistrarse = document.getElementById('botonRegistro');
  botonRegistrarse.addEventListener('click', () => {
    window.location = '#/registro';
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
}
