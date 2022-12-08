import IGPU from "./gpu.interface";

class AsusGPU implements IGPU {
    renderView(): void {
        console.log('Asus GPU works');
    }
}

export default AsusGPU;