import Broker from "../models/broker/broker.abstract";
import IMediator from "./mediator.interface";
import Stock from "../models/stock.model";
import chalk from "chalk";

class StockMediator implements IMediator {
    private brokers: Broker[] = [];
    private buyOffers: Stock[] = [];
    private saleOffers: Stock[] = [];
    private brokerCodes = 1000;

    constructor() { }

    notifySaleOffer(stockSymbol: string, shares: number, brokerCode: number): void {
        // Check if there are any buy offers for this stock
        // If there are, remove the first one from the list and notify the broker
        for(let i = 0; i < this.buyOffers.length; i++) {
            if(this.buyOffers[i].getStockSymbol() === stockSymbol && this.buyOffers[i].getStockShares() === shares) {
                this.buyOffers.splice(i, 1);
                return console.log(chalk.green(`${shares} of ${stockSymbol} sold by broker ${brokerCode}`));
            }
        }

        // If there are no buy offers, add the sale offer to the list
        this.saleOffers.push(new Stock(stockSymbol, shares, brokerCode));
        console.log(chalk.red(`${shares} of ${stockSymbol} added to order book by ${brokerCode}`));
    }

    notifyBuyOffer(stockSymbol: string, shares: number, brokerCode: number): void {
        // Check if there are any sale offers for this stock
        // If there are, remove the first one from the list and notify the broker 
        for(let i = 0; i < this.saleOffers.length; i++) {
            if(this.saleOffers[i].getStockSymbol() === stockSymbol && this.saleOffers[i].getStockShares() === shares) {
                this.saleOffers.splice(i, 1);
                return console.log(chalk.green(`${shares} of ${stockSymbol} bought by broker ${brokerCode}`));
            }
        }

        // If there are no sale offers, add the buy offer to the list
        this.buyOffers.push(new Stock(stockSymbol, shares, brokerCode));
        console.log(chalk.green(`${shares} of ${stockSymbol} buy order added to the order book by ${brokerCode}`));
    }

    addBroker(broker: Broker): void {
        this.brokers.push(broker);
        this.brokerCodes++;
        broker.setBrokerCode(this.brokerCodes);
    }

    getStockOfferings(): void {
        console.log(chalk.red(`------ Stocks for Sale ------`));
        for(let i = 0; i < this.saleOffers.length; i++) {
            console.log(chalk.red(`${this.saleOffers[i].getStockShares()} of ${this.saleOffers[i].getStockSymbol()}`));
        }

        console.log(chalk.green(`------ Stocks Buy Offers ------`));
        for(let i = 0; i < this.buyOffers.length; i++) {
            console.log(chalk.green(`${this.buyOffers[i].getStockShares()} of ${this.buyOffers[i].getStockSymbol()}`));
        }
    }
}

export default StockMediator;