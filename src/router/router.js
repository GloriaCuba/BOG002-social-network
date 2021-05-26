import {
  iniciarSesion, funcionIngresar, iniciarConGoogle, iniciarConFacebook, olvidarContrasena,
} from '../components/iniciarSesion.js';
import {
  inicio, salir, irAPerfil, postMuro, menuToggle, verPosts,
} from '../components/paginaInicio.js';
import {
  registrarse, funcionAutenticar, registroConGoogle, registroConFacebook,
} from '../components/registro.js';
import { interfazPrincipal, ingresoApp, funcionRegistrarse } from '../components/intefazPrincipal.js';
import { resetContraseña, restableceContrasena } from '../components/resetContrasena.js';
import {
  configPerfil, irAlPerfil, recoletandoDatos, mostrarInputs, ocultarCambioImagen, recolectandoImagen,
} from '../components/configPerfil.js';
import { perfil, configurarPerfil } from '../components/perfil.js';

// menuEspecies
// eslint-disable-next-line import/named

// import { auth } from '../firebase/firebase.js';

const rootDiv = document.getElementById('root');
export const router = (routes) => {
  rootDiv.innerHTML = '';
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // eslint-disable-next-line default-case
      switch (routes) {
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
          registroConFacebook();
          break;
        case '#/inicio':
          rootDiv.appendChild(inicio());
          salir();
          menuToggle();
          salir();
          irAPerfil();
          postMuro();
          console.log("pagina inicio");
          verPosts();
          // ocultarMostrarPost();
          break;
        case '#/restablecerContrasena':
          rootDiv.appendChild(resetContraseña());
          restableceContrasena();
          break;
        case '#/configuracionPerfil':
          rootDiv.appendChild(configPerfil());
          recolectandoImagen();
          // menuEspecies();
          irAlPerfil();
          recoletandoDatos();
          mostrarInputs();
          ocultarCambioImagen();
          recoletandoImagen()
          break;
        case '#/perfil':
          rootDiv.appendChild(perfil());
          configurarPerfil();
          break;
        case '':
          rootDiv.appendChild(interfazPrincipal());
          ingresoApp();
          funcionRegistrarse();
          break;
      }
    } else {
      // eslint-disable-next-line default-case
      switch (routes) {
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
          registroConFacebook();
          break;
        case '#/restablecerContrasena':
          rootDiv.appendChild(resetContraseña());
          restableceContrasena();
          break;
        case '#/perfil':
          rootDiv.appendChild(interfazPrincipal());
          ingresoApp();
          funcionRegistrarse();
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
        case '#/configuracionPerfil':
          rootDiv.appendChild(interfazPrincipal());
          ingresoApp();
          funcionRegistrarse();
          break;
      }
    }
  });
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
