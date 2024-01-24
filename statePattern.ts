// State interface
interface TrafficLightState {
    handleRequest(): void;
  }
  
  // Concrete states
  class RedState implements TrafficLightState {
    handleRequest(): void {
      console.log("Red Light - Stop");
    }
  }
  
  class YellowState implements TrafficLightState {
    handleRequest(): void {
      console.log("Yellow Light - Prepare to Stop or Go");
    }
  }
  
  class GreenState implements TrafficLightState {
    handleRequest(): void {
      console.log("Green Light - Go");
    }
  }
  
  // Context (Traffic Light)
  class TrafficLight {
    private currentState: TrafficLightState;
  
    constructor(initialState: TrafficLightState) {
      this.currentState = initialState;
    }
  
    // Context delegates the request to the current state
    request(): void {
      this.currentState.handleRequest();
    }
  
    // Allow the context to switch to a new state
    changeState(newState: TrafficLightState): void {
      this.currentState = newState;
    }
  }
  
  // Usage
  const trafficLight = new TrafficLight(new RedState());
  
  trafficLight.request(); // Output: Red Light - Stop
  
  trafficLight.changeState(new GreenState());
  trafficLight.request(); // Output: Green Light - Go
  