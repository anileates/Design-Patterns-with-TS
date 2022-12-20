import Snapshot from "./snapshot";
import TextArea from "./textArea";

class Editor {
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
        if(this.history.length > 0) {
            this.textArea.restore(this.history.pop()!);
            this.textArea.getText();
        } else console.log('No more undo actions')
    }
}

export default Editor;