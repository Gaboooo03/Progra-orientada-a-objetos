let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);

  // Crear una nueva partícula
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);

  // Actualizar y mostrar todas las partículas
  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }

  // Eliminar las partículas que ya no están vivas
  particulas = particulas.filter((pelota) => pelota.estaViva);

  // Dibujar líneas entre las partículas
  noFill();
  stroke(252, 99, 56);
  strokeWeight(1);

  for (let i = 0; i < particulas.length - 1; i++) {
    line(
      particulas[i].posx,
      particulas[i].posy,
      particulas[i + 1].posx,
      particulas[i + 1].posy
    );
  }

  console.log(particulas.length);
}

// Definir la clase Particula
class Particula {
  constructor(x, y) {
    this.posx = x;
    this.posy = y;
    this.velx = random(-1, 1);
    this.vely = random(-1, 1);
    this.estaViva = true;
    this.tiempoDeVida = 255; // Desaparece después de un tiempo
  }

  update() {
    this.posx += this.velx;
    this.posy += this.vely;

    // Reducir el tiempo de vida de la partícula
    this.tiempoDeVida -= 2;
    if (this.tiempoDeVida <= 0) {
      this.estaViva = false;
    }
  }

  display() {
    fill(255, this.tiempoDeVida);
    noStroke();
    ellipse(this.posx, this.posy, 10);
  }
}

/*
let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  background(20);

  // Crea una nueva partícula en la posición del ratón
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);

  // Actualiza y muestra las partículas
  for (let i = particulas.length - 1; i >= 0; i--) {
    particulas[i].update();
    particulas[i].display();

    // Elimina las partículas que ya no están "vivas"
    if (!particulas[i].estaViva) {
      particulas.splice(i, 1);
    }
  }

  // Imprime el número de partículas restantes en la consola
  console.log(particulas.length);
}

// Clase Particula
class Particula {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamaño = random(10, 30);
    this.velX = random(-2, 2);
    this.velY = random(-2, 2);
    this.vida = 255; // Duración de vida de la partícula
  }

  update() {
    this.x += this.velX;
    this.y += this.velY;
    this.vida -= 5; // Disminuye la vida de la partícula
  }

  display() {
    noStroke();
    fill(255, this.vida);
    ellipse(this.x, this.y, this.tamaño);
  }

  get estaViva() {
    return this.vida > 0;
  }
}


let fondo;
let pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  fondo = color(random(100, 255), random(70), random(200));

  for (let i = 0; i < 100; i++) {
    let nuevaPelota = new pelota();
    pelotas.push(nuevaPelota);
  }

  //nuevaPelota = new pelota();
  //pelota2 = new pelota();
}

function draw() {
  background(fondo);
  for (let i = 0; i < 100; i++) {
    pelotas[i].display();
    pelotas[i].update();
  }
  /* 
  nuevaPelota.update();
  nuevaPelota.display();
  pelota2.update();
  pelota2.display();
  
}

class pelota {
  //plano de instrcciones para crear una pelota
  constructor() {
    this.radio = ceil(random(10, 30));
    this.diametro = this.radio * 2;
    this.posX = random(this.radio, width - this.radio);
    this.posY = random(this.radio, height - this.radio);
    this.velocidadX = 40;
    this.velocidadY = 40;
    console.log("ESTOY VIVAAAA!");
  }

  //métdos update
  update() {
    // Mover la posición del círculo
    this.posX += this.velocidadX;
    this.posY += this.velocidadY;

    // Verificar colisiones con los bordes de la pantalla
    if (this.posX - this.radio < 0 || this.posX + this.radio > width) {
      this.velocidadX *= -1;
    }

    if (this.posY - this.radio < 0 || this.posY + this.radio > height) {
      this.velocidadY *= -1;
    }
  }
  display() {
    fill(255);
    noStroke();

    // Dibujar el círculo
    circle(this.posX, this.posY, this.diametro);
  }
}



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
