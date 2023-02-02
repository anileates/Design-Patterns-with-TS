import CreditCard from "../creditCard";
import IPaymentStrategy from "./strategy.interface";

export default class CreditCardPayment implements IPaymentStrategy {
    private card: CreditCard;

    public collectPaymentDetails(): void {
        // Pop-up to collect credit card details...
        this.card = new CreditCard("John Smith", "1234567890123456", "123", "12/25");

        console.log("Collecting Credit Card Details...");
    }

    public validatePaymentDetails(): boolean {
        // Validate card details...
        console.log("Validating Credit Card Info:", this.card.ownerName, this.card.cardNumber, this.card.cvv, this.card.dateOfExpiry);
        return true;
    }

    public pay(amount: number): void {
        console.log("Paying $" + amount + " using Credit Card");
        this.card.balance = this.card.balance - amount;
    }
}