//Create variables here
var d,d2
var dog, happyDog, database, foodS, foodStock;
var database;
function preload()
{
	//load images here
  d=loadImage("images/dogImg.png")
d2=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog = createSprite(200,200,20,20)
  dog.addImage(d)
  dog.scale=0.2
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
 
}


function draw() {  
  background(46,139,87)
  
  drawSprites();
 
  fill("red")
  text("press up arrow key to feed drago",300,100)
  //add styles here
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(d2);
  }
else{
  dog.addImage(d)
}
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  if (x<=0){
    x=0
  }
  else{x=x-1}
  database.ref('/').update({
    Food : x
  })
}