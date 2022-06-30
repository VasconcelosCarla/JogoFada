var fada, fadaIMG;
var bgIMG,fundo;
var canvas;
var obstaculos;
var power;

function preload(){
  bgIMG = loadImage("./assets/bg2.jpg");
  fadaIMG = loadAnimation("./assets/p1.png", "./assets/p2.png");
}
function setup() {
  canvas = createCanvas(900, 550);
  fundo = createSprite(0, 0, 900, 550);
  fundo.addImage("fundo", bgIMG);
  fundo.scale = 5;
  fundo.velocityX = -2;

  power = createSprite(70, 225, 10, 10);
  power.shapeColor = "yellow";

  fada = createSprite(70, 225);
  fada.addAnimation("fada",fadaIMG);
  fada.scale = 2;
  power.x = fada.x;
  power.y = fada.y;
}

function draw() {

  //console.log(fundo.x);
  background(225);

  if(fundo.x < -500){
    fundo.x = 0
  }
  
  if(keyDown("space")){
    power.velocityX = 4;
  }
  
  drawSprites();
}




