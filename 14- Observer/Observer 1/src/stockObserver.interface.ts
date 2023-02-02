import { Event } from "./event.enum";

/**
 * Every client that wants to subscribe to the event publisher must implement this interface.
 * This interface has a single method called update which is called by the publisher when an event is triggered.
 */
export default interface IStockObserver {
    update(eventType: Event, data: string): void;
}