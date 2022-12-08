import VehicleFactory from "./vehicle.factory";
import IVehicle from "./model/Vehicle/vehicle.interface";
import VehicleType from "./model/Vehicle/vehicleType.enum";

class Main {
    public static main(): void {
        let car: IVehicle = VehicleFactory.getVehicle(VehicleType.CAR, "Red");
        console.log(car.getColor())

        let boat: IVehicle = VehicleFactory.getVehicle(VehicleType.BOAT, "Blue");
        console.log(boat.getColor())

        let airplane: IVehicle = VehicleFactory.getVehicle(VehicleType.AIRPLANE, "Green");
        console.log(airplane.getColor())
    }
}

Main.main();