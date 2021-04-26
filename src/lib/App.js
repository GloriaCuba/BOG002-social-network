export function iniciarSesion(){
    let ingreso=document.getElementById("root")
    let formulario='<form class="formulario"><h1>Bienvenido</h1><label for="email"></label><input type="email"id="email"placeholder="Email"required><label for="password"></label><br><input type="password"id="password"placeholder="Password"name="password"required><br><button type="button" id="botonIngresar">Iniciar Sesion</button><h6>¿Olvidaste tu contraseña?</h6><br><button type="button" id="botonSubir">Crea una nueva cuenta</button></form>'
    ingreso.innerHTML=formulario
}


export function paginaPrincipal(){
    let principal=document.getElementById("root")
    let saludo='<h1>principal</h1>'
    principal.innerHTML=saludo
}

