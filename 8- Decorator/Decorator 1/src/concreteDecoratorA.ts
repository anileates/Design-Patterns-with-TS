import Decorator from "./decorator";

class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

export default ConcreteDecoratorA;