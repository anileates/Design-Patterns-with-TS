import AsusFactory from "./factory/AsusFactory";
import IFactory from "./factory/factory.interface";
import MsiFactory from "./factory/MsiFactory";
import AsusGPU from "./product/gpu/AsusGPU";
import MsiGPU from "./product/gpu/MsiGPU";
import AsusMonitor from "./product/monitor/AsusMonitor";
import MsiMonitor from "./product/monitor/MsiMonitor";

class Main {
    public static main(): void {
        let msiFactory: IFactory = new MsiFactory();
    
        let msiGpu: MsiGPU = msiFactory.createGPU();
        msiGpu.renderView();

        let msiMonitor: MsiMonitor = msiFactory.createMonitor();
        msiMonitor.displayView();

        console.log('\n-----------------\n');
        console.log('\n-----------------\n');

        let asusFactory: IFactory = new AsusFactory();

        let asusGpu: AsusGPU = asusFactory.createGPU();
        asusGpu.renderView();

        let asusMonitor: AsusMonitor = asusFactory.createMonitor();
        asusMonitor.displayView();
    }
}

Main.main();