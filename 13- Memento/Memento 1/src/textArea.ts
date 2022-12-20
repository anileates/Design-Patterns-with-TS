import Snapshot from "./snapshot";

class TextArea {
    private text: string;

    public setText(text: string): void {
        this.text = text;
    }
    
    public getText(): void {
        console.log('Text in text area: ' + this.text)
    }

    public takeSnapshot(): Snapshot {
        return new Snapshot(this, this.text);
    }

    public restore(snapshot: Snapshot) {
        snapshot.restore();
    }
}

export default TextArea;