import ICommand from "../commands/command.interface";

// Invoker class
class DeviceButton {
    private command: ICommand;

    constructor(command: ICommand) {
        this.command = command;
    }

    public press(): void {
        this.command.execute();
    }

    public pressUndo(): void {
        this.command.undo();
    }
}

export default DeviceButton;