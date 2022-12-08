import BankAccountFactory from "./src/bankFactory/BankAccountFactory";
import IBankAccount from "./src/interface/bankAccount.interface";

class BankBranch {
    constructor (private factory: BankAccountFactory) {}

    public openAccount(type: string): IBankAccount {
        let bankAccount = this.factory.createBankAccount(type);
        return bankAccount;
    }
}

export default BankBranch;