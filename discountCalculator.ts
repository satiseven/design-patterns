// discount calculator by strategy pattern 

// check is eligible
// calculate the price

// Firstly we should have an interface for sub classes an should define all neccessary functions
// we should have a main class that we passes the subclass into int.

interface Product{
    title:string,
    price:number,
    
}
interface Order{
   userId:number,
   price:number,
   discount:number,
   products: Array<Product>,
}
 
interface DiscountStrategy {

      isEligible(product:Product):boolean;

      calculateDiscount(order: Order): number;
}

 class Discount{
    private discount:DiscountStrategy;
    constructor(discount:DiscountStrategy) {
        this.discount=discount;
    }
    public applyDiscount(order:Order){
      
    const finalPrice= this.discount.calculateDiscount(order);
    console.log(finalPrice);
    }
}
class PercentageDiscounts implements DiscountStrategy {
    isEligible(product:Product): boolean { return true;}
        calculateDiscount(order: Order): number {

            return 1.5;
        }
}
const order:Order={
    discount:10,
    price:50,
    products:[{price:14,title:"product"}],
    userId:12,
}
const percentage=new PercentageDiscounts();
const discount=new Discount(percentage);
discount.applyDiscount(order);