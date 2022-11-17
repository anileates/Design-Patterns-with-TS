import IBankAccount from "../interface/bankAccount.interface";

class BusinessAccount implements IBankAccount {
    validateUserIdentity(): boolean {
        return true;
    }
    registerAccount(): boolean {
        return true;
    }
    calculateInterest(): number {
        return 0.03;
    }
}

export default BusinessAccount;