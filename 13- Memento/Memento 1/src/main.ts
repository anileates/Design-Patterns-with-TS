import Editor from "./editor";

class Main {
    public static main(): void {
        const editor = new Editor();
        editor.write('First');
        editor.write('Second');
        editor.write('Third');

        editor.undo();
        editor.undo();
        editor.undo();
        editor.undo();
    }
}

Main.main();