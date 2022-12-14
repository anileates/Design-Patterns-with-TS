import IChatMediator from "./chatMediator.interface";

interface IUser {
    send(message: string): void;

    receive(message: string): void;
}

export default IUser;