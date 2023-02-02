import IPaymentStrategy from "./strategy.interface";

export default class PaypalPayment implements IPaymentStrategy {
    private email: string;
    private password: string;

    public collectPaymentDetails(): void {
        // Pop-up to collect PayPal mail and password...
        this.email = "aea@example.com";
        this.password = "aea12345";
        console.log("Collecting PayPal Account Details...");
    }

    public validatePaymentDetails(): boolean {
        // Validate account...
        console.log("Validating PayPal Info:", this.email, this.password);
        return true;
    }

    public pay(amount: number): void {
        console.log("Paying $" + amount + " using PayPal");
    }
}