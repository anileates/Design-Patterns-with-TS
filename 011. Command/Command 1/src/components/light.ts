class Light {
    private switchedOn: boolean = false;

    public switchLights() {
        this.switchedOn = !this.switchedOn
    }

    public isSwitchedOn() {
        return this.switchedOn
    }
}

export default Light;