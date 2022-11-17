import * as readline from 'readline-sync';
import IBankAccount from './src/interface/bankAccount.interface';
import BankBranch from './Branch';
import BankAccountFactory from './src/bankFactory/BankAccountFactory';

class Main {
    public static main(): void {
        let bankAccount: IBankAccount;

        let type = readline.question("Press 'P' for Personal Account, B for Business Account, C for Checking Account: ");

        let localBankBranch: BankBranch = new BankBranch(new BankAccountFactory());
        bankAccount = localBankBranch.openAccount(type)
    }
}

Main.main();