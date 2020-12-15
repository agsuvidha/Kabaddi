// add your code here
var redPlayer, yellowPlayer;
var database;
var redimg,yellowimg;
var position;
function preload()
{
    redimg=loadAnimation("assets/player1a.png","assets/player1b.png");
    //redimg=loadAnimation("assets/player1a.png","assets/player1b.png");
    yellowimg=loadAnimation("/assets/player2a.png","/assets/player2b.png");
    
}

function setup()
{
    //To Create Canvas As Per The Display Size    
    createCanvas(displayWidth-100,displayHeight-150);
    database=firebase.database();
    // Creating Red Player 
    redPlayer=new Player(200,displayHeight/2,10,10,"red");
    

   //Creating Yellow Player
   yellowPlayer=new Player(displayWidth-360,displayHeight/2,10,10,"yellow");
  
   
   //Retrieving the x and y position from the database
   redPlayer.readPosition1();
    yellowPlayer.readPosition2();

}

function draw()
{
    background("white");
    // Draw Static Lines on the screen
    drawLine(200,"red");
    drawLine(600,"black");
    drawLine(1000,"yellow");
    
    
    //For Player Red Movement
    if(keyDown(LEFT_ARROW)){
        redPlayer.writePosition(-5,0);
      }
      else if(keyDown(RIGHT_ARROW)){
        redPlayer.writePosition(5,0);
      }
      else if(keyDown(UP_ARROW)){
        redPlayer.writePosition(0,-5);
      }
      else if(keyDown(DOWN_ARROW)){
        redPlayer.writePosition(0,+5);
      }


    //For Player Yellow Movement   on a,s,w,z
    if(keyDown("a")){
        yellowPlayer.writePosition2(-5,0);
      }
      else if(keyDown("s")){
        yellowPlayer.writePosition2(5,0);
      }
      else if(keyDown("w")){
        yellowPlayer.writePosition2(0,-5);
      }
      else if(keyDown("z")){
        yellowPlayer.writePosition2(0,+5);
      }
  
    drawSprites();
}

//To draw lines on the screen
function drawLine(x,colour)
{
    for(var i = 0; i<600; i=i+20){
      stroke(colour);
      line (x,i,x,i+10)
      
    }
}

  
  