import Broker from "../models/broker/broker.abstract"

export default interface IMediator {
    notifySaleOffer(stockSymbol: string, shares: number, brokerCode: number): void

    notifyBuyOffer(stockSymbol: string, shares: number, brokerCode: number): void

    addBroker(colleague: Broker): void

    getStockOfferings(): void
}