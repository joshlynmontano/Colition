function setup()
{ createCanvas(800,400);
movingRect=createSprite(400, 200, 100, 50); 
fixedRect=createSprite(200, 200, 50, 100);
movingRect.shapeColor='red'; 
fixedRect.shapeColor='red'; }


  
function draw() 
{ background('blue'); 
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x === fixedRect.width/2+movingRect.width/2 || fixedRect.x-movingRect.x === movingRect.width/2+fixedRect.width/2 
  || movingRect.y-fixedRect.y === fixedRect.height/2+movingRect.height/2 || fixedRect.y-movingRect.y === movingRect.height/2+fixedRect.height/2) 
{ movingRect.shapeColor='green';
 fixedRect.shapeColor='green'; }
else
{ movingRect.shapeColor='red';
 fixedRect.shapeColor='red'; } 


//console.log(movingRect.x-fixedRect.x); 
//console.log(fixedRect.width/2+movingRect.width/2)
 drawSprites(); }