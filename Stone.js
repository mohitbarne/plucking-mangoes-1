class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
     var options={
     isstatic:false,
     restitution:0,
     friction:1,
     density:1.2
     }
      this.image = loadImage("stone.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }