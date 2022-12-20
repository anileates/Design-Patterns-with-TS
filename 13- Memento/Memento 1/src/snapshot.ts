import TextArea from "./textArea";

class Snapshot {
    constructor(private textArea: TextArea, private text: string) {
        this.text = text;
    }

    public restore() {
        this.textArea.setText(this.text);
    }
}

export default Snapshot;