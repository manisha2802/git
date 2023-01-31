"use strict";
class person1 {
    constructor(name) {
        this.firstName = name;
        console.log(name);
    }
}
let Manisha = new person1("Manisha");
// Using method
class person2 {
    constructor(name) {
        this.firstName = name;
    }
    displayName() {
        console.log(this.firstName);
    }
}
let obj1 = new person2("Manisha");
obj1.displayName();
let obj2 = new person2("Rani");
obj2.displayName();
// ***************Private access Modifier******************
