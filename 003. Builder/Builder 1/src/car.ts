export default class Car {
    private brand: String;
    private engine: String;
    private seats: number;
    private color: String;

    constructor() { }

    get getBrand(): String {
        return this.brand;
    }

    set setBrand(brand: String) {
        this.brand = brand;
    }

    get getEngine(): String {      
        return this.engine;
    }

    set setEngine(engine: String) {     
        this.engine = engine;
    }

    get getSeats(): number {    
        return this.seats;
    }

    set setSeats(seats: number) {    
        this.seats = seats;
    }

    get getColor(): String {     
        return this.color;
    }

    set setColor(color: String) {     
        this.color = color;
    }
}