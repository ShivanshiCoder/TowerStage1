class Ball {
    constructor(x, y, radius){
        
        this.body = Bodies.circle(x.y, radius,options);
        this.img = loadImage("polygon.png")
        this.radius = radius;
        World.add(World, this.polygon);

    }
    display(){
        push();
        var pos = this.body.position;
        fill();
        imageMode(CENTER);
        image(this.img,0,0,this.radius*2,this.radius*2);
        pop();
    }



};
