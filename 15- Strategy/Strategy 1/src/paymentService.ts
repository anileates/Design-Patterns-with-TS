import IPaymentStrategy from "./strategy.interface";

export default class PaymentService {
    private cost: number;
    private includeDelivery: boolean = true;
    private paymentStrategy: IPaymentStrategy;

    // So we can change the strategy and use the wished payment method at runtime thanks to polymorphism
    public processOrder(cost: number): void {
        this.cost = cost;
        this.paymentStrategy.collectPaymentDetails();

        if(this.paymentStrategy.validatePaymentDetails()) {
            this.paymentStrategy.pay(this.cost);
        }
    }

    public setStrategy(paymentStrategy: IPaymentStrategy): void {
        this.paymentStrategy = paymentStrategy;
    }

    public getTotalCost(): number {
        return this.includeDelivery ? this.cost + 5 : this.cost;
    }
}