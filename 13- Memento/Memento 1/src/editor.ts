import Snapshot from "./snapshot";
import TextArea from "./textArea";

class Editor {

    /**
     * Editor has the history of all the snapshots, not the `textArea`.
     * 
     * `History` could be another seperated class and keep the snapshots of the other components not only the `textArea`.
     * And `History` would decide the logic of the undo/redo actions. For simplicity, we make it plain array in this example.
     */
    private history: Snapshot[] = [];
    private textArea: TextArea = new TextArea();

    constructor() {

    }

    public write(text: string) {
        this.textArea.setText(text);
        this.history.push(this.textArea.takeSnapshot());
        this.textArea.getText();
    }

    public undo() {
        if (this.history.length > 0) {
            this.textArea.restore(this.history.pop()!);
            this.textArea.getText();
        } else console.log('No more undo actions')
    }
}

export default Editor;