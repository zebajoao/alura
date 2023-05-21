let xAtor = 100;
let yAtor = 370;
let comprimentoAtor = 25;
let alturaAtor = 25;

function mostraAtor() {
    image(imgAtor, xAtor, yAtor, comprimentoAtor, alturaAtor);
}
function moveAtor() {
    if (keyIsDown(UP_ARROW) && yAtor > 2) {
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW) && yAtor < 368) {
        yAtor += 3;
    }
    if (keyIsDown(RIGHT_ARROW) && xAtor < 473) {
        xAtor += 3;
    }
    if (keyIsDown(LEFT_ARROW) && xAtor > 2) {
        xAtor -= 3;
    }
    verificaColisao();
}
function verificaColisao() {
    let colidiu = false;
    let i = 0;
    while (i < imgCarros.length()) {
        colidiu = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, alturaAtor);
        if (colidiu) {
            if (pontos > 0) {
                pontos--;
            }
            somColisao.play();
            voltaAtorInicio();
        }
        i++;
    }
}
function voltaAtorInicio() {
    xAtor = 100;
    yAtor = 370;
}

