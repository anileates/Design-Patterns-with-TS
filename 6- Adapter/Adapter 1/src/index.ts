import ICar from "./interface/Car.interface";
import Mustang from "./model/Car1";
import BMW from "./model/Car2";
import KMHtoMPHAdapter from "./model/KMHtoMPHAdapter.model";
import MPHtoKMHAdapter from "./model/MphToKmhAdapter.model";

class Main {
    public static main(): void {
        const kmhToMphAdapter = new KMHtoMPHAdapter();
        const mphToKmhAdapter = new MPHtoKMHAdapter();

        let mustang: ICar = new Mustang(); // By default MPH
        let bmw: ICar = new BMW(); // By default KMH

        console.log(mustang.getSpeed());
        mphToKmhAdapter.displaySpeedInKmh(mustang.getSpeed());

        console.log(bmw.getSpeed());
        kmhToMphAdapter.displaySpeedInMph(bmw.getSpeed());
    }
}

Main.main()