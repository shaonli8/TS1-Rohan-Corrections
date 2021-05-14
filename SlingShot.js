class SlingShot{
    constructor(body1,point2){
        var option = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.09,
            length: 0.1
        }
        this.slingshot = Constraint.create(option)
        this.pointB=point2
        World.add(world,this.slingshot)  
    }
    display(){
        if(this.slingshot.bodyA){
            var p1=this.slingshot.bodyA.position
            var p2 = this.pointB
            strokeWeight(3)
            line(p1.x,p1.y,p2.x,p2.y)
        }
        
    }
    fly(){
        this.slingshot.bodyA=null
    }
    attach(body){
     this.slingshot.bodyA=body
    }
}  