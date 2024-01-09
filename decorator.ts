// Component interface
interface Coffee {
    cost(): number;
    description(): string;
  }
  
  // Concrete Component
  class SimpleCoffee implements Coffee {
    cost() {
      return 5;
    }
  
    description() {
      return 'Simple Coffee';
    }
  }
  
  // Decorator abstract class
  abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;
  
    constructor(coffee: Coffee) {
      this.coffee = coffee;
    }
  
    abstract cost(): number;
    abstract description(): string;
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
  const simpleCoffee: Coffee = new SimpleCoffee();
  console.log(`Cost: $${simpleCoffee.cost()}, Description: ${simpleCoffee.description()}`);
  
  const milkCoffee: Coffee = new MilkDecorator(simpleCoffee);
  console.log(`Cost: $${milkCoffee.cost()}, Description: ${milkCoffee.description()}`);
  
  const sugarMilkCoffee: Coffee = new SugarDecorator(milkCoffee);
  console.log(`Cost: $${sugarMilkCoffee.cost()}, Description: ${sugarMilkCoffee.description()}`);
  