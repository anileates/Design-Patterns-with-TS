import IComponent from "./component.interface";
import ConcreteComponent from "./concreteComponent";
import ConcreteDecoratorA from "./concreteDecoratorA";
import ConcreteDecoratorB from "./concreteDecoratorB";
import Decorator from "./decorator";

class Main {
    public static main(): void {
        const component: IComponent = new ConcreteComponent();

        const decoratorA: Decorator = new ConcreteDecoratorA(component);
        const decoratorB: Decorator = new ConcreteDecoratorB(decoratorA);

        console.log(decoratorB.operation());
    }
}

Main.main();