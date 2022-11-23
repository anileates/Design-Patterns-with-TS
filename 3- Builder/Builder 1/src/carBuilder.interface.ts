import Car from "./car";

export default interface ICarBuilder {
    reset(): void;
    _setBrand(brand: string): ICarBuilder;
    _setEngine(engine: string): ICarBuilder;
    _setSeats(seats: number): ICarBuilder;
    _setColor(color: string): ICarBuilder;
    build(): Car;
}