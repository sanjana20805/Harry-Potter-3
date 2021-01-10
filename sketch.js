var canvas, backgroundImage;

var gameState = "start"

var name;
var form, backgroundImage;

var space, spaceImg, harry, harryImg, enemy1, enemy2;

var fire,fireImg;

var wand;

var snitchImg

var score=0;

var life = 5;

var asteroids, asteroidsGroup, asteroidImg 



function preload(){
  backgroundImage = loadImage("images/background.png")
  spaceImg = loadImage("images/space.jpeg")
  harryImg = loadImage("images/harry.png")
  fireImg = loadImage("images/ball.png")
  wand = loadSound("sounds/wand.mp3")
  snitchImg = loadImage("images/lifeline.png")
  
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-170);

  space=createSprite(width/2, height/2)
  space.addImage(spaceImg)
 
  space.y=400
  console.log(space.y)
  console.log(displayHeight-30)
    

  harry = createSprite(width/2, height - 120)
  harry.addImage(harryImg)
  harry.scale = 0.7

  fire = createSprite(harry.x,harry.y)
  fire.visible = false
  fire.addImage(fireImg)
  fire.scale = 0.15
  
  textSize(20)
  fill("yellow")
 
  form = new Form();

  asteroidsGroup = new Group()
  
  
}


function draw(){
  
  if(gameState === "start"){
    form.display();
    
  }

  if(gameState==="play"){
    harry.x=mouseX;
    space.velocityY=6;

    if(space.y>540){
      space.y=400
    }

    if(keyDown("space")){
      fire.x = harry.x - 30
      fire.y = harry.y
      fire.visible = true
      fire.velocityY = -4
      wand.play()
      

    }

    spawnAsteroids()
   
    drawSprites();

    text(name + " score "+score,displayWidth-300,40)
    text("Press space to shoot",40,40)

    for (var i = 0; i < life; i++) {
      image(snitchImg, 450 + (i * 70),40,50,50);
    }
  }
  
}

function spawnAsteroids(){
  if(frameCount%100 === 0){
    var asteroids = createSprite(random(20, width-20), 0)
    //asteroids.addImage(asteroidsImg)

    asteroids.velocityY = 6;

    asteroids.lifetime = height/asteroids.velocityY

    asteroidsGroup.add(asteroids)
  }
}
