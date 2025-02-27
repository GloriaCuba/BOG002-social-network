import {
  iniciarSesion, funcionIngresar, iniciarConGoogle, iniciarConFacebook, olvidarContrasena,
} from '../components/iniciarSesion.js';
import {
  inicio, salir, irAPerfil, postMuro, menuToggle, verPosts, filtrarAmigos,
} from '../components/paginaInicio.js';
import {
  registrarse, funcionAutenticar, registroConGoogle, registroConFacebook, irConfigPerfil,
} from '../components/registro.js';
import { interfazPrincipal, ingresoApp, funcionRegistrarse } from '../components/intefazPrincipal.js';
import { resetContraseña, restableceContrasena } from '../components/resetContrasena.js';
import { proximamente, irMuro } from '../components/Proximamente.js';
import {
  configPerfil, recoletandoDatos, mostrarInputs, ocultarCambioImagen, recolectandoImagen, readImage, irAlPerfil
} from '../components/configPerfil.js';
import { perfil, configurarPerfil, ImagenPerfil, verPostsPerfil, postPerfil, irAHome} from '../components/perfil.js';

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
          irConfigPerfil();
          break;
        case '#/inicio':
          rootDiv.appendChild(inicio());
          salir();
          menuToggle();
          salir();
          irAPerfil();
          postMuro();
          // console.log("pagina inicio");
          verPosts();
          // ocultarMostrarPost();
          filtrarAmigos();
          break;
        case '#/filtroAmigos':
          rootDiv.appendChild(proximamente());
          irMuro();
          break;
        case '#/restablecerContrasena':
          rootDiv.appendChild(resetContraseña());
          restableceContrasena();
          break;
        case '#/configuracionPerfil':
          rootDiv.appendChild(configPerfil());
          recoletandoDatos();
          recolectandoImagen();
          mostrarInputs();
          ocultarCambioImagen();
          readImage();
          irAlPerfil();
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


