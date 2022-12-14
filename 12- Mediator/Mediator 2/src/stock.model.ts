class Stock {
    constructor(private stockSymbol: string, private shares: number, private brokerCode: number) { }

    public getStockShares(): number {
        return this.shares;
    }

    public getStockSymbol(): string {
        return this.stockSymbol;
    }

    public getBrokerCode(): number {
        return this.brokerCode;
    }
}

export default Stock;
