import chalk from "chalk";
import AuthService from "./auth.service";
import {DBService} from "./dbService";
import BaseHandler from "./handlers/baseHandler.abstract";
import PasswordValidationHandler from "./handlers/passwordValidationHandler";
import RoleCheckHandler from "./handlers/roleCheckHandler";
import UserExistsHandler from "./handlers/userExistsHandler";

class Main {
    public static main(): void {
        const dbService = new DBService();

        let handler: BaseHandler = new UserExistsHandler(dbService);

        handler.setNextHandler(new PasswordValidationHandler(dbService)).setNextHandler(new RoleCheckHandler(dbService));

        let service = new AuthService(handler);

        console.log(chalk.yellow("-------------------"));
        service.login("anil", "12345")

        console.log(chalk.yellow("-------------------"));
        service.login("erdem", "12345")

        console.log(chalk.yellow("-------------------"));
        service.login("aea", "1234")

        console.log(chalk.yellow("-------------------"));
        service.login("a2ea", "1234")
    }
}

Main.main();