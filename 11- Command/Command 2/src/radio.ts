import IElectronicDevice from "./device.interface";

class Radio implements IElectronicDevice {
    private volume: number = 0;

    public turnOn(): void {
        console.log("Radio is on");
    }

    public turnOff(): void {
        console.log("Radio is off");
    }

    public volumeUp(): void {
        this.volume++;
        console.log("Radio volume at: " + this.volume);
    }

    public volumeDown(): void {
        this.volume--;
        console.log("Radio volume at: " + this.volume);
    }
}

export default Radio;