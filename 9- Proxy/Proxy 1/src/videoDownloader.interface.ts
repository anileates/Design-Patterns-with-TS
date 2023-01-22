/**
 * Both RealDownloaader and ProxyDownloader implement this interface
 */

export default interface IVideoDownloader {
    getVideo(url: string): void;
}