let xBola = 300;
let yBola = 200;
let diametroBola = 20;
let vxBola = 3;
let vyBola = 1;
let raio = diametroBola / 2

function mostraBola() {
    circle(xBola, yBola, diametroBola);
}
function alteraVelocidadeBola() {
    if (vxBola < 5 && vyBola < 4) {
        vxBola = 5;
        vyBola = 4;
    }
    vxBola *= -1;
}
function verificaColisaoRaquete(xRaquete, yRaquete) {
    if (collideRectCircle(xRaquete, yRaquete, largura, comprimento, xBola, yBola, diametroBola)) {
        alteraVelocidadeBola();
        raquetada.play();
    }
}
function verificaColisaoBorda() {
    if (xBola > width - raio || xBola < raio) {
        marcaPonto();
    }
    if (yBola > height - raio || yBola < raio ) {
        vyBola *= -1;
    }
}
function moveBola() {
    xBola += vxBola;
    yBola += vyBola;
    verificaColisaoBorda();
    verificaColisaoRaquete(xRaquete1, yRaquete1);
    verificaColisaoRaquete(xRaquete2, yRaquete2);
}