class Singleton {
    private static instance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someExtraBusinessLogic() {
        console.log('I am doing some extra business logic');
    }
}

export default Singleton;