// import { registro } from '../components/registro.js';
import { iniciarSesion } from '../components/iniciarSesion.js';
import { inicio } from '../components/paginaInicio.js'
import { registrarse } from '../components/registro.js'


const rootDiv = document.getElementById('root');
export const router = (routes) => {
  rootDiv.innerHTML="";
  switch(routes){
      case '#/iniciarSesion':
        rootDiv.appendChild(iniciarSesion());
        
        break;
      case '#/inicio':
        rootDiv.appendChild(inicio());
        break;
      case '#/registro':
        rootDiv.appendChild(registrarse());
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
