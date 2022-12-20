import { Event } from "./event.enum";

export default interface IStockObserver {
    update(eventType: Event, data: string): void;
}