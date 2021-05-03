let botonIngresar=document.getElementById("botonIngresar");
botonIngresar.addEventListener("click", ingresar);

export function ingresar(){
  let email = document.getElementById("email"); 
  let password = document.getElementById("password"); 
  const promise = auth.signInWithEmailAndPassword(email.value,password.value);
  promise.then(paginaPrincipal)
  promise.catch(function(error){
   console.log(alert(error)) 
  })   

// let botonRegistrarse=document.getElementById("botonSubir");
// botonRegistrarse.addEventListener("click", function(){
//   console.log("funcina")
// })

// let botonRegistr=document.getElementById("botonSubir");
// botonRegistra.addEventListener("click", autenticar);
//   function autenticar(){
//   console.log("Botón Enviar")
//   let email = document.getElementById("emailRegistrarse"); 
//   let password = document.getElementById("passwordRegistrarse"); 
//   const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
//   promise.catch(e =>alert(e.message));
//   alert("Registrado");    
// };
}



// let botonSubir= document.getElementById("botonSubir").addEventListener("click", autenticar);   
// let botonCerrarSesión= document.getElementById("botonCerrarSesión").addEventListener("click", cerrarSesión);  





// function cerrarSesión(){
//   auth.signOut();
//   alert ("Has cerrado sesión")  
// }