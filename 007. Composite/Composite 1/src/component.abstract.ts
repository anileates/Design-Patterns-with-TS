abstract class Component {
    protected parent!: Component | null;

    // Set the parent of the component object
    public setParent(parent: Component | null) { 
        this.parent = parent;
    }

    public getParent(): Component | null {
        return this.parent;
    }

    public add(component: Component): void { } // Add a leaf into the composite object

    public remove(component: Component): void { }

    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): string;
}

export default Component;