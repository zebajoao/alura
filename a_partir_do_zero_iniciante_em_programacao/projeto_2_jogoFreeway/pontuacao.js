let pontos = 0;

function mostraPontos() {
    textAlign(CENTER);
    textSize(22);
    fill(255, 240, 60);
    text(pontos, width/2, 25);
}
function marcaPontos() {
    if (yAtor < 25) {
        pontos++;
        somPontuacao.play();
        voltaAtorInicio();
    }
}