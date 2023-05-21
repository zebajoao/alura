let xCarros = [450, 450, 450, 450, 450, 450];
let yCarros = [40, 95, 150, 230, 285, 340];
let vCarros = [1.5, 2.5, 3.5, 4, 3, 2];

let alturaCarro = 40;
let comprimentoCarro = 50;

function mostraCarro() {
    let i = 0;
    while (i < imgCarros.length()) {
        image(imgCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
        i++;
    }
}
function moveCarro() {
    for (let i = 0; i < imgCarros.length(); i++) {
        xCarros[i] -= vCarros[i];
        reiniciaPosicaoCarro(xCarros[i]);
    }
}
function reiniciaPosicaoCarro(xCarro) {
    if (xCarro + comprimentoCarro < 0) {
        xCarro = 450;
    }
}
