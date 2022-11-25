// speed on the adapter is in the KMh
export default interface IMPHtoKMHAdapter {
    displaySpeedInKmh(mph: number): void;
    convertSpeedToKmh(mph: number): number;
}