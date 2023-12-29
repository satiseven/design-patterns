"use strict";
// BaseDiscount.ts
class BaseDiscount {
    calculateDiscount(price) {
        return price;
    }
}
// TwoPlusOneDiscount.ts
class TwoPlusOneDiscount {
    constructor(nextDiscount) {
        this.nextDiscount = nextDiscount;
    }
    calculateDiscount(price) {
        // Logic for 2+1 discount here
        // You can modify the price based on the discount rules
        // Delegate the calculation to the next discount in the chain
        return this.nextDiscount.calculateDiscount(price);
    }
}
// PercentageDiscount.ts
class PercentageDiscount {
    constructor(nextDiscount, percentage) {
        this.nextDiscount = nextDiscount;
        this.percentage = percentage;
    }
    calculateDiscount(price) {
        // Logic for percentage discount here
        // You can modify the price based on the discount rules
        // Delegate the calculation to the next discount in the chain
        return this.nextDiscount.calculateDiscount(price - price / this.percentage);
    }
}
// Example of usage
const initialPrice = 100;
const baseDiscount = new BaseDiscount();
const twoPlusOneDiscount = new TwoPlusOneDiscount(baseDiscount);
const percentageDiscount = new PercentageDiscount(twoPlusOneDiscount, 10);
// Calculate the final price by chaining the discounts
const finalPrice = percentageDiscount.calculateDiscount(initialPrice);
console.log(finalPrice);
// finalPrice now contains the discounted price based on the configured decorators
