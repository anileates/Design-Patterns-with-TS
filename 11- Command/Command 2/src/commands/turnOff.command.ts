import IElectronicDevice from "../device.interface";
import ICommand from "./command.interface";

class TurnOffCommand implements ICommand {
    public device: IElectronicDevice;

    constructor(device: IElectronicDevice) {
        this.device = device;
    }

    public execute(): void {
        this.device.turnOff();
    }

    public undo(): void {
        this.device.turnOn();
    }
}

export default TurnOffCommand;