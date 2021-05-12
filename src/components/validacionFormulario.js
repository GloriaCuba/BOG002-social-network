const expresiones = {
	contraseña: /^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

}

export function validarFormulario(e){
switch(e.target.name) {
    case "email" :
        if (expresiones.email.test(e.target.value)){
         document.getElementById("emailAuth").style.borderColor = '#25FA00'
         document.getElementById("emailAuth").style.borderWidth = "5px 5px 5px 5px"
        } else {
         document.getElementById("emailAuth").style.borderColor = '#FF1C00' 
         document.getElementById("emailAuth").style.borderWidth = "5px 5px 5px 5px" 
        }
    break;
    case "contraseña":
        if (expresiones.contraseña.test(e.target.value)){
            document.getElementById("passwordAuth").style.borderColor = '#25FA00'
            document.getElementById("passwordAuth").style.borderWidth = "5px 5px 5px 5px"
            document.getElementById("descripcionError").style.display="none"  
           } else {
            document.getElementById("passwordAuth").style.borderColor = '#FF1C00' 
            document.getElementById("passwordAuth").style.borderWidth = "5px 5px 5px 5px"
            document.getElementById("descripcionError").style.display="inline"  
           }
    break;
    case "contraseña2":
            let contraseña=document.getElementById("passwordAuth").value;
            let contraseña2=document.getElementById("passwordAuth2").value;
            if ( contraseña != contraseña2) {
                document.getElementById("passwordAuth2").style.borderColor = '#FF1C00' 
                document.getElementById("passwordAuth2").style.borderWidth = "5px 5px 5px 5px"
            } else {
                document.getElementById("passwordAuth2").style.borderColor = '#25FA00'
                document.getElementById("passwordAuth2").style.borderWidth = "5px 5px 5px 5px"
            }
    break;
   }
}
