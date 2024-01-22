interface LinuxFileSystemElement{
    name:string;
    size:number;
    printSize():void;
}

class LinuxFile implements LinuxFileSystemElement {

    constructor(public name: string, public size: number) {}
    printSize(): void {
        console.log(`The file ${this.name} is of size ${this.size}`)
    }

}

class LinuxDirectory implements LinuxFileSystemElement{

    private children: LinuxFileSystemElement[] = [];
    constructor(public name: string,public size: number=0) {}
    addChild(child:LinuxFileSystemElement):void{
        this.children.push(child)
    }
    getSize(): number {
        return this.children.reduce((acc, child) => acc + child.size, 0);
      }
      printSize(): void {
        console.log(`Directory: ${this.name}`);
        for (const child of this.children) {
          child.printSize();
        }
    }


}


const root = new LinuxDirectory("root");

const musicDir = new LinuxDirectory("music");
root.addChild(musicDir);

const song1 = new LinuxFile("song1.mp3", 1024);
musicDir.addChild(song1);

const song2 = new LinuxFile("song2.mp3", 512);
musicDir.addChild(song2);

const picturesDir = new LinuxDirectory("pictures");
root.addChild(picturesDir);

const picture1 = new LinuxFile("picture1.jpg", 2048);
picturesDir.addChild(picture1);

root.printSize();