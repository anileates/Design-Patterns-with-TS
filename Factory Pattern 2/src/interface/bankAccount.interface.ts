interface IBankAccount {
    validateUserIdentity(): boolean;
    registerAccount(): boolean;
    calculateInterest(): number;
}

export default IBankAccount;