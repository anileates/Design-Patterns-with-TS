import INotifier from "./notifier.interface";

/**
 * * Base Decorator
 * This class is to be extended by all the decorators
 * 
 * ! It implements the same interface as the target notifier class, which is `Notifier` in this case
 * ! and delegates the calls to the target notifier
 */
abstract class BaseNotifierDecorator implements INotifier {

    constructor(private notifier: INotifier) {}

    // Send the call to the target notifier
    sendNotification(username: string, message: string): void {
        this.notifier.sendNotification(username, message); 
    }

    // ! Override the interface method
    getLastNotificationLog(): Object {
        return this.notifier.getLastNotificationLog();
    }
}

export default BaseNotifierDecorator;