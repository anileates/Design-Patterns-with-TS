import ICar from "../interface/Car.interface";

class BMW implements ICar {
    constructor() { }

    startEngine(): void {
        console.log("Engine started");
    }

    // This car displays speed in KMH by default
    getSpeed(): number {
        return 300; // KMH
    }
}

export default BMW;