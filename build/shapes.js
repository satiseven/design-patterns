"use strict";
class ShapeProperty {
    constructor(s) {
        this.shape = s;
    }
    draw() {
        this.shape.draw();
    }
}
class RedLine extends ShapeProperty {
    draw() {
        super.draw();
        console.log("This is a red line.");
    }
}
class GreenFill extends ShapeProperty {
    draw() {
        super.draw();
        console.log("This is green fill.");
    }
}
class Circle {
    draw() {
        console.log('Drawing a circle');
    }
}
class Rectangle {
    draw() {
        console.log('Drawing a rectangle');
    }
}
class Triangle {
    draw() {
        console.log('Drawing a triangle');
    }
}
let shape = new Rectangle();
shape = new GreenFill(shape);
shape = new RedLine(shape);
shape.draw();
