import BaseHandler from "./baseHandler.abstract";
import { DBService } from "../dbService";
import chalk from "chalk";

class UserExistsHandler extends BaseHandler {

    constructor(private dbService: DBService) {
        super();
    }

    public handle(username: string, password: string): boolean {
        const user = this.dbService.getUserByUsername(username)
        if (user == null) {
            console.log(chalk.red("User does not exist with username " + username.toUpperCase()));
            return false;
        }

        return this.handleNext(username, password);
    }
}

export default UserExistsHandler;