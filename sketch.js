var player
var obstacle, fire, obstaclee, obstacle1, obstacle2
var ground, obstaclesGroup, obstaclesGroupp, obstaclesGrouppp, obstaclesGroup1, obstaclesGroup2, win, wall, retry, winn
var deaths=0
function preload(){
playerI = loadImage("player.png");
dragonI = loadImage("dragon.png");
dragonnI = loadImage("dragonn.png");
fireI = loadImage("fire.png");
leftdragonI = loadImage("leftdragon.png");
rightdragonI = loadImage("rightdragon.png");
winI = loadImage("DOOR.png");
wallI=loadImage("WALL.png")
brickI=loadImage("banana.PNG")
retryI=loadImage("r.png")
winnI=loadImage("win!.png")
}

function setup() {
wall=createSprite(225, 210, 250, 250)
wall.addImage("wa", wallI)
wall.scale=0.4
player = createSprite(210,320,20,50);
player.addImage("pl", playerI)
ground = createSprite(200, 440, 500, 30)
ceiling = createSprite(200, -20, 500, 30)
wall1 = createSprite(-50, 200, 30, 500)
wall2 = createSprite(440, 200, 30, 500)
winn = createSprite(210, 140, 30, 30)
winn.addImage("wn", winnI)
winn.scale=6
retry = createSprite(210, 250, 30, 500)
retry.addImage("re", retryI)
retry.scale=3.5
platform1 = createSprite(300, 325, 75, 20)
platform2 = createSprite(100, 300, 75, 20)
platform3 = createSprite(100, 225, 75, 20)
platform4 = createSprite(310, 200, 75, 20)
platform5 = createSprite(310, 125, 75, 20)
platform6 = createSprite(200, 50, 75, 20)
platform7 = createSprite(50, 125, 75, 20)
win=createSprite(50, 87, 30, 30)
win.addImage("wi", winI)
platform1.addImage("br", brickI)
platform2.addImage("bi", brickI)
platform3.addImage("bc", brickI)
platform4.addImage("bk", brickI)
platform5.addImage("ba", brickI)
platform6.addImage("bg", brickI)
platform7.addImage("be", brickI)
ground.addImage("gr", brickI)
ground.scale=0.8
win.scale=1.5
platform1.scale=0.2
platform2.scale=0.2
platform3.scale=0.2
platform4.scale=0.2
platform5.scale=0.2
platform6.scale=0.2
platform7.scale=0.2
winn.visible=false
retry.visible=false
  obstaclesGroup = new Group();
  obstaclesGroup1 = new Group();
  obstaclesGroupp = new Group();
  obstaclesGrouppp = new Group();
  obstaclesGroup2 = new Group();
}

function draw() {
  background(200);
  spawnDragonsLeft();
  spawnDragonsRight();
  spawnFire();
  spawnBigDragonsLeft();
  spawnBigDragonsRight();
  player.velocityY=player.velocityY + 2
  player.collide(ground);
  player.collide(ceiling);
  player.collide(platform1);
  player.collide(platform2);
  player.collide(platform3);
  player.collide(platform4);
  player.collide(platform5);
  player.collide(platform6);
  player.collide(platform7);
  player.collide(obstaclesGroup)
  player.collide(obstaclesGroupp)
  player.collide(obstaclesGroup1)
  player.collide(obstaclesGroup2)
    if(keyDown("UP_ARROW")) {
      player.velocityY = -15;
    }
    if(keyDown("RIGHT_ARROW")){
      player.velocityX= 5
    }else{
      player.velocityX=0
    }
    if(keyDown("LEFT_ARROW")){
      player.velocityX= -5
    }
    if(keyDown("DOWN_ARROW")){
      player.velocityX= player.velocityX/2
      player.velocityY= player.velocityY+0.3
      player.scale=0.7
    }else{
      player.scale=1
    }
    if (player.isTouching(wall1)){
        player.x=210
        player.y=320
        deaths=deaths+1
    }
    if (player.isTouching(wall2)){
      player.x=210
      player.y=320
      deaths=deaths+1
  }
  if (obstaclesGrouppp.isTouching(player)){
    player.x=210
    player.y=320
    deaths=deaths+1
}
  if (player.isTouching(win)){
    player.visible=false
    win.visible=false
    platform1.visible=false
    platform2.visible=false
    platform3.visible=false
    platform4.visible=false
    platform5.visible=false
    platform6.visible=false
    platform7.visible=false
    retry.visible=true;
    winn.visible=true
  }
  if(mousePressedOver(retry)) {
    player.visible=true
    win.visible=true
    platform1.visible=true
    platform2.visible=true
    platform3.visible=true
    platform4.visible=true
    platform5.visible=true
    platform6.visible=true
    platform7.visible=true
    retry.visible=false
    winn.visible=false
    player.x=210
    player.y=320
    deaths=0
}
  drawSprites();
  fill("white")
  text("Deaths: "+ deaths, 300,30);
}
function spawnDragonsLeft() {
  if(frameCount % 30 === 0) {
    var obstacle = createSprite(0,0,10,40);
    obstacle.y=Math.round(random(0,300))
    //obstacle.debug = true;
    obstacle.velocityX = (8);
    
    obstacle.addImage(dragonI);
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 1.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
function spawnBigDragonsLeft() {
  if(frameCount % 60 === 0) {
    var obstacle1 = createSprite(0,0,10,40);
    obstacle1.y=Math.round(random(0,300))
    //obstacle.debug = true;
    obstacle1.velocityX = (8);
    
    obstacle1.addImage(leftdragonI);
    //assign scale and lifetime to the obstacle           
    obstacle1.scale = 3;
    obstacle1.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup1.add(obstacle1);
  }
}
function spawnBigDragonsRight() {
  if(frameCount % 60 === 0) {
    var obstacle2 = createSprite(500,0,10,40);
    obstacle2.y=Math.round(random(0,300))
    //obstacle.debug = true;
    obstacle2.velocityX = (-8);
    
    obstacle2.addImage(rightdragonI);
    //assign scale and lifetime to the obstacle           
    obstacle2.scale = 3;
    obstacle2.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup2.add(obstacle2);
  }
}

function spawnDragonsRight() {
  if(frameCount % 30 === 0) {
    var obstaclee = createSprite(500,0,10,40);
    obstaclee.y=Math.round(random(0,300))
    //obstacle.debug = true;
    obstaclee.velocityX = (-8);
    
    obstaclee.addImage(dragonnI);
    //assign scale and lifetime to the obstacle           
    obstaclee.scale = 1.5;
    obstaclee.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroupp.add(obstaclee);
  }}
  function spawnFire() {
    if(frameCount % 30 === 0) {
      var obstacleee = createSprite(50,0,10,40);
      obstacleee.x=Math.round(random(475,0))
      //obstacle.debug = true;
      obstacleee.velocityY = (8);
      
      obstacleee.addImage(fireI);
      //assign scale and lifetime to the obstacle           
      obstacleee.scale = 1.5;
      obstacleee.lifetime = 40;
      //add each obstacle to the group
      obstaclesGrouppp.add(obstacleee);
    }
}
