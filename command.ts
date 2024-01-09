// Command interface
interface Command {
    execute(): void;
}

// ConcreteCommand: LightOnCommand
class LightOnCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOn();
    }
}

// ConcreteCommand: LightOffCommand
class LightOffCommand implements Command {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.turnOff();
    }
}

// Receiver: Light
class Light {
    turnOn(): void {
        console.log("Light is ON");
    }

    turnOff(): void {
        console.log("Light is OFF");
    }
}

// Invoker: RemoteController
class RemoteController {
    private command!: Command;

    setCommand(command: Command): void {
        this.command = command;
    }

    pressButton(): void {
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
