"use strict";
class Persons {
    constructor(firstName, LastName) {
        this.firstName = firstName;
        this.LastName = LastName;
    }
    displayName() {
        console.log(this.firstName, this.LastName);
    }
}
class Persons1 extends Persons {
    displayName() {
        console.log("Hello");
    }
}
let p1 = new Persons1("Manisha", "Kamble");
p1.displayName();
let p2 = new Persons("Rani", "Kamble");
p2.displayName();
