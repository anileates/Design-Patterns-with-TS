import BaseHandler from "./baseHandler.abstract";
import chalk from "chalk";
import { DBService } from "../dbService";

class RoleCheckHandler extends BaseHandler {
    private allowedRoles = ["root", "admin"];

    constructor(private dbService: DBService) {
        super();
    }

    // If the user role is allowed, the handler will return true.
    public handle(username: string, password: string): boolean {
        const user = this.dbService.getUserByUsername(username);
        if(user !== null && this.allowedRoles.includes(user.role)) {
            console.log(chalk.green("User role is allowed for user " + username.toUpperCase()));
            return this.handleNext(username, password);
        }

        console.log(chalk.red("User role is not allowed for user " + username.toUpperCase()));
        return false;
    }
}

export default RoleCheckHandler;