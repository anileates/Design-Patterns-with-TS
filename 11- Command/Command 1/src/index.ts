import SwitchLightsCommand from "./commands/switchLightsCommand";
import ToggleCurtainsCommand from "./commands/toggleCurtains";
import FloorFlamp from "./components/floorLamp";
import Room from "./components/room";

class Main {
    public static main() {
        let room = new Room();
        room.setCommand(new ToggleCurtainsCommand(room.getCurtains()));
        room.executeCommand();
        console.log(room.curtainsOpen())

        console.log('=====================')

        let lamp = new FloorFlamp()
        lamp.setCommand(new SwitchLightsCommand(lamp.getLight()))
        lamp.executeCommand()
        console.log(lamp.isLightOn())
    }
}

Main.main();