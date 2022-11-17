import IBankAccount from "../interface/bankAccount.interface";

class CheckingAccount implements IBankAccount {
    validateUserIdentity(): boolean {
        return true;
    }
    registerAccount(): boolean {
        return true;
    }
    calculateInterest(): number {
        return 0.01;
    }
}

export default CheckingAccount;