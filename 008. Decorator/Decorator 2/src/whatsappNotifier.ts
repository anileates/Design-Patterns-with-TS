import BaseNotifierDecorator from "./baseNotifierDecorator";
import INotifier from "./notifier.interface";

class WhatsappNotifier extends BaseNotifierDecorator {

    constructor(wrapped: INotifier) {
        super(wrapped);
    }

    sendNotification(username: string, message: string): void {
        super.sendNotification(username, message);
        console.log(`Whatsapp notification has been sent to ${username}`);
    }
}

export default WhatsappNotifier;