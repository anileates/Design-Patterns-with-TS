import IMonitor from "./monitor.interface";

class MsiMonitor implements IMonitor {
    displayView(): void {
        console.log('MSI monitor view is displayed');
    }
}

export default MsiMonitor;