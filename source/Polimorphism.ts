class Persons{
     constructor(public firstName:string, public LastName:string){}
     public displayName(){
        console.log(this.firstName,this.LastName)
     }
}

class Persons1 extends Persons{

    public override displayName(){
        console.log("Hello")
    }
}

let p1=new Persons1("Manisha","Kamble")
p1.displayName()

let p2=new Persons("Rani","Kamble")
p2.displayName()