import MyFile from "../model/myFile";

export default interface IGoogleDrive {
    /**
     * Notice how the interface of Google Drive is different from our own drive.
     * This is another reason why we need an adapter.
     * You adapt the interface of one class to the interface of another class.
     */
    downloadFromGoogleDrive(fileName: string): MyFile;
}