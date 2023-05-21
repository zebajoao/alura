function tocaSom(seletorAudio) {
    let som = document.querySelector(seletorAudio);
    if (som && som.localName === "audio") {
        som.play();
    }
    else {
        console.log("Elemento não encontrado ou seletor inválido.")
    }
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
        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(evento) {
        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.remove('ativa');
        }
    }
}
