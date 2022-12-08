import Curtains from "../components/curtains";
import ICommand from "./command.interface";

class ToggleCurtainsCommand implements ICommand {

    constructor(private curtains: Curtains) { }

    execute(): void {
        this.curtains.openClose();
    }
}

export default ToggleCurtainsCommand;