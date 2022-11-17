import IVehicle from "./vehicle.interface";

class Car implements IVehicle {
    typeOfVehicle: string;

    constructor(public color: string) {
        this.typeOfVehicle = "Car";
        console.log("A new car has been created");
    }

    getColor(): string {
        return this.color;
    }
    
    getTypeOfVehicle(): string {
        return this.typeOfVehicle;
    }
}

export default Car;