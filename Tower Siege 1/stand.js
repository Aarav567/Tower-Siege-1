class Stand{
    constructor(x, y, w, h) {
        var options = {
            isStatic:true
        }
        this.x=x
        this.y=y
        this.width=w
        this.height=h
        this.body=Bodies.rectangle(x,y,w,h, options)
        World.add(world,this.body)


      }
      display(){
        var standpos = this.body.position
        rectMode(CENTER)
        rect(standpos.x,standppos.y,this.width,this.height)
      }
}