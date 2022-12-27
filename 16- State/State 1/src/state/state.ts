import Phone from "../phone.model";

export default abstract class State {
    protected phone: Phone;

    constructor(phone: Phone) {
        this.phone = phone;
    }

    public abstract onHome(): string;

    public abstract onOffOn(): string;
}