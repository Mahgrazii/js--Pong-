// variáveis da bolinha
let xBolinha
let yBolinha
let diametro

xBolinha = width/2;
  xBolinha = height/2; 
diametro = 20;
  

let velocidadeX
let velocidadeY


let xRaquete = 0;
let xRaquete = 170;

let xRaqueteOponente = 590;
let yRaqueteOponente = 170;

function setup() { 
  createCanvas(600, 400);
  

function draw() {
  background(0);
  desenhaBolinha();
  movimentaBolinha();
}
desenhaRaquete(xRaquete, yRaquete);
desenhaRaquete(xRaqueteOponente, 
yRaqueteOponente)
function desenhaBolinha(){
  
  circle(xBolinha,  xBolinha,  diametro);
 }
  
  function movimentaBolinha(){
    velocidadeX = 6;
    velocidadeY = 4;
    
    xBolinha +=velocidadeX
    YBolinha +=velocidadeY
}
  function verificaborda(){
  
  if (xbolinha + raio > largura || xbolinha - raio < 0 )
}
 if (ybolinha + raio  > altura || yboliha - raio > 0){
   velocidade x *= - 1 ;
  }
}
  
function  desenharaquete ( x , y ){
  rect ( x , y , larguraraquete ,  alturaraquete );
}
  
function movimentaRaquete(){
  
}
