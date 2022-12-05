import FacebookNotifier from "./facebookNotifier";
import Notifier from "./notifier.model";
import WhatsappNotifier from "./whatsappNotifier";

class Main {
    public static main(): void {
        const notifier = new FacebookNotifier(new WhatsappNotifier(new Notifier()));

        notifier.sendNotification('Anil', "That's an emergency!");
        console.log(notifier.getLastNotificationLog())
        
        notifier.sendNotification('Anil', "Another notification!");
        console.log(notifier.getLastNotificationLog())
    }
}

Main.main()