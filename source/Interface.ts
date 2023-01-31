interface shape{

    getArea:()=>number;
}
class Rectangle implements shape{
     public constructor(protected readonly height:number,protected readonly width:number){
 }
     public getArea(){

        return this.height * this.width;
     }
}
class Square extends Rectangle{
    public constructor(public width:number,public height:number){
        super(width,height)
    }

    public getValue(){
        console.log(this.width)
    }
}

let s1=new Square(20,30);
s1.getValue()
console.log(s1.getArea());
