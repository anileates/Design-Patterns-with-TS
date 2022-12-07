import { DBService, User} from "../dbService";
import BaseHandler from "./baseHandler.abstract";
const chalk = require('chalk');

class PasswordValidationHandler extends BaseHandler {

    constructor(private dbService: DBService) {
        super();
    }

    public handle(username: string, password: string): boolean {
        const user = this.dbService.getUserByUsername(username);

        if(user !== null && user.password !== password) {
            console.log(chalk.red("Password is not correct for user " + user.username.toUpperCase() + " with id: " + user.id));
            return false;
        }

        return this.handleNext(username, password);
    }
}

export default PasswordValidationHandler;