export default class CreditCard {
    // Make these fields public for demo purposes
    public balance: number = 1000;
    public ownerName: string;
    public cardNumber: string;
    public cvv: string;
    public dateOfExpiry: string;

    constructor(ownerName: string, cardNumber: string, cvv: string, dateOfExpiry: string) {
        this.ownerName = ownerName;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.dateOfExpiry = dateOfExpiry;
    }
}