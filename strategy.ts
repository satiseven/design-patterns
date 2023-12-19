/*
- payment system that supports PAYPAL and STRIPE

- user can pay using either of the two methods or both at once.
- when a user pays with PAYPAL, they will be redirected to PayPal's website where they can enter their details (

*/

 

// Interface for payment methods
interface PaymentMethod {
    pay(amount: number): void;
}

// Concrete strategy for PayPal
class PayPal implements PaymentMethod {
    pay(amount: number): void {
        console.log(`Paid $${amount} via PayPal.`);
        // Additional logic for redirecting to PayPal's website
    }
}

// Concrete strategy for Stripe
class Stripe implements PaymentMethod {
    pay(amount: number): void {
        console.log(`Paid $${amount} via Stripe.`);
        // Additional logic for processing payment with Stripe
    }
}

// Context class that uses the payment strategy
class Payment {
    private paymentMethod: PaymentMethod;

    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    // Setter method to change the payment strategy dynamically
    setPaymentMethod(paymentMethod: PaymentMethod): void {
        this.paymentMethod = paymentMethod;
    }

    // Method to perform the payment using the selected strategy
    performPayment(amount: number): void {
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
