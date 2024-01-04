"use strict";
/*
- Paymethods system that supports PAYPAL and STRIPE

- user can pay using either of the two methods or both at once.
- when a user pays with PAYPAL, they will be redirected to PayPal's website where they can enter their details (
//kucuk yaglar 10 buyuk yaglar yuzde 20
// superkritik 30
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
        // Additional logic for processing Paymethods with Stripe
    }
}
// Context class that uses the Paymethods strategy
class Paymethodsd {
    constructor(PaymethodsMethod) {
        this.PaymethodsMethod = PaymethodsMethod;
    }
    // Setter method to change the Paymethods strategy dynamically
    setPaymethodsMethod(PaymethodsMethod) {
        this.PaymethodsMethod = PaymethodsMethod;
    }
    // Method to perform the Paymethods using the selected strategy
    performPaymethods(amount) {
        this.PaymethodsMethod.pay(amount);
    }
}
// Client code
const paypalPaymethods = new PayPal();
const stripePaymethods = new Stripe();
const Paymethods = new Paymethodsd(paypalPaymethods);
// Performing Paymethods using the current strategy (PayPal)
Paymethods.performPaymethods(100);
// Switching to a different Paymethods strategy (Stripe)
Paymethods.setPaymethodsMethod(stripePaymethods);
Paymethods.performPaymethods(50);
