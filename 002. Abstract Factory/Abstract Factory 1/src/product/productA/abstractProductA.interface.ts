/**
 * Each distinct product of a product family should have a base interface. All
 * variants of the product must implement this interface.
 */
export default interface AbstractProductA {
    usefulFunctionA(): string;
}