
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,500)
monkey=createSprite(50,450)
monkey.addAnimation("running",monkey_running)  
 monkey.scale=0.2

  
  
  ground=createSprite(400,490,2000,20)
}


function draw()
{
  background(200);
  ground.velocityX=-3;
  
  if(ground.x<0)
  {
    ground.x=ground.width/2;
  }
  if (keyDown("space")&& monkey.y>205){
   monkey.velocityY=-10  }
  monkey.velocityY=monkey.velocityY+0.7
  monkey.collide(ground)
 
  console.log(monkey.y)
  spawnobs();
  spawnbana();
  fill(0)
  textSize(20)
  score=Math.ceil(frameCount/frameRate())
  text("survivalTime "+score,100,50)
  drawSprites();
  
}
  function spawnobs(){
  
  if(frameCount%100==0){
  obstacle=createSprite(600,450)
  obstacle.addAnimation("ob",obstaceImage)
  obstacle.scale=0.2
    obstacle.velocityX=-3;
    
  }
  }
function spawnbana(){
  
  if(frameCount%100==0){

  banana=createSprite(600,240)
  banana.addAnimation("hi", bananaImage)
  banana.scale=0.1
  banana.velocityX=-3;
    
  }
  }






