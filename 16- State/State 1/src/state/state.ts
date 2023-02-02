import Phone from "../phone.model";

/**
 * State pattern allows an object to change its own behavior when its state changes.
 * In this example, the phone object changes its behavior based on its state. Like `clickPower()`, `clickHome()` etc.
 * These buttons act different based on the state of the phone.
 */
export default abstract class State {
    protected phone: Phone;

    constructor(phone: Phone) {
        this.phone = phone;
    }

    /**** Every state must implement these behaviors ****/
    public abstract onHome(): string;

    public abstract onOffOn(): string;
}