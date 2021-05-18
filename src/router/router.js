import { iniciarSesion,funcionIngresar, iniciarConGoogle, iniciarConFacebook, olvidarContrasena } from '../components/iniciarSesion.js';
import { inicio, menuToggle, irAperfil, salir } from '../components/paginaInicio.js'
import { registrarse, funcionAutenticar,registroConGoogle,registroConFacebook} from '../components/registro.js'
import { interfazPrincipal, ingresoApp, funcionRegistrarse} from '../components/intefazPrincipal.js'
import { resetContraseña, restableceContrasena } from '../components/resetContrasena.js'
import { configPerfil, menuEspecies, irAlMuro } from '../components/configPerfil.js'
import { perfil } from '../components/perfil.js'
// import { auth } from '../firebase/configFirebase.js'

const rootDiv = document.getElementById('root');
export const router = (routes) => {
  rootDiv.innerHTML="";
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
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
          irAperfil();
          salir();
          menuToggle();
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
        case '#/perfil':
          rootDiv.appendChild(perfil());
          break;
        case '':
          rootDiv.appendChild(interfazPrincipal());
          ingresoApp();
          funcionRegistrarse();
          break;
        }
       } else {
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
        
        case '#/restablecerContrasena':
          rootDiv.appendChild(resetContraseña())
          restableceContrasena();
          break;
          case '#/perfil':
            rootDiv.appendChild(interfazPrincipal());
            break;
        case '':
          rootDiv.appendChild(interfazPrincipal());
          ingresoApp();
          funcionRegistrarse();
          break;

        case '#/inicio':
          rootDiv.appendChild(interfazPrincipal());
          ingresoApp();
          funcionRegistrarse();
          break;
        }
      }
   }); 
}





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
