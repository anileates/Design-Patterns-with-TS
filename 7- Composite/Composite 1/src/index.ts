import Composite from "./composite";
import Leaf from "./leaf";

class Main {
    public static main(): void {
        const tree = new Composite();
        const branch1 = new Composite();
        
        const branch1_1 = new Composite();
        branch1_1.add(new Leaf());
        branch1_1.add(new Leaf());
        
        branch1.add(branch1_1);
        branch1.add(new Leaf());

        const branch2 = new Composite();
        branch2.add(new Leaf());
        branch2.add(new Leaf());

        tree.add(branch1);
        tree.add(branch2);

        console.log('--- Result ---')
        console.log(tree.operation());
        console.log('')
    }
}

Main.main();