import {
  iniciarSesion, funcionIngresar, iniciarConGoogle, iniciarConFacebook, olvidarContrasena,
} from '../components/iniciarSesion.js';
import {
  inicio, salir, irAPerfil, postMuro, menuToggle, verPosts,
} from '../components/paginaInicio.js';
import {
  registrarse, funcionAutenticar, registroConGoogle, registroConFacebook, irConfigPerfil,
} from '../components/registro.js';
import { interfazPrincipal, ingresoApp, funcionRegistrarse } from '../components/intefazPrincipal.js';
import { resetContraseña, restableceContrasena, irPrincipal} from '../components/resetContrasena.js';
import {
  configPerfil, irAlPerfil, recoletandoDatos, mostrarInputs, ocultarCambioImagen, recolectandoImagen,readImage
} from '../components/configPerfil.js';
import { perfil, configurarPerfil, ImagenPerfil, verPostsPerfil, postPerfil, irAHome} from '../components/perfil.js';

// menuEspecies
// eslint-disable-next-line import/named

// import { auth } from '../firebase/firebase.js';

const rootDiv = document.getElementById('root');//'root' id div principal para mostrar paginado
export const router = (routes) => {//routes argumento? parametro?
  rootDiv.innerHTML = '';//div root queda vacio
  firebase.auth().onAuthStateChanged((user) => { // si un usuario esta activo tendra las siguientes rutas

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
          irConfigPerfil();
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
          irAlPerfil();
          recoletandoDatos();
          recolectandoImagen();
          mostrarInputs();
          ocultarCambioImagen();
          readImage();
          break;
        case '#/perfil':
          rootDiv.appendChild(perfil());
          configurarPerfil();
          ImagenPerfil();
          postPerfil();
          verPostsPerfil();
          irAHome();
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
          irPrincipal();
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