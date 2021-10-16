class paper
{
    constructor(x,y,r)
    {
        var options={
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2  
        }
        
        this.x=x;
        this.h=h;
        this.r=r;

        this.image=loadImage("paper.png")
        this.body=Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
}
display()
{
    var paperPos=this.body.position;
    var paperAngle = this.body.angle;
    fill("blue");
    rotate(angle);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,33,33);
}

