import CarBuilder from "./carBuilder";
import Director from "./director";

class Main {
    public static main(): void {
        const carBuilder: CarBuilder = new CarBuilder();

        /* Build without Director */
        const car = carBuilder._setBrand("BMW")._setSeats(4)._setColor("Red").build();
        console.log(car);

        /* Build with Director */
        carBuilder.reset();
        const director: Director = new Director();

        director.buildBMW(carBuilder);
        const bmw = carBuilder.build();
        console.log(bmw);

        carBuilder.reset();
        director.buildLambo(carBuilder);
        const lambo = carBuilder.build();
        console.log(lambo);
    }
}

Main.main();