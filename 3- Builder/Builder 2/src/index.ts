import WoodenHouseBuilder from "./builder/woodenBuilder";

class Main {
    public static main(): void {
        let woodenHouseBuilder = new WoodenHouseBuilder();
        woodenHouseBuilder.buildBasement();
        woodenHouseBuilder.buildStructure()
        woodenHouseBuilder.buildRoof();
        woodenHouseBuilder.buildInterior();
        let woodenHouse = woodenHouseBuilder.getHouse();
        console.log(woodenHouse)


        let iglooHouseBuilder = new WoodenHouseBuilder();
        iglooHouseBuilder.buildBasement();
        iglooHouseBuilder.buildStructure()
        iglooHouseBuilder.buildRoof();
        iglooHouseBuilder.buildInterior();
        let iglooHouse = iglooHouseBuilder.getHouse();
        console.log(iglooHouse)

    }
}

Main.main();