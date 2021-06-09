const expresiones = {
	passwordExpresion: /^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, // 4 a 12 digitos.
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
    case "password":
        if (expresiones.passwordExpresion.test(e.target.value)){
            document.getElementById("passwordAuth").style.borderColor = '#25FA00'
            document.getElementById("passwordAuth").style.borderWidth = "5px 5px 5px 5px"
            document.getElementById("descripcionError").style.display="none"
           } else {
            document.getElementById("passwordAuth").style.borderColor = '#FF1C00' 
            document.getElementById("passwordAuth").style.borderWidth = "5px 5px 5px 5px"
            document.getElementById("descripcionError").style.display="block"  
           }
    break;
    case "password2":
            let password=document.getElementById("passwordAuth").value;
            let password2=document.getElementById("passwordAuth2").value;
            if ( password != password2) {
                document.getElementById("passwordAuth2").style.borderColor = '#FF1C00' 
                document.getElementById("passwordAuth2").style.borderWidth = "5px 5px 5px 5px"
            } else {
                document.getElementById("passwordAuth2").style.borderColor = '#25FA00'
                document.getElementById("passwordAuth2").style.borderWidth = "5px 5px 5px 5px"
            }
    break;
   }
}


 