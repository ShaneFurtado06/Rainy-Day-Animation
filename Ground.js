class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            'friction':0.1,
            'restitution':1,
            'density':1.2
        }

        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        World.add(world,this.body);
    }

    display(){

        push ();
        translate (this.body.position.x,this.body.position.y);
        strokeWeight (2)
        rectMode(CENTER);
        fill ("yellow");
        rect(this.x,this.y,this.width,this.height);
        pop ();
    }
}