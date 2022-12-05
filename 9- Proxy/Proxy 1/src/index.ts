import RealVideoDownloader from "./realDownloader.model";
import ProxyVideoDownloader from "./videoDownloaderProxy";

class Main {
    public static main() {
        const demoURL = "https://www.youtube.com/exampleVideoUrl";

        const realVideoDownloader = new RealVideoDownloader();
        realVideoDownloader.getVideo(demoURL);
        realVideoDownloader.getVideo(demoURL);
        realVideoDownloader.getVideo(demoURL);
        realVideoDownloader.getVideo(demoURL); // For instance, client downloaded the same video 4 times. And every time it downloads the video.

        console.log('\n---------------------------------\n');
        const proxyVideoDownloader = new ProxyVideoDownloader();
        proxyVideoDownloader.getVideo(demoURL);
        proxyVideoDownloader.getVideo(demoURL);
        proxyVideoDownloader.getVideo(demoURL);
        proxyVideoDownloader.getVideo(demoURL);

    }
}

Main.main()