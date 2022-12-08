import ICommand from "../commands/command.interface";

abstract class Component {
    private command: ICommand;

    public setCommand(command: ICommand) {
        this.command = command
    }

    public executeCommand() {
        this.command.execute()
    }
}

export default Component;