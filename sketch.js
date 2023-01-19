//Background

let imagemDaEstrada;

// Objetos

let imagemDoVermelho;
let imagemDoLaranja;
let imagemDoVerde;
let imagemDoOnibus;
let imagemDoTaxi;
let imagemDoPickup;


//Ator

let imagemDoAtor;
let yAtor = 365;
let xAtor = 300;
let colisao = false;

//Posições carros

let xCarros = [610, 610, 610, 610, 610, 610];
let yCarros = [25, 65, 115, 160, 200, 300];
let velocidadeCarros = [6, 5 , 4.5, 4, 3.5, 5.2];

//pontos

let meusPontos = 0;

//SONS

let somDaTrilha;
let somDaColisao;
let somDoPonto;
let somDaChegada;

function setup()
{
    createCanvas(600, 400);
    somDaTrilha.loop();
    
}

function draw()
{
    background(imagemDaEstrada);
    image(imagemDoAtor, xAtor, yAtor, 40, 35);
    image(imagemDoVermelho, xCarros[0], yCarros[0], 70, 35);
    image(imagemDoVerde, xCarros[1], yCarros[1], 70, 35);
    image(imagemDoLaranja, xCarros[2], yCarros[2], 70, 35);
    image(imagemDoPickup, xCarros[3], yCarros[3], 70, 35);
    image(imagemDoOnibus, xCarros[4], yCarros[4], 120, 55);
    image(imagemDoTaxi, xCarros[5], yCarros[5], 70, 35);

    //Movimento
    movimentoAtor();
    movimentaVermelho();
    movimentaVerde();
    movimentaLaranja();
    movimentaPickup();
    movimentaOnibus();
    movimentaTaxi();
    verificaColisãoVermelho();
    verificaColisãoLaranja();
    verificaColisãoVerde();
    verificaColisãoOnibus();
    verificaColisãoPickup();
    verificaColisãoTaxi();
    reset();
    pontuacao();
    incluirPontos();
    podeSeMover();
  
}

function preload()
{
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
  
}

//movimento ator

function movimentoAtor()
{
    if (keyIsDown(UP_ARROW))
    {
        yAtor = yAtor - 2;
    }
    if (keyIsDown(DOWN_ARROW))
    {
      if (podeSeMover()){
        yAtor = yAtor + 2;
      }
        
    }
}


//movimento carro vermelho

function movimentaVermelho()
{
    xCarros[0] = xCarros[0] - velocidadeCarros[0];

    if (xCarros[0] < -70)
    {
        xCarros[0] = 610;
    }

}

//movimento carro verde

function movimentaVerde()
{
    xCarros[1] = xCarros[1] - velocidadeCarros[1];

    if (xCarros[1] < -70)
    {
        xCarros[1] = 610;
    }
}


//movimento carro laranja 

function movimentaLaranja()
{
    xCarros[2] = xCarros[2] - velocidadeCarros[2];

    if (xCarros[2] < -70)
    {
        xCarros[2] = 610;
    }
}

//movimento carro Pickup

function movimentaPickup()
{
    xCarros[3] = xCarros[3] - velocidadeCarros[3];

    if (xCarros[3] < -70)
    {
        xCarros[3] = 610;
    }
}

//movimento carro Onibus

function movimentaOnibus()
{
    xCarros[4] = xCarros[4] - velocidadeCarros[4];

    if (xCarros[4] < -70)
    {
        xCarros[4] = 610;  
    }
}

//movimenta carro Taxi

function movimentaTaxi()
{
    xCarros[5] = xCarros[5] - velocidadeCarros[5];

    if (xCarros[5] < -70)
    {
        xCarros[5] = 610;
    }
}

//colisão dos carros

function verificaColisãoVermelho()
{
       colisao = collideRectCircle(xCarros[0] , yCarros[0], 70, 35, xAtor, (yAtor + 20), 20);
   
    if (colisao)
    {
       if (meusPontos > 0){
    (meusPontos -= 1)
        
    }
      somDaColisao.play();
      yAtor = 365;
    }
   
  }
     
function verificaColisãoLaranja()
{
       colisao = collideRectCircle(xCarros[1] , yCarros[1], 70, 35, xAtor, (yAtor + 20), 20);
   
    if (colisao)
    {
       if (meusPontos > 0){
    (meusPontos -= 1)
         
    }
      somDaColisao.play();
      yAtor = 365;
    }

  }

function verificaColisãoVerde()
{
       colisao = collideRectCircle(xCarros[2] , yCarros[2], 70, 35, xAtor, (yAtor + 20), 20);
   
    if (colisao)
    {
       if (meusPontos > 0){
    (meusPontos -= 1)
         
    }
      somDaColisao.play();
      yAtor = 365;
    }
  
  }

function verificaColisãoPickup()
{
       colisao = collideRectCircle(xCarros[3] , yCarros[3], 70, 35, xAtor, (yAtor + 20), 20);
   
    if (colisao)
    {
       if (meusPontos > 0){
    (meusPontos -= 1)
        
    }
      somDaColisao.play();
      yAtor = 365;
    }
  
  }

function verificaColisãoOnibus()
{
       colisao = collideRectCircle(xCarros[4] , yCarros[4], 120, 55, xAtor, (yAtor + 20), 20);
   
    if (colisao)
    {
      if (meusPontos > 0){
    (meusPontos -= 1)
       
    }
      somDaColisao.play();
      yAtor = 365;
    }
   
  }

function verificaColisãoTaxi()
{
       colisao = collideRectCircle(xCarros[5] , yCarros[5], 70, 35, xAtor, (yAtor + 20), 20);
   
    if (colisao)
    {
      if (meusPontos > 0){
    (meusPontos -= 1)
        
    }
      somDaColisao.play();
      yAtor = 365;
    }
    
  }

// Reset

function reset ()
{
  if (yAtor == -15)
    {
      yAtor = 365;
    }
}

function pontuacao()
{
   if (yAtor < -12){
     (meusPontos += 1)
     somDaChegada.play();
      yAtor = 365;
   }
     
}

function incluirPontos(){
  text(meusPontos, 300, 20);
  textSize(25);
  fill(255, 255, 1);
}

function podeSeMover(){
  return yAtor < 366;
}
