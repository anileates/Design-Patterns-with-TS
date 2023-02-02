import IVideoDownloader from "./videoDownloader.interface";
const chalk = require('chalk');

class RealVideoDownloader implements IVideoDownloader {
    public getVideo(url: string) {
        console.log(`${chalk.red('Real:')} Downloading the video from ${url}`);
    }
}

export default RealVideoDownloader;