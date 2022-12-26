import CreditCardPayment from "./ccPayment";
import PaymentService from "./paymentService";
import PaypalPayment from "./paypalPayment";

class Main {
    public static main(): void{

        let paymentService = new PaymentService();

        paymentService.setStrategy(new CreditCardPayment());
        paymentService.processOrder(100);

        console.log("==========================================");

        // Change the strategy to Paypal
        paymentService.setStrategy(new PaypalPayment());
        paymentService.processOrder(100);
    }
}

Main.main();