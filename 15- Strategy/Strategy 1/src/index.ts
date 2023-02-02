import CreditCardPayment from "./strategy/ccPayment";
import PaymentService from "./paymentService";
import PaypalPayment from "./strategy/paypalPayment";

class Main {
    public static main(): void{
        let paymentService = new PaymentService();

        // Let's say user wanted to pay using Credit Card
        paymentService.setStrategy(new CreditCardPayment());
        paymentService.processOrder(100);

        console.log("==========================================");

        // Or pay using Paypal
        paymentService.setStrategy(new PaypalPayment());
        paymentService.processOrder(100);
    }
}

Main.main();