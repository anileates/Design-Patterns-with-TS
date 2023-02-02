import ChatMediator from "./chatMediator.model";
import User from "./user.model";

class Main {
    public static main(): void {
        let mediator: ChatMediator = new ChatMediator();

        let user1 = new User(mediator, "John");
        let user2 = new User(mediator, "Doe");
        let user3 = new User(mediator, "Jane");

        mediator.addUser(user1);
        mediator.addUser(user2);
        mediator.addUser(user3);

        user1.send("Hi there!");
    }
}

Main.main()