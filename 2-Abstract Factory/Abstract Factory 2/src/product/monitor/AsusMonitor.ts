import IMonitor from "./monitor.interface";

class AsusMonitor implements IMonitor {
    displayView(): void {
        console.log('Asus monitor view is displayed');
    }
}

export default AsusMonitor;