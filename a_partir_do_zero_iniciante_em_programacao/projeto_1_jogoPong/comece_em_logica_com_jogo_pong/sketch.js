//métodos do jogo
function centraliza(sinal) {
    xBola = 300;
    yBola = 200;
    xRaquete1 = 10;
    yRaquete1 = 170;
    xRaquete2 = 585;
    yRaquete2 = 170;
    vxBola = 3 * sinal;
    vyBola = 1 * sinal;
}
function marcaPonto() {
    if (xBola < xRaquete1) {
        pontos2 += 1;
        centraliza(1);
    }
    if (xBola > xRaquete2) {
        pontos1 += 1;
        centraliza(-1);
    }
    ponto.play();
    
}
function pausaJogo() {
    if (keyIsDown(80)) {
        return true;
    }
    if (keyIsDown(32)) {
        return false;
    }
}

//programa
function setup() {
    createCanvas(600, 400);
    trilha.loop();
}
function draw() {
    background(0, 51, 102);
    rect(300, 0, 1, 400);
    placar();
    mostraBola();
    mostraRaquetes();
    moveBola();
    moveRaquete1();
    moveRaquete2();
}
