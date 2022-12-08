import Light from "../components/light";
import ICommand from "./command.interface";

class SwitchLightsCommand implements ICommand {
    constructor(private light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.switchLights();
    }
}

export default SwitchLightsCommand;