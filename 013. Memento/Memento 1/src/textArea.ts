import Snapshot from "./snapshot";

class TextArea {
    private text: string;

    public setText(text: string): void {
        this.text = text;
    }
    
    public getText(): void {
        console.log('Text in text area: ' + this.text)
    }

    /**
     * Here is the key point: We want to take a snapshot of the text area data. But, the data is private.
     * So we need to take the snapshot from the `textArea` object. Not from another object or the client.
     * 
     * This is the reason why we have the `takeSnapshot` method in the `textArea` class.
     */
    public takeSnapshot(): Snapshot {
        return new Snapshot(this, this.text);
    }

    public restore(snapshot: Snapshot) {
        snapshot.restore();
    }
}

export default TextArea;