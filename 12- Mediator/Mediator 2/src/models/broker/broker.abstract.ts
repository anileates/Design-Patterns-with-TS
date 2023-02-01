import IMediator from "../../mediator/mediator.interface";

abstract class Broker {
    private _mediator: IMediator; // Reference to the Mediator
    private _brokerCode: number;

    constructor(mediator: IMediator) {
        this._mediator = mediator;
        this._mediator.addBroker(this);
    }

    public setBrokerCode(brokerCode: number) {
        this._brokerCode = brokerCode;
    }

    /**
     * Every broker can put sale or buy offers in the market. And brokers do it through the mediator.
     */
    saleOffer(stockSymbol: string, shares: number): void {
        this._mediator.notifySaleOffer(stockSymbol, shares, this._brokerCode);
    }

    buyOffer(stockSymbol: string, shares: number): void {
        this._mediator.notifyBuyOffer(stockSymbol, shares, this._brokerCode);
    }
}

export default Broker;