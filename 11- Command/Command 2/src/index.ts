import TurnOffCommand from "./commands/turnOff.command";
import TurnOnCommand from "./commands/turnOn.command";
import TurnVolumeUpCommand from "./commands/turnVolumeUp.command";
import DeviceButton from "./deviceButton";
import Radio from "./radio";
import TVRemote from "./tv/tvRemote";

class Main {
    public static main() {
        // Get the TV device to use
        let television = TVRemote.getDevice();

        // `TurnTVon` class contains the command to turn on the TV
        let turnTvOnCommand = new TurnOnCommand(television);

        // We created the command and now pass it to the invoker, which is the DeviceButton in our case.
        // Device Button gonna send the command to the receiver, which is the TV in our case.
        let turnOnButton = new DeviceButton(turnTvOnCommand);

        // Press the button
        turnOnButton.press();

        // `TurnTVoff` class contains the command to turn off the TV
        let turnTvOffCommand = new TurnOffCommand(television);

        // We created the command and now pass it to the invoker, which is the DeviceButton in our case.
        let turnOffButton = new DeviceButton(turnTvOffCommand);

        // Press the button
        turnOffButton.press();

        // ------------------------------

        new DeviceButton(new TurnVolumeUpCommand(television)).press();

        // ------------------------------
        // Since we made it through `IElectronicDevice` interface, we can use the same commands for other devices.
        new DeviceButton(new TurnOnCommand(new Radio())).press();
    }
}

Main.main();