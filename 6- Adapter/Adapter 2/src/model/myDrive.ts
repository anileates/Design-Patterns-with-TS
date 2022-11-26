import IDrive from "../interface/drive.interface";
import File from "./myFile";

class MyOwnDrive implements IDrive {
    // Our drive streams files in `xpdf` format.
    download(fileName: string): File {
        return new File(fileName, "xpdf")
    }
}

export default MyOwnDrive;