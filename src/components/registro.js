export function registrarse() {
    let registro = `
    <p> Este es el formulario de registro </p>
    `;
    const divRegistro = document.createElement("div");
    divRegistro.innerHTML = registro;
 
    return divRegistro;
    }