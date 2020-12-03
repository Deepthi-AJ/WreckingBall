
class Ball{

    constructor(x,y,r){

        var options={
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.0
        }
        this.body=Bodies.circle(x,y,r,options);
        this.radius = r;
        World.add(myWorld,this.body);

    }

    display(){

        var pos=this.body.position;
        push();
        noStroke();
        fill(186);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
        
    }

}