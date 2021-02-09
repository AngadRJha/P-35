//Create variables here
var database;
  var dog

function preload()
{
  dog=createSprite(400,350,20,20)
  dogImg= loadImage("images/dogImg.png")
	//load images here
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  var dbDataRef = database.ref("/");
  dbDataRef.on("value",readStock,showError);
  

  dog.addImage(dogImg)
  dog.scale=0.4
}


function draw() {  
  background("purple")
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodSS)

  }
  
}
function readStock(data){
  foodSS = data.val();
}
function writeStock(x){
  
 
      if(x<=0){
        x=0
      }
      else{
        x=x-1
      }
  database.ref("/").update({
    Food:x
  })
}



function showError(){
  console.log("no data")
}

