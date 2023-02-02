import IChatMediator from "./chatMediator.interface";
import IUser from "./user.interface";

class User implements IUser {
    /**
     * @param chatMediator is the mediator in our case. Components should store a reference to the mediator. Component => Mediator => Components
     */
    constructor(protected chatMediator: IChatMediator, protected name: string) {}

    public send(message: string): void {
        console.log(`${this.name} sends message: ${message}`)

        this.chatMediator.sendMessage(message, this)
    }

    public receive(message: string): void {
        console.log(`${this.name} received message: ${message}`)
    }
}

export default User;