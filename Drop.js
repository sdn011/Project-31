class Drop{
    constructor(x, y){
    this.body = Bodies.circle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("blue")
    ellipse(0, 0, this.width, this.height);
    pop();   
}
}