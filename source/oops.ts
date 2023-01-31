class person1{

    public firstName:string
    constructor(name:string)
    {
        this.firstName=name
        console.log(name)
    }
}

let Manisha=new person1("Manisha")

// Using method
class person2{

    public firstName:string
   public constructor(name:string)
    {
     this.firstName=name
    
    }
    public displayName()
    {
        console.log(this.firstName)
    }
}

let obj1=new person2("Manisha")
obj1.displayName()
let obj2= new person2("Rani")
obj2.displayName()

// ***************Private access Modifier******************

