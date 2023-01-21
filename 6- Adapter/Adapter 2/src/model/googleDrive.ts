/**
 * Suppose that we want to add Google Drive to our app.
 * And this is the native Google Drive API.
 */

import IGoogleDrive from "../interface/googleDrive.interface";
import MyFile from "./myFile";

class GoogleDrive implements IGoogleDrive {
    // And lets say Google streams files in `pdf` format
    downloadFromGoogleDrive(fileName: string): MyFile {
        return new MyFile(fileName, 'pdf');
    }
}

export default GoogleDrive;