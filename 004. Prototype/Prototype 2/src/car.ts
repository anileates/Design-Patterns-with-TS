import Prototype from "./prototype.interface";
import Vehicle from "./vehicle.interface";

class Car extends Vehicle {
    constructor(brand: String, model: String, color: String, private topSpeed: number) {
        super(brand, model, color);
    }

    // Abstract method implementation
    clone(): Car {
        return new Car(this.brand, this.model, this.color, this.topSpeed);
    }

    get getTopSpeed(): number {
        return this.topSpeed;
    }

    set setTopSpeed(topSpeed: number) {
        this.topSpeed = topSpeed;
    }
}

export default Car;