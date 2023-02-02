import TextArea from "./textArea";

/**
 * This is the memento class. It stores the state of the text area and can restore it later.
 * 
 * All the field releated to the state of the text area is private.
 * Mementos are also immutable. So there is no getters/setters.
 */
class Snapshot {
    constructor(private textArea: TextArea, private text: string) {
        this.text = text;
    }

    /**
     * Memento object can access the context object, `textArea` in this case.
     */
    public restore() {
        this.textArea.setText(this.text);
    }
}

export default Snapshot;