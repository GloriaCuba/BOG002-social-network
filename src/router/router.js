import {inicio}from '../lib/inicio.js'
import {iniciarSesion}from '../lib/home.js'
import {contact}from '../lib/contact.js'

const routes = {
    '#/' : iniciarSesion,
    '#/contact' : contact,
    '#/inicio' : inicio
};
  
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = routes["#/" + location.hash];
  console.log(location.hash)
  
  const onNavigate = (pathname) => {
    // window.history.pushState(
    //   {},
    //   pathname,
    //   window.location.origin + pathname
    // )
    rootDiv.innerHTML = routes[pathname]
  }
  
  window.onpopstate = () => {
    // rootDiv.innerHTML = routes[window.location.pathname]
}

window.addEventListener("hashchange", procesarHas)
function procesarHas() {
  onNavigate(location.hash); return false;
}

document.getElementById("buttonSiguiente").addEventListener("click", () => {
  onNavigate('#/contact'); return false;
})