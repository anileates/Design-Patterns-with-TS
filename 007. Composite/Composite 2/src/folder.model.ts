import IPath from "./path.interface";

class Folder implements IPath {
    // A folder may have files or other folders.
    private files: IPath[] = [];

    constructor(public folderName: string) { }

    addFile(file: IPath): void {
        this.files.push(file);
    }

    removeFile(file: IPath): void {
        const index = this.files.indexOf(file);
        this.files.splice(index, 1);
    }

    getFiles(): IPath[] {
        return this.files;
    }

    // ! Implement from the interface. Iterate over the children files and get the size of each file.
    getSize(): number {
        let size = 0;
        this.files.forEach(file => {
            size += file.getSize();
        });
        
        return size;
    }
}

export default Folder;