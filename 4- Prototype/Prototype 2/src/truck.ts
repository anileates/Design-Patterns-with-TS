import Prototype from "./prototype.interface";
import Vehicle from "./vehicle.interface";

class Truck extends Vehicle {
    constructor(brand: String, model: String, color: String, private topSpeed: number) {
        super(brand, model, color);
    }

    // Abstract method implementation
    clone(): Truck {
        return new Truck(this.brand, this.model, this.color, this.topSpeed);
    }
}

export default Truck;