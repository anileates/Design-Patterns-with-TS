import Broker from "./broker";
import EmailSender from "./emailSender";

class Main {
    public static main(): void {

        let emailSender = new EmailSender(); // EmailSender is a event subscriber
        let broker: Broker = new Broker(); // Broker is a event publisher

        broker.addSubscriber(emailSender); // register the subscriber to the publisher
        broker.setStockPrice("AAPL", 132.35)

    }
}

Main.main();