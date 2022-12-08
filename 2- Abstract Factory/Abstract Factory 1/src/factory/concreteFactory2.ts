import AbstractProductA from "../product/productA/abstractProductA.interface";
import ConcreteProductA2 from "../product/productA/concreteProductA2";
import AbstractProductB from "../product/productB/abstractProductB.interface";
import ConcreteProductB2 from "../product/productB/concreteProductB2";
import AbstractFactory from "./abstractFactory.interface";

/**
 * Each Concrete Factory has a corresponding product variant.
 */
class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

export default ConcreteFactory2;