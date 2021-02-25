class Ground {

    constructor(x,y,width,height){

         var opi={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,opi);
        this.width=width;
        this.height=height;

        World.add(world,this.body);


    }

    display(){

        var pos=this.body.position;

        rectMode(CENTER);
        stroke("black");
        strokeWeight(0.5)
        fill("brown")
        rect(pos.x,pos.y,this.width,this.height);


    }

    
}