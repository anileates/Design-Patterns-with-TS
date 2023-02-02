import Phone from "../phone.model";
import OffState from "./offState";
import ReadyState from "./readyState";
import State from "./state";

class LockedState extends State {
    constructor(phone: Phone) {
        super(phone);
    }

    public onHome(): string {
        this.phone.setState(new ReadyState(this.phone));
        return this.phone.unlock();
    }

    public onOffOn(): string {
        this.phone.setState(new OffState(this.phone));
        return this.phone.lock();
    }
}

export default LockedState;