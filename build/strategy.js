"use strict";
/*
- payment system that supports PAYPAL and STRIPE

- user can pay using either of the two methods or both at once.
- when a user pays with PAYPAL, they will be redirected to PayPal's website where they can enter their details (

*/
// Concrete strategy for PayPal
class PayPal {
    pay(amount) {
        console.log(`Paid $${amount} via PayPal.`);
        // Additional logic for redirecting to PayPal's website
    }
}
// Concrete strategy for Stripe
class Stripe {
    pay(amount) {
        console.log(`Paid $${amount} via Stripe.`);
        // Additional logic for processing payment with Stripe
    }
}
// Context class that uses the payment strategy
class Payment {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    // Setter method to change the payment strategy dynamically
    setPaymentMethod(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    // Method to perform the payment using the selected strategy
    performPayment(amount) {
        this.paymentMethod.pay(amount);
    }
}
// Client code
const paypalPayment = new PayPal();
const stripePayment = new Stripe();
const payment = new Payment(paypalPayment);
// Performing payment using the current strategy (PayPal)
payment.performPayment(100);
// Switching to a different payment strategy (Stripe)
payment.setPaymentMethod(stripePayment);
payment.performPayment(50);
