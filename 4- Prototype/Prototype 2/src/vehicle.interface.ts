abstract class Vehicle {
    protected brand: String;
    protected model: String;
    protected color: String;

    protected constructor (brand: String, model: String, color: String) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    public abstract clone(): Vehicle;
}

export default Vehicle;