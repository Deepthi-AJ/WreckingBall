
class Box{
    
    constructor(x,y,w,h){

        var options = {
            restitution : 0.12,
            friction: 0.75,
            density: 0.8
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(myWorld,this.body);
        this.width = w;
        this.height = h;
        this.Visibility = 255;
        
    }

    display(){

        var pos = this.body.position;

        if(this.body.speed < 10){
        
            push();
            translate(pos.x,pos.y);
            rotate(this.body.angle);
            rectMode(CENTER);
            stroke("brown");
            fill(255,0,0);
            rect(0,0,this.width, this.height);
            pop();
    
        }else{

            //World.remove(myWorld,this.body);
            push();
            this.Visibility= this.Visibility - 5;
            fill(this.Visibility,0,0);
            rect(pos.x,pos.y,this.width, this.height);
            pop();

        }

    }

}
