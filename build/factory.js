"use strict";
// Enum for Payment Methods
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["PayAtDoorByCash"] = "pay at the door by cash";
    PaymentMethod["PayAtDoorByCard"] = "pay at the door by card";
    PaymentMethod["OnlineGetaways"] = "online getaways";
    PaymentMethod["BankStatement"] = "bank statement";
})(PaymentMethod || (PaymentMethod = {}));
// Enum for Payment Gateways
var PaymentGateway;
(function (PaymentGateway) {
    PaymentGateway["Paytr"] = "paytr";
    PaymentGateway["Iyzico"] = "iyzico";
    PaymentGateway["Isbank"] = "isbank";
})(PaymentGateway || (PaymentGateway = {}));
// Pay at the Door by Cash
class PayAtDoorCash {
    pay(amount) {
        console.log(`Paid ${amount} by cash at the door.`);
        // Additional logic for paying at the door by cash
    }
}
// Pay at the Door by Card
class PayAtDoorCard {
    pay(amount) {
        console.log(`Paid ${amount} by card at the door.`);
        // Additional logic for paying at the door by card
    }
}
// Paytr Getaway
class Paytr {
    constructor() {
        this.getawayInfo = '';
    }
    setGetawayInfo(info) {
        this.getawayInfo = info;
    }
    pay(amount) {
        console.log(`Paid ${amount} via Paytr. Getaway info: ${this.getawayInfo}`);
        // Additional logic for Paytr getaway
    }
}
class BankStatement {
    pay(amount) {
        console.log(`Paid ${amount} via bank statement.`);
        // Additional logic for bank statement
    }
}
// Iyzico Getaway
class Iyzico {
    constructor() {
        this.getawayInfo = '';
    }
    setGetawayInfo(info) {
        this.getawayInfo = info;
    }
    pay(amount) {
        console.log(`Paid ${amount} via Iyzico. Getaway info: ${this.getawayInfo}`);
        // Additional logic for Iyzico getaway
    }
}
// Isbank Getaway
class Isbank {
    constructor() {
        this.getawayInfo = '';
    }
    setGetawayInfo(info) {
        this.getawayInfo = info;
    }
    pay(amount) {
        console.log(`Paid ${amount} via Isbank. Getaway info: ${this.getawayInfo}`);
        // Additional logic for Isbank getaway
    }
}
// Factory for creating payment methods
class PaymentFactorySwitcher {
    static createPaymentMethod(paymentType, getawayType) {
        switch (paymentType) {
            case PaymentMethod.PayAtDoorByCash:
                return new PayAtDoorCash();
            case PaymentMethod.PayAtDoorByCard:
                return new PayAtDoorCard();
            case PaymentMethod.OnlineGetaways:
                if (getawayType) {
                    return this.createOnlineGetaway(getawayType);
                }
                else {
                    throw new Error('Online getaway type is required for online payments.');
                }
            case PaymentMethod.BankStatement:
                return new BankStatement();
            default:
                throw new Error('Invalid payment type');
        }
    }
    static createOnlineGetaway(getawayType) {
        switch (getawayType) {
            case PaymentGateway.Paytr:
                const paytr = new Paytr();
                return paytr;
            case PaymentGateway.Iyzico:
                const iyzico = new Iyzico();
                return iyzico;
            case PaymentGateway.Isbank:
                const isbank = new Isbank();
                return isbank;
            default:
                throw new Error('Invalid online getaway type');
        }
    }
}
// Example usage
const paymentType = PaymentMethod.OnlineGetaways;
const getawayType = PaymentGateway.Paytr;
const paymentMethod = PaymentFactorySwitcher.createPaymentMethod(paymentType, getawayType);
paymentMethod.pay(100);
