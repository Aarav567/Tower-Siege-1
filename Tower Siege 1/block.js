class Block{
    constructor(x, y, w, h) {
        var options = {
                     
        }
        this.x=x
        this.y=y
        this.width = w
        this.height = h
        this.body=Bodies.rectangle(x,y,w,h , options)
        World.add(world, this.body);
      }
      display(){
        var blockpos = this.body.position
        rectMode(CENTER)
        rect(blockpos.x,blockpos.y,this.width,this.height)
      }
}
