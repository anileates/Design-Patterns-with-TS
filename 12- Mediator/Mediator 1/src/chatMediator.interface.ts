import IUser from "./user.interface";

/**
 * A mediator interface defines the communication protocol between the components.
 * Components use this protocol to communicate with each other. They do not communicate directly each other.
 * 
 * So that complex communication between components can be encapsulated in a single place. 
 * And the component, which is `User` in this case, can be reused in different contexts (chat protocols) without any modification.
 */

export default interface IChatMediator {
    /**
     * This method is used to notify the mediator that a message has been sent by a user.
     * Then the mediator can decide how to handle the message and notify other users (or components).
     * 
     * @param message  
     * @param user is the one who sent the message.
     */
    sendMessage(message: string, user: IUser): void;

    /**
     * Consider referencing all the components inside the mediator. This way the mediator can call any component.
     * @param user is the component in our case.
     */
    addUser(user: IUser): void;
}