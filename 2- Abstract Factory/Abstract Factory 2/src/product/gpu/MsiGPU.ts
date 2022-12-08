import IGPU from "./gpu.interface";

class MsiGPU implements IGPU {
    renderView(): void {
        console.log('Msi GPU works');
    }
}

export default MsiGPU;