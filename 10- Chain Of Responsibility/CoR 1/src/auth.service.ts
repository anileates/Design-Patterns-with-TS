import chalk from "chalk";
import BaseHandler from "./handlers/baseHandler.abstract";

class AuthService {
    constructor(private handler: BaseHandler) {}

    public login(username: string, password: string): boolean {
        if(this.handler.handle(username, password)) {
            console.log(chalk.green("Login successful for user " + username.toUpperCase()));
            return true;
        }

        return false;
    }
}

export default AuthService;