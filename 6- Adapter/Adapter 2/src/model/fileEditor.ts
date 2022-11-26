import MyFile from "./myFile";

/**
 * A file editor that can open files with `xpdf` format.
 */

class FileEditor {
    openFile(file: MyFile) {
        if(file.format !== 'xpdf' ) {
            return console.log('File Editor: File format is not supported');
        }

        console.log(`File Editor: Opening file ${file.name}`);
    }
}

export default FileEditor;