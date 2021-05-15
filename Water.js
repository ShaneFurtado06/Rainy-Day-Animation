class Water{
    constructor(x,y){
        var options={
            'restitution':0.1,
            'friction':0.01,
        }
        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }

    update(){
        if(this.body.position.y>675){
            Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,650)});
        }
    }

    display(){
        var angle=this.body.angle;
       
        push ();
            translate (this.body.position.x,this.body.position.y);

            rotate (angle);
            ellipseMode(CENTER);
            strokeWeight(0);
            fill ("blue");
            ellipse(0,0,10,10);
            pop ();
       
    }
}