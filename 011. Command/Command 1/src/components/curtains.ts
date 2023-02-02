class Curtains {
    private open: boolean = false;

    public openClose() {
        this.open = !this.open
    }

    public isOpen() {
        return this.open
    }
}

export default Curtains;