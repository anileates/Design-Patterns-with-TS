import { Event } from "./event.enum";
import IStockObserver from "./stockObserver.interface";

export default abstract class EventPublisher {
    private subscribers: IStockObserver[] = [];
    constructor() { }

    addSubscriber(subscriber: IStockObserver) {
        this.subscribers.push(subscriber);
    }

    removeSubscriber(subscriber: IStockObserver) {
        const index = this.subscribers.indexOf(subscriber);
        if (index > -1) {
            this.subscribers.splice(index, 1);
        }
    }

    notifySubscribers(eventType: Event, data: string) {
        this.subscribers.forEach(subscriber => {
            subscriber.update(eventType, data);
        });
    }
}
