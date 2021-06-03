var p1,p2,asteroid1,asteroid2,asteroid3;
var blast,blastImage,space,spaceImage;
var car, car2,carImage, carImage2, fuelImage;
var shoot = 0;
var score = 0;
var laser,asteroidGroup,fuelGroup;
var explosionSound,laserSound,explasionImage;
var instruction = 0;
var play = 1;
var end = 2;
var gameState = instruction;
var b10, b20, b30;


function preload() {
  spaceImage = loadImage("road.png");
  carImage = loadImage("Player2.png");
  
  fuelImage = loadImage("fuel.png");
  b1 = loadImage("screw.png");
  b2 = loadImage("cone.png");
  b3 = loadImage("barricade.png");
 
}

function setup() {  
createCanvas(1700,800);
space = createSprite(1000,350,630,220);
space.addImage(spaceImage);
space.scale = 10.2;
space.velocityX = -39;

  car = createSprite(250,400,50,50);
  car.addImage(carImage);
  car.scale = 0.3;
  
  

    
    

        

  obsGroup = new Group;
  fuelGroup = new Group;
  
  }

function draw() {
  background(0);

  if(gameState === play) {
    
    
    if(space.x < 700) {
      space.x = 1000;
    }
    
    shoot = shoot - 1;

    
    if(keyDown("right")) {
      car.x = car.x + 10;

    }

    if(keyDown("left")) {
      car.x = car.x - 10;    
    }

    if(keyDown("up")) {
    car.y = car.y - 10;

    }

    if(keyDown("down")) {
      car.y = car.y + 10;    
    }

    
    
    obsacles();
    fuel();
    drawSprites();
    
   
    if(car.isTouching(obsGroup)) {
      obsGroup.destroyEach();
      gameState = end;
     
    }

     
    




  }
  if(keyDown("r") && gameState === end) {
    gameState = instruction;
  }  

  if(gameState === instruction) {
    stroke("white");
    fill("white");
    textFont("trebuchetMS")
    textSize(50);
    text("------ Ruthless Racers ------",canvas.width/2-300,canvas.height/2-300);
    stroke("blue");
    fill("red");
    textSize(35);
    text("ENJOY THE GAME!", 500, 600);
    textFont("Apple Chancery");
    text("You  are in a never ending race track.",canvas.width/2-300, canvas.height/2 - 210);
    text("Use up, left, right and left arrows to move the car.",canvas.width/2-300,canvas.height/2-50);
    
    
    text("Press 'space' to start game.",600, 500);
    
    if(keyDown("space")) {
      gameState = play;
    } 

  }
}
  

function fuel() {
  if(frameCount % 110 === 0) {
  
    var fuel = createSprite(Math.round(random(50,1350)),-20);
    fuel.velocityX = -6 
    fuel.lifetime = 200;
    fuel.scale = 0.3;
    
    fuelGroup.add(fuel);
  }
}

function obsacles() {
  if(frameCount % 110 === 0) {
    b10 = createSprite(2000, 400, 50, 50);
    b10.velocityX = -19
    b10.lifetime = 200;
    b10.scale = 0.3;
    b10.addImage(b2);
    b10.scale = 0.3
    obsGroup.add(b10);
  }
  if(frameCount % 110 === 0){
    b20 = createSprite(1900, 100, 50, 50);
    b20.velocityX = -19
    b20.lifetime = 200;
    b20.scale = 0.3;
    b20.addImage(b1);
    b20.scale = 0.1  
    obsGroup.add(b20);
  }
  if(frameCount % 110 === 0){
    b30 = createSprite(1800, 600, 50, 50);
    b30.velocityX = -19 
    b30.lifetime = 200;
    b30.scale = 0.3;
    b30.addImage(b3);
    b30.scale = 0.3;
    obsGroup.add(b30);
  }
}