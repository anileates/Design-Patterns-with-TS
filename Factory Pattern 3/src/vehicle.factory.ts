import Boat from "./model/Vehicle/boat.model";
import Car from "./model/Vehicle/car.model";
import IVehicle from "./model/Vehicle/vehicle.interface";
import VehicleType from "./model/Vehicle/vehicleType.enum";

class VehicleFactory {
    public static getVehicle(vehicleType: string, color: string): IVehicle {
        switch (vehicleType) {
            case VehicleType.AIRPLANE:
                return new Car(color);
            case VehicleType.BOAT:
                return new Boat(color);
            case VehicleType.CAR:
                return new Car(color);
            default:
                throw new Error("Vehicle type not supported");
        }
    }
}

export default VehicleFactory;