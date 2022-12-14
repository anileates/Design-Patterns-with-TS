import Broker from "./broker.abstract";
import IMediator from "./mediator.interface";

class Broker2 extends Broker {
    constructor(mediator: IMediator) {
        super(mediator);

        console.log('Broker2 signed up with the stock exchange')
    }

    saleOffer(stockSymbol: string, shares: number): void {
        console.log('Requires $0.25 per share for selling ' + stockSymbol + ' shares'); // We can add some logic here
        super.saleOffer(stockSymbol, shares);
    }
}

export default Broker2;