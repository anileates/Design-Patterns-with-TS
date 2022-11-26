/**
 * Suppose that we want to add Google Drive to our app.
 * And this is the native Google Drive API.
 */

import MyFile from "./myFile";

class GoogleDrive {
    // And lets say Google streams files in `pdf` format
    download(fileName: string): MyFile {
        return new MyFile(fileName, 'pdf');
    }
}

export default GoogleDrive;