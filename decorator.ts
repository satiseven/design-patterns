// DiscountInterface.ts
interface DiscountInterface {
    calculateDiscount(price: number): number;
}

// BaseDiscount.ts
class BaseDiscount implements DiscountInterface {
    calculateDiscount(price: number): number {
        return price;
    }
}

// TwoPlusOneDiscount.ts
class TwoPlusOneDiscount implements DiscountInterface {
    private nextDiscount: DiscountInterface;

    constructor(nextDiscount: DiscountInterface) {
        this.nextDiscount = nextDiscount;
    }

    calculateDiscount(price: number): number {
        // Logic for 2+1 discount here
        // You can modify the price based on the discount rules

        // Delegate the calculation to the next discount in the chain
        return this.nextDiscount.calculateDiscount(price);
    }
}

// PercentageDiscount.ts
class PercentageDiscount implements DiscountInterface {
    private nextDiscount: DiscountInterface;
    private percentage: number;

    constructor(nextDiscount: DiscountInterface, percentage: number) {
        this.nextDiscount = nextDiscount;
        this.percentage = percentage;
    }

    calculateDiscount(price: number): number {
        // Logic for percentage discount here
        // You can modify the price based on the discount rules

        // Delegate the calculation to the next discount in the chain
        return this.nextDiscount.calculateDiscount(price-price/this.percentage);
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
