import { ConcreteProduct2 } from "./ConcreteProducts";
import Creator from "./Creator";
import IProduct from "./IProduct";

class ConcreteCreator2 extends Creator {
    public factoryMethod(): IProduct {
        return new ConcreteProduct2();
    }
}

export default ConcreteCreator2;