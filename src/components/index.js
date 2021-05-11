// aqui exportaras las funciones que necesites
/*
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
*/
const formulario = document.getElementById("formularioRegistro") 
const inputs = document.querySelectorAll("#formularioRegistro input")

let contraseña = document.getElementById("passwordAuth")
let contraseña2 = document.getElementById("passwordAuth2")

const campos = {
	emailAuth: false,
	passwordAuth: false,
	passwordAuth: false,
}