import IElectronicDevice from "../device.interface";
import ICommand from "./command.interface";

class TurnOnCommand implements ICommand {
    public device: IElectronicDevice;

    constructor(device: IElectronicDevice) {
        this.device = device;
    }

    public execute(): void {
        this.device.turnOn();
    }

    public undo(): void {
        this.device.turnOff();
    }
}

export default TurnOnCommand;