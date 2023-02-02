import IDrive from "./interface/drive.interface";
import MyFile from "./model/myFile";
import GoogleDrive from "./model/googleDrive";
import GoogleDriveAdapter from "./model/googleDrive.adapter";
import MyOwnDrive from "./model/myDrive";
import FileEditor from "./model/fileEditor";

class Main {
    public static main() {
        let myDrive: IDrive = new MyOwnDrive();
        const file: MyFile = myDrive.download("File 1");
        
        let googleDrive = new GoogleDrive();
        const filePDF = googleDrive.downloadFromGoogleDrive("File 2");

        let googleDriveAdapter: IDrive = new GoogleDriveAdapter(googleDrive);
        const fileWithAdapter = googleDriveAdapter.download("File 3");
        
        let fileEditor = new FileEditor();
        fileEditor.openFile(file);
        fileEditor.openFile(fileWithAdapter);
        fileEditor.openFile(filePDF); // Can not open file in .pdf format
    }
}

Main.main();