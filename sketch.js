//Background

let imagemDaEstrada;

// Objetos

let imagemDoVermelho;
let imagemDoLaranja;
let imagemDoVerde;
let imagemDoOnibus;
let imagemDoTaxi;
let imagemDoPickup;
let imagensCarros;

//Ator

let imagemDoAtor;
let yAtor = 365;
let xAtor = 300;
let colisao = false;

//Posições carros e velocidade

let xCarros = [610, 610, 610, 610, 610, 610];
let yCarros = [25, 65, 115, 160, 200, 300];
let velocidadeCarros = [6, 5, 4.5, 4, 3.5, 5.2];

//pontos

let meusPontos = 0;

//SONS

let somDaTrilha;
let somDaColisao;
let somDoPonto;
let somDaChegada;

function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
  
}

function draw() {
  background(imagemDaEstrada);
  image(imagemDoAtor, xAtor, yAtor, 40, 35);
  image(imagensCarros[0], xCarros[0], yCarros[0], 70, 35);
  image(imagensCarros[1], xCarros[1], yCarros[1], 70, 35);
  image(imagensCarros[2], xCarros[2], yCarros[2], 70, 35);
  image(imagensCarros[3], xCarros[3], yCarros[3], 70, 35);
  image(imagensCarros[4], xCarros[4], yCarros[4], 120, 55);
  image(imagensCarros[5], xCarros[5], yCarros[5], 70, 35);

  //Movimento
  movimentaCarros();
  colisaoCarros();
  pontuacao();
  incluirPontos();
  podeSeMover();
  movimentoAtor();
  
}

function preload() {
  imagemDaEstrada = loadImage("imagens/Estrada.png");
  imagemDoAtor = loadImage("imagens/Ator.png");
  imagemDoVermelho = loadImage("imagens/Red.png");
  imagemDoLaranja = loadImage("imagens/Green.png");
  imagemDoVerde = loadImage("imagens/Orange.png");
  imagemDoOnibus = loadImage("imagens/Onibus.png");
  imagemDoTaxi = loadImage("imagens/Taxi.png");
  imagemDoPickup = loadImage("imagens/Pickup.png");
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDaChegada = loadSound("sons/chegada.mp3");

  imagensCarros = [
    imagemDoVermelho, 
    imagemDoVerde,
    imagemDoLaranja,
    imagemDoPickup,
    imagemDoOnibus,
    imagemDoTaxi,
  ];
}

// função embaralhar velocidade

function embaralhar(array) {
    let currentIndex = array.length -1;
  
    // While there remain elements to shuffle.
    while (currentIndex >= 0) {
  
      // Pick a remaining element.
      velocidadeCarros[currentIndex]= Math.floor(Math.random() * 6) + 1;
      currentIndex--;
    }
  
  }
  

//movimento ator

function movimentoAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor = yAtor - 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor = yAtor + 2;
    }
  }
}

function movimentaCarros(){
  
  for (let i = 0; i < imagensCarros.length; i++) {
     
    xCarros[i] = xCarros[i] - velocidadeCarros[i];
  if (xCarros[i] < -70) {
    xCarros[i] = 610;
  }
  }
}

//colisão dos carros


function colisaoCarros(){
  for (let i = 0; i < imagensCarros.length; i++){
  colisao = collideRectCircle(xCarros[i], yCarros[i], 70, 35, xAtor,yAtor + 20,20);

  if (colisao) {
    if (meusPontos > 0) {
      meusPontos -= 1;
    }
    somDaColisao.play();
    yAtor = 365;
  }
  }

}

// Reset

function pontuacao() {
  if (yAtor < -12) {
    meusPontos += 1;
    somDaChegada.play();
    yAtor = 365;
    console.log(velocidadeCarros);
    embaralhar(velocidadeCarros);
    console.log(velocidadeCarros);
  }
}

function incluirPontos() {
  text(meusPontos, 300, 20);
  textSize(25);
  fill(255, 255, 1);
}

function podeSeMover() {
  return yAtor < 366;
}
