function tocaSom(id) {
    let som = document.querySelector(id);
    som.play();
}

const listaTeclas = document.querySelectorAll('.tecla');


for (let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento) {
        if (evento.code === "Space" || evento.code === "Enter"){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(evento) {
        if (evento.code === "Space" || evento.code === "Enter"){
            tecla.classList.remove('ativa');
        }
    }
}
