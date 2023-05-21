let xRaquete1 = 10;
let yRaquete1 = 170;
let xRaquete2 = 585;
let yRaquete2 = 170;
let largura = 5;
let comprimento = 60;
let vRaquete = 4;
let chanceDeErrar;

function mostraRaquetes() {
    fill(0, 204, 0);
    rect(xRaquete1, yRaquete1, largura, comprimento);
    fill(204, 0, 0);
    rect(xRaquete2, yRaquete2, largura, comprimento);
}
function moveRaquete1() {
    if (keyIsDown(87) && yRaquete1 > 0) {
        yRaquete1 -= vRaquete;
    }
    if (keyIsDown(83) && yRaquete1 < 400 - comprimento) {
        yRaquete1 += vRaquete;
    }
}
function moveRaquete2() {
    /*
    Código para single player:
    
    let vRaquete2 = yBola - yRaquete2 - comprimento / 2 - 30;
    yRaquete2 += vRaquete2 + chanceDeErrar;
    calculaChanceDeErrar();
    
    */
    if (keyIsDown(UP_ARROW) && yRaquete2 > 0) {
        yRaquete2 -= vRaquete;
    }
    if (keyIsDown(DOWN_ARROW) && yRaquete2 < 400 - comprimento) {
        yRaquete2 += vRaquete;
    }
}
function calculaChanceDeErrar() {
    if (pontosDoOponente >= meusPontos) {
      chanceDeErrar += 1
      if (chanceDeErrar >= 39){
      chanceDeErrar = 40
      }
    } else {
      chanceDeErrar -= 1
      if (chanceDeErrar <= 35){
      chanceDeErrar = 35
      }
    }
  }