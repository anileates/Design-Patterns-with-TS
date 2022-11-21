import IVehicle from "./vehicle.interface";

class Airplane implements IVehicle {
    typeOfVehicle: string;

    constructor(public color: string) {
        this.typeOfVehicle = "Airplane";
        console.log("A new airplane has been created");
    }

    getColor(): string {
        return this.color;
    }
    
    getTypeOfVehicle(): string {
        return this.typeOfVehicle;
    }
}

export default Airplane;