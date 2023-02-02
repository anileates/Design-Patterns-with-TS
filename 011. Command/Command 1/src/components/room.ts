import Component from "./component.abstract";
import Curtains from "./curtains";

class Room extends Component {
    private curtains: Curtains;

    constructor() {
        super()
        this.curtains = new Curtains();
    }

    public getCurtains() {
        return this.curtains;
    }

    public curtainsOpen() {
        return this.curtains.isOpen()
    }
}

export default Room;