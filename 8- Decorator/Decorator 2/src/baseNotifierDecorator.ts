import INotifier from "./notifier.interface";

abstract class BaseNotifierDecorator implements INotifier {

    constructor(private notifier: INotifier) {}

    sendNotification(username: string, message: string): void {
        this.notifier.sendNotification(username, message); 
    }

    // ! Override the interface method
    getLastNotificationLog(): Object {
        return this.notifier.getLastNotificationLog();
    }
}

export default BaseNotifierDecorator;