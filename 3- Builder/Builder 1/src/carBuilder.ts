import Car from "./car";
import ICarBuilder from "./carBuilder.interface";

class CarBuilder implements ICarBuilder {
    private car: Car;

    constructor() { 
        this.reset();
    }

    public reset(): void {
        this.car = new Car();
    }

    public _setBrand(brand: string): ICarBuilder {
        this.car.setBrand = brand;
        return this;
    }

    public _setEngine(engine: string): ICarBuilder {
        this.car.setEngine = engine;
        return this;
    }

    public _setSeats(seats: number): ICarBuilder {
        this.car.setSeats = seats;
        return this;
    }

    public _setColor(color: string): ICarBuilder{
        this.car.setColor = color;
        return this;
    }

    public build(): Car {
        return this.car;
    }
}

export default CarBuilder;