//creating variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0
var ground
var survivalTime = 0

function preload(){
  
  //preloading the images and animations
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  //creating canvas
  createCanvas(400,400);
  
  //creating sprite for monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  //creating sprite for ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  
  //background colour
  background("khaki");
  
  //infinite ground
  ground.x = ground.width/2;
  
  //making the monkey jump
  if(keyDown("space") && monkey.y >= 100){
    monkey.velocityY = -10;
  }
  
  //giving gravity
  monkey.velocityY =  monkey.velocityY + 0.8;
  
  monkey.collide(ground);

  banana();
  obstacles();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :" + score,300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time :" + survivalTime,100,50);
}

function banana(){
  
  //creating sprites for banana
  if(frameCount % 80 === 0){
    var banana = createSprite(400,350,40,10)
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.lifetime = 100;
    banana.scale = 0.1;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  
  //creating sprites for obstacles
  if(frameCount % 300 === 0){
    var obstacle = createSprite(400,330,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.1;
    obstacle.lifetime = 110;
    obstacleGroup.add(obstacle);
  }
}


