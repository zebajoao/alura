let pontos1 = 0;
let pontos2 = 0;

function placar() {
    stroke(235);
    fill(255, 128, 0);
    rect(180, 15, 40, 20);
    rect(380, 15, 40, 20);
    textAlign(CENTER);
    textSize(14);
    fill(255);
    text(pontos1, 200, 30);
    text(pontos2, 400, 30);
}