import IKMHtoMPHAdapter from "../interface/KMHtoMPHAdapter.interface";

class KMHtoMPHAdapter implements IKMHtoMPHAdapter {
    displaySpeedInMph(kmh: number): void {
        console.log(`Speed in MPH: ${this.convertSpeedToMph(kmh)}`);
    }

    convertSpeedToMph(kmh: number): number {
        return kmh * 0.621371;
    }
}

export default  KMHtoMPHAdapter;