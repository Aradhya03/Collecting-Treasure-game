var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var play=1;
var end=0;
var gamestate=1;
var treasurecollection;
var score;

function preload(){
  pathImg = loadImage("image.jpg");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  twentyImg=
loadImage("20 (1).png");
    fiftyImg=
loadImage("50 (1).png");
    seventyImg=
loadImage("70 (1).png");
  gameover=
loadImage("gameOver.png");
  
}

function setup(){
  
  createCanvas(500,450);
// Moving background
path=createSprite(250,100);
path.addImage(pathImg);
path.velocityY = 4;
  path.scale=1.32;


//creating boy running
boy = createSprite(300,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  boy.setCollider("circle", 0, 200,280);
  boy.debug=false;
  

  
  
  
  
  
  gameovertext = createSprite(250,200);
  gameovertext.addImage("final text", gameover);
  gameovertext.scale=1;
  gameovertext.visible=false;
  

  
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
  
  treasurecollection=0;

}

function draw() {

  background("white");
  
  
  
  edges= createEdgeSprites();
  boy.collide(edges);
 
  if(gamestate===play){
     boy.x = World.mouseX;
   
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      
        twenty = createSprite(200,100);
  twenty.addImage("twentypts", twentyImg);
  twenty.scale=0.2;
      twenty.lifetime=10;

      treasurecollection=treasurecollection+20;
      
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasurecollection=treasurecollection+50;
      fifty = createSprite(70,100);
  fifty.addImage("fiftytypts", fiftyImg);
  fifty.scale=0.2;
  fifty.lifetime=10;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasurecollection=treasurecollection+70;
     seventy = createSprite(300,100);
  seventy.addImage("seventypts", seventyImg);
  seventy.scale=0.2;
   seventy.lifetime=10;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
        gamestate=end;
    }
       
  }
    
   
    
  
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasurecollection,300,30);
  text("beware of the SWORDS!!", 10, 30);
  
  if(gamestate===end){
    cashG.destroyEach();
    diamondsG.destroyEach();
    jwelleryG.destroyEach();
    swordGroup.destroyEach();
    gameovertext.visible=true;
    path.velocityY=0;
    
  }
  
  
  


}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 300;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 190 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 300;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 250 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 300;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 170 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 300;
  swordGroup.add(sword);
  }
}