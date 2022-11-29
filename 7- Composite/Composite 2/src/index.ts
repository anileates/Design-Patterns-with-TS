import File from "./file.model";
import Folder from "./folder.model";

class Main {
    public static main(): void {
        const mainFolder = new Folder("Backups");
        const file1 = new File("MyNotes", "txt", 100);
        mainFolder.addFile(file1);

        const moviesFolder = new Folder("Movies");
        const movie1 = new File("A good movie", "mp4", 800);
        const movie2 = new File("A bad movie", "mp4", 700);

        moviesFolder.addFile(movie1);
        moviesFolder.addFile(movie2);

        const musicFolder = new Folder("Music");
        const song1 = new File("A good song", "mp3", 5);
        const song2 = new File("A bad song", "mp3", 6);

        musicFolder.addFile(song1);
        musicFolder.addFile(song2);

        mainFolder.addFile(moviesFolder);
        mainFolder.addFile(musicFolder);

        console.log(`Main Folder's size is ${mainFolder.getSize()/1024} GB`);
    }
}

Main.main();