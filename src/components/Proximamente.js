export function proximamente() {
    const prox = `    
    <div class="mensajeProx"> <h4> Encuentra a tus amigos,<br> estara disponible...</div>  
       <div class="imgProx"> <img src="Img/exploto.png" alt=""> </div>
        <div class="prox"> <h4> Proximamente...</h4></div>
        <button type="button" class="irMuro" id="irMuro">Volver al muro</button>  
      `;
    const proximamente = document.createElement('div');
    proximamente.className = 'proximamente';
    proximamente.innerHTML = prox;
    return proximamente;
  }

  export function irMuro() {
    const perfil = document.getElementById('irMuro');
    perfil.addEventListener('click', () => {
      window.location = '#/inicio';
      location.reload();
    });
  }