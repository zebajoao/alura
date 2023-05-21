
function setup() {
  createCanvas(500, 400);
  trilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  moveAtor();
  mostraCarro();
  moveCarro();
  mostraPontos();
  marcaPontos();
}
