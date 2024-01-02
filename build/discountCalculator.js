"use strict";
// discount calculator by strategy pattern 
class Discount {
    constructor(discount) {
        this.discount = discount;
    }
    applyDiscount(order) {
        const finalPrice = this.discount.calculateDiscount(order);
        console.log(finalPrice);
    }
}
class PercentageDiscounts {
    isEligible(product) { return true; }
    calculateDiscount(order) {
        return 1.5;
    }
}
const order = {
    discount: 10,
    price: 50,
    products: [{ price: 14, title: "product" }],
    userId: 12,
};
const percentage = new PercentageDiscounts();
const discount = new Discount(percentage);
discount.applyDiscount(order);
