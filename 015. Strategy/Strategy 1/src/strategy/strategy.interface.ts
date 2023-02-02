export default interface IPaymentStrategy {
    collectPaymentDetails(): void;

    validatePaymentDetails(): boolean;

    pay(amount: number): void;
}