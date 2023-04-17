class Cannon{

    constructor(x,y,w,h,angle){
        this.x = x
        this.y = y
        this.h = h
        this.w = w
        this.angle = angle
        this.cannonIMG = loadImage("./assets/canon.png");
        this.cannonbaseIMG = loadImage("./assets/cannonBase.png");
    }

    display(){
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.cannonIMG, 0, 0, this.w, this.h);
        pop();
        image(this.cannonbaseIMG, 70,20,200,200);
        noFill();
    }

}