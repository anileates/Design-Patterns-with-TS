import Singleton from "./singleton";

class Main {
    public static main(): void {
        const singleton = Singleton.getInstance();
        const anotherSingleton = Singleton.getInstance();

        if (singleton === anotherSingleton) {
            console.log('Singleton works, both variables contain the same instance.');
        } else {
            console.log('Singleton failed, variables contain different instances.');
        }

        singleton.someExtraBusinessLogic();
    }
}

Main.main();