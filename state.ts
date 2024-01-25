interface OrderStatus {
    id: number;
    name: string;
    trackingNumber(): string;
  }
  
  class OrderStateMachine {
    private _currentState: OrderStatus;
    private _states: StateRegistry;
  
    constructor(initial: OrderStatus) {
      this._currentState = initial;
      this._states = new StateRegistry(); // Register possible states here
    }
  
    changeState(nextState: OrderStatus): void {
      if (!this._states.has(nextState)) {
        throw new Error(`Invalid state transition to ${nextState.name}`);
      }
      this._currentState = nextState;
    }
  
    getTrackingNumber(): string {
      return this._currentState.trackingNumber();
    }
  }
  
  class StateRegistry {
    private _states: Map<OrderStatus, any>;
  
    constructor() {
      this._states = new Map();
    }
  
    register(state: OrderStatus): void {
      this._states.set(state, undefined); // Can store additional data for each state
    }
  
    has(state: OrderStatus): boolean {
      return this._states.has(state);
    }
  }
  
  class Shipped implements OrderStatus {
    id: number = 1;
    name: string = "Shipped";
    trackingNumber(): string {
      return "Tracking Number is 123456789";
    }
  }
  
  class OrderConfirmed implements OrderStatus {
    id: number = 2;
    name: string = "Order Confirmed";
    trackingNumber(): string {
      return "The order has been confirmed, but it has not yet been delivered to the post office";
    }
  }
  class InvalidState implements OrderStatus {
    id: number = -1;
    name: string = "Invalid";
    trackingNumber(): string {
      throw new Error("This order is in an invalid state and cannot have a tracking number");
    }
  }
  // Example usage:
  const stateRegistry = new StateRegistry();
  stateRegistry.register(new Shipped());
  stateRegistry.register(new OrderConfirmed());
  
  const orderStateMachine = new OrderStateMachine(new Shipped());
  console.log(orderStateMachine.getTrackingNumber()); // "Tracking Number is 123456789"
  
  orderStateMachine.changeState(new OrderConfirmed());
  console.log(orderStateMachine.getTrackingNumber()); // "The order has been confirmed..."
  
  // Try changing to an unregistered state (throws error)
  try {
    orderStateMachine.changeState(new InvalidState()); // Assuming InvalidState is not registered
  } catch (error) {
    if (typeof error === 'string') {
        console.log(error.toUpperCase()); // error is now a string
      } else if (error instanceof Error) {
        console.error(error.message); // error is now an Error object
      }
 
  }