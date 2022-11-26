import MyFile from "../model/myFile";

export default interface IDrive {
    download(authToken: string): MyFile;
}