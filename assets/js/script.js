window.addEventListener('load', () => {
    const musica = document.getElementById('musica');
    musica.play().catch((e) => {
      console.log("Autoplay bloqueado. Esperando interação do usuário.");
    });
  });
