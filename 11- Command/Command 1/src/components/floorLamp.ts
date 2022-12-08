import Component from "./component.abstract";
import Light from "./light";

class FloorFlamp extends Component {
    private light: Light;

    constructor() {
        super()
        this.light = new Light();
    }

    public getLight() {
        return this.light;
    }

    public isLightOn(){
        return this.light.isSwitchedOn()
    }
}

export default FloorFlamp;