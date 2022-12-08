import IElectronicDevice from "../device.interface";

class Television implements IElectronicDevice {
    private volume: number = 0;

    public turnOn(): void {
        console.log("TV is on");
    }

    public turnOff(): void {
        console.log("TV is off");
    }

    public volumeUp(): void {
        this.volume++;
        console.log("TV volume at: " + this.volume);
    }

    public volumeDown(): void {
        this.volume--;
        console.log("TV volume at: " + this.volume);
    }
}

export default Television;