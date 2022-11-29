import Component from "./component.abstract";

class Composite extends Component {
    protected children: Component[] = [];

    public add(component: Component): void {
        this.children.push(component); 
        component.setParent(this);
    }

    public remove(component: Component): void {
        const indexOfTheComponent = this.children.indexOf(component)
        this.children.splice(indexOfTheComponent, 1);
        component.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }

    public operation(): string {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }

        return `Branch(${results.join('+')})`;
    }
}

export default Composite;