import Phone from "../phone.model";
import LockedState from "./LockedState";
import State from "./state";

export default class OffState extends State {
    constructor(phone: Phone) {
        super(phone);
    }

    public onHome(): string {
        this.phone.setState(new LockedState(this.phone));
        return this.phone.turnOn();
    }

    public onOffOn(): string {
        this.phone.setState(new LockedState(this.phone));
        return this.phone.turnOn();
    }
} 