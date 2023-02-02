import Television from "./television";

class TVRemote {
    public static getDevice(): Television {
        return new Television();
    }
}

export default TVRemote;