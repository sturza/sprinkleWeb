export class Module {

  public id: number;
  public title: string;
  public temp: number;
  public humAir: string;
  public humSoil: string;

  constructor(id: number, title: string, temp: number, humAir: string, humSoil: string) {
    this.id = id;
    this.title = title;
    this.temp = temp;
    this.humAir = humAir;
    this.humSoil = humSoil;
  }
}
