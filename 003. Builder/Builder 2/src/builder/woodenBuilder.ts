import IHouse from "../house/house.interface";
import House from "../house/house.model";
import IBuilder from "./builder.interface";

class WoodenHouseBuilder implements IBuilder {
    private house: IHouse;

    constructor() {
        this.house = new House();
    }

    buildBasement(): void {
        this.house.setBasement("Wooden Poles");
    }

    buildStructure(): void {
        this.house.setStructure("Wood");
    }

    buildRoof(): void {
        this.house.setRoof("Wood and leafs");
    }

    buildInterior(): void {
        this.house.setInterior("Wooden");
    }

    getHouse(): IHouse {    
        return this.house;
    }
}

export default WoodenHouseBuilder;