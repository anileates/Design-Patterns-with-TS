import Phone from "./phone.model";

class Main {
    public static main() {
        let phone = new Phone();
        this.clickButtons(phone);
    }

    public static clickButtons(phone: Phone) {
        console.log(phone.clickPower());
        console.log(phone.clickPower());
        console.log(phone.clickHome());
        console.log(phone.clickHome());
        console.log(phone.clickHome());
        console.log(phone.clickPower());
        console.log(phone.clickPower());
        console.log(phone.clickHome());
    }
}

Main.main()