import Car from "./car";

interface Prototype {
    clone(): Car;
}

export default Prototype;