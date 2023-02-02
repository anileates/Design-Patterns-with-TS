import IPaymentStrategy from "./strategy/strategy.interface";

export default class PaymentService {
    private cost: number;
    private includeDelivery: boolean = true;
    private paymentStrategy: IPaymentStrategy;

    public processOrder(cost: number): void {
        this.cost = cost;
        this.paymentStrategy.collectPaymentDetails();

        if(this.paymentStrategy.validatePaymentDetails()) {
            this.paymentStrategy.pay(this.cost);
        }
    }

    /**
     * Using this method we can change the strategy at runtime.
     * @param paymentStrategy 
     */
    public setStrategy(paymentStrategy: IPaymentStrategy): void {
        this.paymentStrategy = paymentStrategy;
    }

    public getTotalCost(): number {
        return this.includeDelivery ? this.cost + 5 : this.cost;
    }
}