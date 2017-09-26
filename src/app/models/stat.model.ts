export class Stat {

  public ID: number;
  public title: string;
  public temp: number;
  public humAir: string;
  public humSoil: string;
  public imagePath: string;

  constructor(stat: any = {}) {
    this.ID = stat.ID;
    this.title = stat.title;
    this.temp = stat.temp;
    this.humAir = stat.humAir;
    this.humSoil = stat.humSoil;
    this.imagePath = stat.imagePath;
  }
}
