let posX, posY;
let velocidadX, velocidadY;
let diametro;
let radio;
let fondo;

function setup() {
  createCanvas(windowWidth, windowHeight);

  radio = ceil(random(50, 100)); // Ajustado para un valor de radio más realista
  diametro = radio * 2; // El diámetro es el doble del radio

  posX = random(radio, width - radio);
  posY = random(radio, height - radio);

  velocidadX = 40;
  velocidadY = 40;

  fondo = color(random(255), random(130), random(37));
}

function draw() {
  background(fondo);
  fill(255);
  noStroke();

  // Mover la posición del círculo
  posX += velocidadX;
  posY += velocidadY;

  // Verificar colisiones con los bordes de la pantalla
  if (posX - radio < 0 || posX + radio > width) {
    velocidadX *= -1;

    fondo = color(random(255), random(130), random(37));
  }

  if (posY - radio < 0 || posY + radio > height) {
    velocidadY *= -1;

    fondo = color(random(255), random(130), random(37));
  }
  // Dibujar el círculo
  circle(posX, posY, diametro);
}
