var fixedRect, movingRect;
var object1,object2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  /*movingRect.velocityY = -5;
  fixedRect.velocityY = +5;*/
 
 object1 = createSprite ( 100,100,40,40) ;
 object2 = createSprite ( 170,100,40,40) ;

}

function draw() {
  background(0,0,0); 
  movingRect.x= mouseX 
  movingRect.y= mouseY 

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }

if (collide(object1,movingRect)){
  object1.shapeColor="blue"
  movingRect.shapeColor="blue"
}
 
else {
  object1.shapeColor="green"
  movingRect.shapeColor="green"
}
  drawSprites();
}


