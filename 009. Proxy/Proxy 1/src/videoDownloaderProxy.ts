import RealVideoDownloader from "./realDownloader.model";
import IVideoDownloader from "./videoDownloader.interface";
const chalk = require('chalk');

/**
 * ProxyDownloader is a wrapper around RealDownloader. 
 * It checks the download count of a video. And if the video has been downloaded more than 3 times, it caches the video.
 * And returns the video from cache for future requests.
 * 
 * * This is how a proxy works. It acts as a wrapper around the real service. And it adds some additional functionality.
 */
class ProxyVideoDownloader implements IVideoDownloader {
    private realVideoDownlaoder: IVideoDownloader;
    private videoDownloadCount: Map<string, number> = new Map<string, number>();
    private cachedVideos: string[] = [];

    constructor() {
        this.realVideoDownlaoder = new RealVideoDownloader();
        console.log('RealVideoDownloader service is created');
    }

    public getVideo(url: string) {
        // If the requested video was cached before, then return the video from cache
        if (this.cachedVideos.includes(url)) {
            console.log(`${chalk.green('Proxy:')} Getting the video from cache`);
            return;
        }

        console.log(`${chalk.green('Proxy:')} Could not find in the cache. Getting the video from ${url}`);
        this.realVideoDownlaoder.getVideo(url);

        let downloadCount = this.videoDownloadCount.get(url) || 0;
        downloadCount++;
        this.videoDownloadCount.set(url, downloadCount);

        if (downloadCount == 3) {
            console.log(`${chalk.green('Proxy:')} Video has been downloaded 3 times. Caching the video for future use.`);
            this.cachedVideos.push(url);
        }
    }
}

export default ProxyVideoDownloader;