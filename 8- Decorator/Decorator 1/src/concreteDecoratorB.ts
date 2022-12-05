import Decorator from "./decorator";

class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

export default ConcreteDecoratorB;