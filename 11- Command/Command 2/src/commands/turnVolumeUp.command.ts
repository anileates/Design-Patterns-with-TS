import IElectronicDevice from "../device.interface";
import ICommand from "./command.interface";

class TurnVolumeUpCommand implements ICommand {
    public device: IElectronicDevice;

    constructor(device: IElectronicDevice) {
        this.device = device;
    }

    public execute(): void {
        this.device.volumeUp();
    }

    public undo(): void {
        this.device.volumeDown();
    }
}

export default TurnVolumeUpCommand;