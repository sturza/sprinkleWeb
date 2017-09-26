import { Stat } from './stat.model';

export class Module {

  public ID: number;
  public title: string;
  public temp: number;
  public humAir: number;
  public humSoil: number;
  public stat: Stat;

  constructor(module: any = {}) {
    this.ID = module.ID;
    this.title = module.title;
    this.temp = module.temp;
    this.humAir = module.humAir;
    this.humSoil = module.humSoil;
    this.stat = module.stat ? new Stat(module.stat) : new Stat();
  }
}
