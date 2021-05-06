export function interfazPrincipal() {
    let seleccionarIngreso=
    `
      <div id="home" class="home">
        <h1 id="titulo">PETBOOK</h1>
        <button type="button" id="botonIngreso">Iniciar sesión</button>
        <h4 id="botonRegistro" class="botonRegistro">registrate</h4>
      </div>     
  ` 
 const divIngreso = document.createElement("div");
 divIngreso.innerHTML = seleccionarIngreso;
 return divIngreso
 }

 export function ingresoApp() {
    const botonRegistrarse = document.getElementById("botonIngreso");
    botonRegistrarse.addEventListener("click", function() {
     window.location = '#/iniciarSesion';
     location.reload()
    }); 
 };
 
 export function funcionRegistrarse() {
    const botonRegistrarse = document.getElementById("botonRegistro");
    botonRegistrarse.addEventListener("click", function() {
     window.location = '#/registro';
     location.reload()
    }); 
 };