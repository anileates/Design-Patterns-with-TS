import IVehicle from "./vehicle.interface";

class Boat implements IVehicle {
    typeOfVehicle: string;

    constructor(public color: string) {
        this.typeOfVehicle = "Boat";
        console.log("A new boat has been created");
    }

    getColor(): string {
        return this.color;
    }
    
    getTypeOfVehicle(): string {
        return this.typeOfVehicle;
    }
}

export default Boat;