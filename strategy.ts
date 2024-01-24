/*
- Paymethods system that supports PAYPAL and STRIPE

- user can pay using either of the two methods or both at once.
- when a user pays with PAYPAL, they will be redirected to PayPal's website where they can enter their details (
 
*/

 

// Interface for Paymethods methods
interface IPaymethodsMethod {
    pay(amount: number): void;
}

// Concrete strategy for PayPal
class PayPal implements IPaymethodsMethod {
    pay(amount: number): void {
        console.log(`Paid $${amount} via PayPal.`);
        // Additional logic for redirecting to PayPal's website
    }
}

// Concrete strategy for Stripe
class Stripe implements IPaymethodsMethod {
    pay(amount: number): void {
        console.log(`Paid $${amount} via Stripe.`);
        // Additional logic for processing Paymethods with Stripe
    }
}

// Context class that uses the Paym ethods strategy
class Paymethodsd {
    private PaymethodsMethod: IPaymethodsMethod;

    constructor(PaymethodsMethod: IPaymethodsMethod) {
        this.PaymethodsMethod = PaymethodsMethod;
    }

    // Setter method to change the Paymethods strategy dynamically
    setPaymethodsMethod(PaymethodsMethod: IPaymethodsMethod): void {
        this.PaymethodsMethod = PaymethodsMethod;
    }

    // Method to perform the Paymethods using the selected strategy
    performPaymethods(amount: number): void {
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
