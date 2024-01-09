"use strict";
// ConcreteCommand: LightOnCommand
class LightOnCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOn();
    }
}
// ConcreteCommand: LightOffCommand
class LightOffCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOff();
    }
}
// Receiver: Light
class Light {
    turnOn() {
        console.log("Light is ON");
    }
    turnOff() {
        console.log("Light is OFF");
    }
}
// Invoker: RemoteController
class RemoteController {
    setCommand(command) {
        this.command = command;
    }
    pressButton() {
        this.command.execute();
    }
}
// Client code
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);
const remote = new RemoteController();
remote.setCommand(lightOnCommand);
remote.pressButton(); // Light is ON
remote.setCommand(lightOffCommand);
remote.pressButton(); // Light is OFF
