import IHouse from "../house/house.interface";
import House from "../house/house.model";
import IBuilder from "./builder.interface";

class IglooHouseBuilder implements IBuilder {
    /**
     * Remember we have not initialized the houses before. 
     * So we need to initialize the house here. 
     */
    private house: IHouse;

    constructor() {
        this.house = new House();
    }

    buildBasement(): void {
        this.house.setBasement("Ice Bars");
    }

    buildStructure(): void {
        this.house.setStructure("Ice Blocks");
    }

    buildRoof(): void {
        this.house.setRoof("Ice Dome");
    }

    buildInterior(): void {
        this.house.setInterior("Ice Carvings");
    }

    getHouse(): IHouse {
        return this.house;
    }
}

export default IglooHouseBuilder;