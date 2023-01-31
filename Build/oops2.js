"use strict";
class person3 {
    constructor(name) {
        this.F_Name = name;
    }
    getName() {
        console.log("My name=", this.F_Name);
    }
    setName(FName) {
        this.F_Name = FName;
        console.log(this.F_Name);
    }
}
let obj = new person3("Manisha");
obj.getName();
obj.setName("Rani");
