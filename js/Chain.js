class Chain{

    constructor(mybodyA, mypointB){
    
        var options = {
            bodyA: mybodyA,
            pointB: mypointB,
            stiffness: 0.004,
            length: 9
        }
        this.chain = Constraint.create(options);
        World.add(myWorld,this.chain);
        this.mypointB = mypointB;

    }

    display(){

        var begPoint = this.chain.bodyA.position;
        var endPoint = this.mypointB;
        push();
        stroke(180);
        strokeWeight(6);
        line(begPoint.x, begPoint.y, endPoint.x, endPoint.y);
        pop();
        
    }

}
