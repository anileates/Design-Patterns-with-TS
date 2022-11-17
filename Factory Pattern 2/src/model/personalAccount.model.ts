import IBankAccount from "../interface/bankAccount.interface";

class PersonalAccount implements IBankAccount{
    validateUserIdentity(): boolean {
        return true;
    }
    registerAccount(): boolean {
        return true;
    }
    calculateInterest(): number {
        return 0.05;
    }
}

export default PersonalAccount;