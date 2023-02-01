import Broker from "./broker.abstract";
import IMediator from "../../mediator/mediator.interface"

class Broker1 extends Broker {
    constructor(mediator: IMediator) {
        super(mediator);

        console.log('Broker1 signed up with the stock exchange')
    }

    buyOffer(stockSymbol: string, shares: number): void {
        console.log('Broker1 requires $0.15 per share for buying ' + stockSymbol + ' shares'); // We can add some logic here
        super.buyOffer(stockSymbol, shares);
    }
}

export default Broker1;