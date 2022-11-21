import AbstractProductA from "../product/productA/abstractProductA.interface";
import AbstractFactory from "./abstractFactory.interface";
import ConcreteProductA1 from "../product/productA/concreteProductA1";
import ConcreteProductB1 from "../product/productB/concreteProductB1";
import AbstractProductB from "../product/productB/abstractProductB.interface";

/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

export default ConcreteFactory1;