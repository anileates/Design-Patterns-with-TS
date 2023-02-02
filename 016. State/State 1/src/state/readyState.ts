import Phone from "../phone.model";
import OffState from "./offState";
import State from "./state";

class ReadyState extends State {
    constructor(phone: Phone) {
        super(phone);
    }

    public onHome(): string {
        return this.phone.home();
    }

    public onOffOn(): string {
        this.phone.setState(new OffState(this.phone));
        return this.phone.lock();
    }
}

export default ReadyState;