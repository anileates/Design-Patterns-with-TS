import { ConcreteProduct1 } from "./ConcreteProducts";
import Creator from "./Creator";
import IProduct from "./IProduct";

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class ConcreteCreator1 extends Creator {
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public factoryMethod(): IProduct {
        return new ConcreteProduct1();
    }
}

export default ConcreteCreator1