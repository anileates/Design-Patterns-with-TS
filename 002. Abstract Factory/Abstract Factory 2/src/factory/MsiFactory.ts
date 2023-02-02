import IGPU from "../product/gpu/gpu.interface";
import MsiGPU from "../product/gpu/MsiGPU";
import IMonitor from "../product/monitor/monitor.interface";
import MsiMonitor from "../product/monitor/MsiMonitor";
import IFactory from "./factory.interface";

class MsiFactory implements IFactory {
    constructor(){}

    createGPU(): IGPU {
        console.log('Msi GPU created');
        return new MsiGPU();
    }

    createMonitor(): IMonitor {
        console.log('Msi monitor created');
        return new MsiMonitor();
    }
}

export default MsiFactory;