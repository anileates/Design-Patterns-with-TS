import OffState from "./state/offState";
import State from "./state/state";

class Phone {
    private state: State;

    constructor() {
        this.state = new OffState(this); // Default state ıs `off`
    }

    public setState(state: State) {
        this.state = state;
    }

    public lock() {
        return "Locking phone and turning off the screen";
    }

    public home() {
        return "Going to the home screen";
    }

    public unlock() {
        return "Unlocking phone and turning on the screen";
    }

    public turnOn() {
        return "Turning the screen on, device still locked";
    }

    public clickHome() {
        return this.state.onHome();
    }

    public clickPower() {
        return this.state.onOffOn();
    }
}

export default Phone;