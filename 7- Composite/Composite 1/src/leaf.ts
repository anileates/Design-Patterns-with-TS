import Component from "./component.abstract";

class Leaf extends Component {
    public operation(): string {
        return 'Leaf';
    }
}

export default Leaf;