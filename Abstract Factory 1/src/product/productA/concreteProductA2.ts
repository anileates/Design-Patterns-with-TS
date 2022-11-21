import AbstractProductA from "./abstractProductA.interface";

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A2.';
    }
}

export default ConcreteProductA2;