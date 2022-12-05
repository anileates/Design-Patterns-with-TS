import IComponent from "./component.interface";

class ConcreteComponent implements IComponent {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

export default ConcreteComponent;