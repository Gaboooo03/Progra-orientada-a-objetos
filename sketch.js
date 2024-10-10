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

/*
let frutas = [
  "Manzana",
  "Banana",
  "Naranja",
  "Fresa",
  "Piña",
  "Mango",
  "Pera",
  "Durazno",
  "Cereza",
  "Melón",
  "Sandía",
  "Kiwi",
  "Papaya",
  "Uva",
  "Frambuesa",
  "Arándano",
  "Grosella",
  "Guayaba",
  "Maracuyá",
  "Coco",
  "Mandarina",
  "Granada",
  "Ciruela",
  "Higo",
  "Lichi",
  "Chirimoya",
  "Carambola",
  "Pitahaya",
  "Tamarindo",
  "Pomelo",
  "Limón",
  "Lima",
  "Moras",
  "Aguacate",
  "Dátil",
  "Chabacano",
  "Níspero",
  "Albaricoque",
  "Plátano",
  "Ciruelo",
  "Guinda",
  "Pomarrosa",
  "Zapote",
  "Camu camu",
  "Mamey",
  "Mangostán",
  "Nance",
  "Rambután",
  "Salak",
  "Jabuticaba",
  "Mangaba",
  "Caimito",
  "Pitanga",
  "Mamoncillo",
  "Guanábana",
  "Acerola",
  "Noni",
  "Lulo",
  "Tuna",
  "Chayote",
  "Tomate de árbol",
  "Pepino dulce",
  "Fruta del dragón",
  "Feijoa",
  "Pepino",
  "Granadilla",
  "Camu camu",
  "Cocona",
  "Mirtilo",
  "Bayas de goji",
  "Morera",
  "Physalis",
  "Fresa silvestre",
  "Capulí",
  "Bacaba",
  "Cacahuate",
  "Guapurú",
  "Macadamia",
  "Kumquat",
  "Durián",
  "Cereza de Barbados",
  "Tamarillo",
  "Calafate",
  "Lucuma",
  "Cupuaçu",
  "Jocote",
  "Guamúchil",
  "Sapotillo",
  "Guayabilla",
  "Spondias",
  "Pitangui",
  "Araticum",
  "Arazá",
  "Mora de los pantanos",
  "Carica",
  "Marolo",
  "Peumo",
  "Alquequenje",
  "Araza",
  "Guabiroba",
  "Cajá",
  "Corozo",
  "Soursop",
  "Baya de saúco",
];
let precios = [25, 30, 50, 6, 70];

for (let i = frutas.length - 1; i >= 0; i -= 1) {
  console.log(frutas[i]);
}

console.log(precios);

*/
