export class Tab {

  public id: number;
  public humAir: string;
  public humSoil: string;
  public imagePath: string;
  public temp: number;
  public title: string;


  constructor(id: number, humAir: string, humSoil: string, imagePath: string, temp: number, title: string) {
    this.id = id;
    this.humAir = humAir;
    this.humSoil = humSoil;
    this.imagePath = imagePath;
    this.temp = temp;
    this.title = title;
  }
}
