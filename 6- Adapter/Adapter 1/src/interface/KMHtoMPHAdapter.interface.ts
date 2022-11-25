// Speed on the adapter is in MPH
export default interface IKMHtoMPHAdapter {
    displaySpeedInMph(kmh: number): void;
    convertSpeedToMph(kmh: number): number;
}