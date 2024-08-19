//abstract class
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  //   getSepia method is marked as abstract, which means that any subclass must implement this method.
  abstract getSepia(): void;
  getReelTime(): number {
    //some calculations
    return 8;
  }
}

//we cant create an object of abstract classes
//error
// const si = new TakePhoto("test", "test");

//but we can do
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {}
}

const si2 = new Instagram("test", "test", 1);
si2.getReelTime;
