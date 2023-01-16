import IHouse from "./house.interface";

class House implements IHouse {
    private basement: string;
    private structure: string;
    private roof: string;
    private interior: string;

    setBasement(basement: string): void {
        this.basement = basement;
    }

    setStructure(structure: string): void {
        this.structure = structure;
    }

    setRoof(roof: string): void {
        this.roof = roof;
    }

    setInterior(interior: string): void {
        this.interior = interior;
    }

}

export default House;