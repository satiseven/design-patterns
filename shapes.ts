interface Shape {
    draw: () => void;
}

abstract class ShapeProperty implements Shape {
    protected shape: Shape;

    constructor(s: Shape) {
        this.shape = s;
    }

    draw(): void {
        this.shape.draw();
    }
}

class RedLine extends ShapeProperty {
    draw(): void {
        super.draw();
        console.log("This is a red line.");
    }
}

class GreenFill extends ShapeProperty {
    draw(): void {
        super.draw();
        console.log("This is green fill.");
    }
}

class Circle implements Shape {
    draw(): void {
        console.log('Drawing a circle');
    }
}

class Rectangle implements Shape {
    draw(): void {
        console.log('Drawing a rectangle');
    }
}

class Triangle implements Shape {
    draw(): void {
        console.log('Drawing a triangle');
    }
}

let shape: Shape = new Rectangle();
shape = new GreenFill(shape);
shape = new RedLine(shape);
shape.draw();
