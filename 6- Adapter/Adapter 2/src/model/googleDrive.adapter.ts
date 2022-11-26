import IDrive from "../interface/drive.interface";
import MyFile from "./myFile";
import GoogleDrive from "./googleDrive";

class GoogleDriveAdapter implements IDrive {
    constructor(private googleDrive: GoogleDrive) {}

    download(name: string): MyFile {
        /**
         * Here we can do some logic to adapt the Google Drive API to our app.
         * For example, we can download the file from Google Drive and convert the it to .xpdf format.
         */
        
        let file = this.googleDrive.download(name);
        
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