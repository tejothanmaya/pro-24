class Log{
    constructor(speed){
      this.x = random ([100,300,500,700,900]);
      this.y = height-random ([550,650,750,1350,1450,1550]);
      this.width = 1500;
      this.height = 800;
      this.speed = speed;
      this.spt = createSprite(this.x,this.y,this.width,this.height);
      this.spt.velocityX = this.speed;
      this.spt.shapeColor = "brown";
      this.spt.scale = 0.1;
     // if(this.y==height-250 || this.y==height-1050 || this.y==height-1800){
     //   speed = speed;
      //  this.addAnimation("log",logAnimation);
     // }
     //this.spt.velocityX = -speed;
     this.spt.addAnimation("log",logAnimation);
    }

   
}