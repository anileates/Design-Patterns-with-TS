import { Event } from "./event.enum";
import EventPublisher from "./eventPublisher.abstract";

class Broker extends EventPublisher {
    constructor() {
        super();
    }

    setStockPrice(symbol: string, price: number) {
        console.log(`Setting ${symbol} price to ${price} and notifying subscribers`)
        this.notifySubscribers(Event.SET_PRICE, `${symbol} - ${price}`);
    }

    buyStock(symbol: string, quantity: number) {
        console.log(`Buying ${symbol} quantity ${quantity} and notifying subscribers`)
        this.notifySubscribers(Event.BUY, `${symbol} - ${quantity}`);
    }

    sellStock(symbol: string, quantity: number) {
        console.log(`Selling ${symbol} quantity ${quantity} and notifying subscribers`)
        this.notifySubscribers(Event.SELL, `${symbol} - ${quantity}`);
    }
}

export default Broker;