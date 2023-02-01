import Broker from "./models/broker/broker.abstract";
import Broker1 from "./models/broker/broker1"
import Broker2 from "./models/broker/broker2"
import IMediator from "./mediator/mediator.interface";
import StockMediator from "./mediator/stockMediator";

class Main {
    public static main(): void {
        let nyse: IMediator = new StockMediator();

        let broker1: Broker = new Broker1(nyse);
        let broker2: Broker = new Broker2(nyse);

        console.log('\n')
        broker1.saleOffer("MSFT", 100);
        broker1.saleOffer("GOOG", 50);

        console.log('\n')
        broker2.buyOffer("MSFT", 100);
        broker2.buyOffer("GOOG", 20);
        broker2.saleOffer("NRG", 10);

        console.log('\n')
        broker1.buyOffer("NRG", 10);

        console.log('\n')
        console.log('\n')
        nyse.getStockOfferings();

    }
}

Main.main();