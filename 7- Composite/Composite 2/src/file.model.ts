import IPath from "./file.interface";

class File implements IPath {
    constructor(public fileName: string, public fileType: string, private fileSize: number) { }

    set setFileSize(fileSize: number) {
        this.fileSize = fileSize;
    }

    getSize(): number {
        return this.fileSize;
    }
}

export default File;