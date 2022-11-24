import Car from "./car";

class Main {
    public static main() {
        const car = new Car('Ford', 'Fiesta', 'Red', 180);
        const car2 = car.clone();

        console.log(car);
        console.log(car2)
    }
}

Main.main();