import IUser from "./user.interface";

export default interface IChatMediator {
    // Define the desired communication protocol between the components
    sendMessage(message: string, user: IUser): void;

    // Register a new user
    addUser(user: IUser): void;
}