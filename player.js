class Player
{
    constructor(x,y,width,height,colour)
    {
        this.player=createSprite(x,y,width,height);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.player.shapeColor=colour;
       // this.image=loadAnimation("player1a.png","player1b.png");
    }

    //To read Player1 position from database
    readPosition1()
    {
        var ref=database.ref('player1');
        ref.on("value",(data)=>{
            position=data.val();
            this.player.x=position.x;
            this.player.y=position.y;
        })
    }

    //To read player2 position from database
    readPosition2()
    {
        var ref=database.ref('player2');
        ref.on("value",(data)=>{
            position=data.val();
            this.player.x=position.x;
            this.player.y=position.y;
        })
    }

    //To write player1 position to database
    writePosition(x,y)
    {
    //    this.player.x+=x;
    //    this.player.y+=y;
    
        database.ref('player1').set({
       'x': position.x + x ,
       'y': position.y + y
        })
    }

    ////To write player2 position to database

    writePosition2(x,y)
    {
    //    this.player.x+=x;
    //    this.player.y+=y;
    
        database.ref('player2').set({
       'x': position.x + x ,
       'y': position.y + y
        })
    }
}
