class Box {

    constructor(x,y,width,height){

         var opi={
            restitution:0.7,
            density:5,
            friction:1
        }

        this.body = Bodies.rectangle(x,y,width,height,opi);
        this.width=width;
        this.height=height;

        this.image = loadImage("Monster-02.png")

        World.add(world,this.body);


    }

    display(){

        var pos=this.body.position;
        var angle=this.body.angle
        push();
        
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        stroke("black");
        strokeWeight(2)
        fill("white")
        image(this.image,0,0,this.width,this.height);
        pop();

    }

    
}