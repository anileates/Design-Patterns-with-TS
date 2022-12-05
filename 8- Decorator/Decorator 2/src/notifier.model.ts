import INotifier from "./notifier.interface";

class Notifier implements INotifier {
    private lastNotificationDetails: Object; 

    constructor() {}

    /**
     * * Our notifier sends email notifications always
     * * This could be different, don't have to send email by default
     */
    sendNotification(username: string, message: string): void {
        this.lastNotificationDetails = {
            username,
            message,
            date: new Date()
        }

        console.log(`Notification has been sent to ${username}`);
    }

    getLastNotificationLog(): Object {
        return this.lastNotificationDetails;
    }
}

export default Notifier;