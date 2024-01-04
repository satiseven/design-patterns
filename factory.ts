// Enum for Payment Methods
enum PaymentMethod {
    PayAtDoorByCash = 'pay at the door by cash',
    PayAtDoorByCard = 'pay at the door by card',
    OnlineGetaways = 'online getaways',
    BankStatement = 'bank statement',
  }
  
  // Enum for Payment Gateways
  enum PaymentGateway {
    Paytr = 'paytr',
    Iyzico = 'iyzico',
    Isbank = 'isbank',
  }
  
  // Payment interface
  interface Payment {
    pay(amount: number): void;
  }
  
  // Online Getaway interface
  interface OnlineGetaway extends Payment {
    setGetawayInfo(info: string): void;
  }
  
  // Pay at the Door by Cash
  class PayAtDoorCash implements Payment {
    pay(amount: number): void {
      console.log(`Paid ${amount} by cash at the door.`);
      // Additional logic for paying at the door by cash
    }
  }
  
  // Pay at the Door by Card
  class PayAtDoorCard implements Payment {
    pay(amount: number): void {
      console.log(`Paid ${amount} by card at the door.`);
      // Additional logic for paying at the door by card
    }
  }
  
  // Paytr Getaway
  class Paytr implements OnlineGetaway {
    private getawayInfo: string = '';
  
    setGetawayInfo(info: string): void {
      this.getawayInfo = info;
    }
  
    pay(amount: number): void {
      console.log(`Paid ${amount} via Paytr. Getaway info: ${this.getawayInfo}`);
      // Additional logic for Paytr getaway
    }
  }
  class BankStatement implements Payment {
    pay(amount: number): void {
      console.log(`Paid ${amount} via bank statement.`);
      // Additional logic for bank statement
    }
  }
  // Iyzico Getaway
  class Iyzico implements OnlineGetaway {
    private getawayInfo: string = '';
  
    setGetawayInfo(info: string): void {
      this.getawayInfo = info;
    }
  
    pay(amount: number): void {
      console.log(`Paid ${amount} via Iyzico. Getaway info: ${this.getawayInfo}`);
      // Additional logic for Iyzico getaway
    }
  }
  
  // Isbank Getaway
  class Isbank implements OnlineGetaway {
    private getawayInfo: string = '';
  
    setGetawayInfo(info: string): void {
      this.getawayInfo = info;
    }
  
    pay(amount: number): void {
      console.log(`Paid ${amount} via Isbank. Getaway info: ${this.getawayInfo}`);
      // Additional logic for Isbank getaway
    }
  }
  
  // Factory for creating payment methods
  class PaymentFactorySwitcher {
    static createPaymentMethod(paymentType: PaymentMethod, getawayType?: PaymentGateway): Payment {
      switch (paymentType) {
        case PaymentMethod.PayAtDoorByCash:
          return new PayAtDoorCash();
        case PaymentMethod.PayAtDoorByCard:
          return new PayAtDoorCard();
        case PaymentMethod.OnlineGetaways:
          if (getawayType) {
            return this.createOnlineGetaway(getawayType);
          } else {
            throw new Error('Online getaway type is required for online payments.');
          }
        case PaymentMethod.BankStatement:
          return new BankStatement();
        default:
          throw new Error('Invalid payment type');
      }
    }
  
    private static createOnlineGetaway(getawayType: PaymentGateway): OnlineGetaway {
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
  