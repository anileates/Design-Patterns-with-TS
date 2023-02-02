import IBankAccount from "../interface/bankAccount.interface";
import PersonalAccount from "../model/personalAccount.model";
import BusinessAccount from "../model/businessAccount.model";
import CheckingAccount from "../model/checkingAccount.model";

class BankAccountFactory {
    createBankAccount(type: string): IBankAccount {
        switch (type) {
            case "P":
                return new PersonalAccount();
            case "B":
                return new BusinessAccount();
            case "C":
                return new CheckingAccount();
            default:
                throw new Error("Invalid account type");
        }
    }
}

export default BankAccountFactory;