"use strict";
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
class Square extends Rectangle {
    constructor(width, height) {
        super(width, height);
        this.width = width;
        this.height = height;
    }
    getValue() {
        console.log(this.width);
    }
}
let s1 = new Square(20, 30);
s1.getValue();
console.log(s1.getArea());
