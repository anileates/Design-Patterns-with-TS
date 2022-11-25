import IMPHtoKMHAdapter from "../interface/MPHtoKMHAdapter.interface";

class MPHtoKMHAdapter implements IMPHtoKMHAdapter {
    displaySpeedInKmh(mph: number): void {
        console.log(`Speed in Kmh: ${this.convertSpeedToKmh(mph)}`);
    }

    convertSpeedToKmh(mph: number): number {
        return mph * 1.60934;
    }
}

export default MPHtoKMHAdapter;