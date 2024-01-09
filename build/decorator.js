"use strict";
// Concrete Component
class SimpleCoffee {
    cost() {
        return 5;
    }
    description() {
        return 'Simple Coffee';
    }
}
// Decorator abstract class
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
}
// Concrete Decorator 1
class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 2;
    }
    description() {
        return this.coffee.description() + ', Milk';
    }
}
// Concrete Decorator 2
class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 1;
    }
    description() {
        return this.coffee.description() + ', Sugar';
    }
}
// Example usage
const simpleCoffee = new SimpleCoffee();
console.log(`Cost: $${simpleCoffee.cost()}, Description: ${simpleCoffee.description()}`);
const milkCoffee = new MilkDecorator(simpleCoffee);
console.log(`Cost: $${milkCoffee.cost()}, Description: ${milkCoffee.description()}`);
const sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log(`Cost: $${sugarMilkCoffee.cost()}, Description: ${sugarMilkCoffee.description()}`);
