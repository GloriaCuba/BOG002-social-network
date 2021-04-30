// import { registro } from '../components/registro.js';
import { iniciarSesion, funcionIngresar } from '../components/iniciarSesion.js';
import { inicio } from '../components/paginaInicio.js'
import { registrarse } from '../components/registro.js'


const rootDiv = document.getElementById('root');
export const router = (routes) => {
  rootDiv.innerHTML="";
  switch(routes){
      case '#/inicio':
        rootDiv.appendChild(inicio());
        break;
      case '#/registro':
        rootDiv.appendChild(registrarse());
        break;
      default:
        rootDiv.appendChild(iniciarSesion());
        funcionIngresar();
        break;
    }
}





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
