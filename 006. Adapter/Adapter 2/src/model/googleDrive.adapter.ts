import IDrive from "../interface/drive.interface";
import MyFile from "./myFile";
import GoogleDrive from "./googleDrive";

class GoogleDriveAdapter implements IDrive {
    constructor(private googleDrive: GoogleDrive) {}

    /**
     * Adapter method name is same as the method name in the our own drive method.
     * downloadFromGoogleDrive() to download()
     */
    download(name: string): MyFile {
        /**
         * Here we can do some logic to adapt the Google Drive API to our app.
         * In our case, we will download the file from Google Drive and convert it to .xpdf format.
         */
        
        let file = this.googleDrive.downloadFromGoogleDrive(name);
        
        return this.convertFileToXpdf(file);
    }

    convertFileToXpdf(file: MyFile): MyFile {
        // Convert file to .xpdf format
        let newFile = file;
        newFile.format = "xpdf";
        return newFile;
    }
}

export default GoogleDriveAdapter;