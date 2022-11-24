import Prototype from "./prototype";

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

export default ComponentWithBackReference;