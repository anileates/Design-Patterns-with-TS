import FacebookNotifier from "./facebookNotifier";
import Notifier from "./notifier.model";
import WhatsappNotifier from "./whatsappNotifier";

class Main {
    public static main(): void {
        /**
         * ! The decorator pattern is useful when you want to add more features/options to an existing class
         * * Keep the default behavior of the notifier and add more options without breaking the existing code.
         */
        const whatsappNotifier = new WhatsappNotifier(new Notifier());
        const facebookNotifier = new FacebookNotifier(new Notifier());
        const whatsAppAndFacebookNotifier = new WhatsappNotifier(new FacebookNotifier(new Notifier()));

        console.log('------- Add WhatsApp Notification -------')
        whatsappNotifier.sendNotification('Anil', "That's an emergency!");
        console.log(whatsappNotifier.getLastNotificationLog())
        
        console.log('------- Add Facebook Notification -------')
        facebookNotifier.sendNotification('Anil', "Another notification!");
        console.log(facebookNotifier.getLastNotificationLog())
        
        console.log('------- Add Facebook & WhatsApp Notification -------')
        whatsAppAndFacebookNotifier.sendNotification('Anil', "notification!");
        console.log(whatsAppAndFacebookNotifier.getLastNotificationLog())
    }
}

Main.main()