import ICarBuilder from "./carBuilder.interface";

class Director {
    public buildLambo(builder: ICarBuilder): void {
        builder._setBrand("Lamborghini");
        builder._setEngine("V10");
        builder._setSeats(2);
        builder._setColor("Green");
    }

    public buildBMW(builder: ICarBuilder): void {
        builder._setBrand("BMW");
        builder._setEngine("V8");
        builder._setSeats(2);
        builder._setColor("Black");
    }
}

export default Director;