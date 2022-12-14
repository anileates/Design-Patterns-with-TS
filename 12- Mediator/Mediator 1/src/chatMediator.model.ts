import IChatMediator from "./chatMediator.interface";
import IUser from "./user.interface";

class ChatMediator implements IChatMediator {
    private users: IUser[] = [];

    public addUser(user: IUser): void {
        this.users.push(user);
    }

    public sendMessage(message: string, user: IUser): void {
        this.users.forEach(u => {
            if (u !== user) {
                u.receive(message);
            }
        });
    }
}

export default ChatMediator;