import IHouse from "../house/house.interface";

export default interface IBuilder {
    buildBasement(): void;

    buildStructure(): void;

    buildRoof(): void;

    buildInterior(): void;

    getHouse(): IHouse;
}