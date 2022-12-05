import IComponent from "./component.interface";

class Decorator implements IComponent {
    private component: IComponent;

    constructor(component: IComponent) {
        this.component = component;
    }

    public operation(): string {
        const result = this.component.operation();
        return `Decorator(${result})`;
    }
}

export default Decorator;