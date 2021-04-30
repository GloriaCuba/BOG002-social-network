export function iniciarSesion() {
let formulario =
`<form class="formulario">
    <h1>PETBOOK</h1>
     <div class="emailandpasword">
        <label for="email"></label><input type="email"id="email"placeholder="Email"required>
        <label for="password"></label><br>
        <input type="password"id="password"placeholder="Password"name="password"required><br>
        <button id="botonIngresar">ingresar</button> <br>
        <a href=""> ¿Olvidaste tu contraseña?</a>
      </div>

     <div class="registrarse">
        <h4>¿Aun no tienes una cuenta?<h4>
        <button id="irRegistro">registrarse</button>
     </div>
</form>
 ` 
const divFormulario = document.createElement("div");
divFormulario.innerHTML = formulario;

return divFormulario
}

