import ICar from "../interface/Car.interface";

class Mustang implements ICar {
    constructor() { }

    startEngine(): void {
        console.log("Engine started");
    }

    // This car displays speed in MPH by default
    getSpeed(): number {
        return 250; // MPH
    }
}

export default Mustang;