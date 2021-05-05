import { iniciarSesion,funcionIngresar} from '../components/iniciarSesion.js';
import { inicio } from '../components/paginaInicio.js'
import { registrarse, funcionAutenticar,registroConGoogle,registroConFacebook} from '../components/registro.js'
import { interfazPrincipal, ingresoApp, funcionRegistrarse} from '../components/intefazPrincipal.js'

const rootDiv = document.getElementById('root');
export const router = (routes) => {
  rootDiv.innerHTML="";
  switch(routes){
      case '#/iniciarSesion':
        rootDiv.appendChild(iniciarSesion());
        funcionIngresar();
        break;
      case '#/registro':
        rootDiv.appendChild(registrarse());
        funcionAutenticar();
        registroConGoogle();
        registroConFacebook()
        break;
      case '#/inicio':
        rootDiv.appendChild(inicio());
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
