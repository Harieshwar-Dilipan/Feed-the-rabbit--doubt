var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg,appleGroup;
var score=0;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  garden=createSprite(200,200,0,0);
  garden.addImage("garden",gardenImg);
  garden.velocityX=0;

  rabbit=createSprite(200,330,0,0);
  rabbit.addImage("rabbit",rabbitImg);
  rabbit.scale=0.1;
}

function draw(){
  if(keyDown("A")){
    rabbit.x=rabbit.x-2;
  }
  if(keyDown("D")){
    rabbit.x=rabbit.x+2;
  }
  if(playerCar.isTouching(apple)){
    score=score+1;
  }
  drawSprites();
}
function spawnApples(){
  if(frameCount%1===0){
    var rand=Math.round(random(380,20));
    apple=createSprite(rand,-10,0,0);
    apple.scale=0.5;
    
  }
}
function score(){
  
}