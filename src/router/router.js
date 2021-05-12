import { iniciarSesion,funcionIngresar,  iniciarConGoogle, iniciarConFacebook, olvidarContrasena } from '../components/iniciarSesion.js';
import { inicio,salir } from '../components/paginaInicio.js'
import { registrarse, funcionAutenticar,registroConGoogle,registroConFacebook} from '../components/registro.js'
import { interfazPrincipal, ingresoApp, funcionRegistrarse} from '../components/intefazPrincipal.js'
import { resetContraseña, restableceContrasena } from '../components/resetContrasena.js'
import { configPerfil, menuEspecies, irAlMuro } from '../components/configPerfil.js'
import { UsuarioActivo } from '../firebase/firebase.js';

const rootDiv = document.getElementById('root');
export const router = (routes) => {
  rootDiv.innerHTML="";
  if (UsuarioActivo == true) {
   window.location = '#/inicio'
   
   console.log("usuario Activo")
  } else {
    window.location = '#/iniciarSesion'
   
  }
  switch(routes){
      case '#/iniciarSesion':
        rootDiv.appendChild(iniciarSesion());
        funcionIngresar();
        iniciarConGoogle();
        iniciarConFacebook();
        olvidarContrasena();
        break;
      case '#/registro':
        rootDiv.appendChild(registrarse());
        funcionAutenticar();
        registroConGoogle();
        registroConFacebook()
        break;
      case '#/inicio':
        rootDiv.appendChild(inicio());
        salir()
        break;
      case '#/restablecerContrasena':
        rootDiv.appendChild(resetContraseña())
        restableceContrasena();
        break;
        case '#/configuracionPerfil':
        rootDiv.appendChild(configPerfil());
        menuEspecies();
        irAlMuro();
        break;
      default:
        rootDiv.appendChild(interfazPrincipal());
        ingresoApp();
        funcionRegistrarse();
        break;
    }
};





// default :
//         rootDiv.appendChild(iniciarSesion());
//         funcionIngresar();
//         funcionRegistrarse();
//         break;


// rootDiv.innerHTML = routes["#/" + location.hash];
// console.log(location.hash);

// export const onNavigate = (pathname) => {
// window.history.pushState(
//   {},
//   pathname,
//   window.location.origin + pathname
// )
// rootDiv.innerHTML = routes[pathname]
// }

// window.onpopstate = () => {
// rootDiv.innerHTML = routes[window.location.pathname] }
