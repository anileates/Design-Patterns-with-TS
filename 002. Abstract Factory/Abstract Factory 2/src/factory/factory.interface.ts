import IGPU from "../product/gpu/gpu.interface";
import IMonitor from "../product/monitor/monitor.interface";

interface IFactory {
    createGPU(): IGPU;
    createMonitor(): IMonitor;
}

export default IFactory;