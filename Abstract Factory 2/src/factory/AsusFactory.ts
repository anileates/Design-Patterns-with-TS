import AsusGPU from "../product/gpu/AsusGPU";
import IGPU from "../product/gpu/gpu.interface";
import AsusMonitor from "../product/monitor/AsusMonitor";
import IMonitor from "../product/monitor/monitor.interface";
import IFactory from "./factory.interface";

class AsusFactory implements IFactory {
    constructor(){}
    
    createGPU(): IGPU {
        console.log('Asus GPU created');
        return new AsusGPU();
    }

    createMonitor(): IMonitor {
        console.log('Asus monitor created');
        return new AsusMonitor();
    }
}

export default AsusFactory;