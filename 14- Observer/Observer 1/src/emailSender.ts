import { Event } from "./event.enum";
import IStockObserver from "./stockObserver.interface";

/**
 * This class sends email notifications to the customers when a stocks price changes
 */
class EmailSender implements IStockObserver {
    private customerEmails: string[] = [
        "aea@example.com",
        "anil@demo.com"
    ];

    update(eventType: Event, data: string): void {
        console.log('Email Sender has received an event: ' + eventType)

        if (eventType === Event.SET_PRICE) {
            this.customerEmails.forEach(email => {
                console.log(`Sending email to ${email} about ${data}`);
            });
        }
    }
}

export default EmailSender;