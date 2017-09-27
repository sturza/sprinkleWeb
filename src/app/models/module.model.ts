import { Stat } from './stat.model';

export class Module {

  public UID: string;
  public title: string;
  public temp: number;
  public humAir: number;
  public humSoil: number;
  public stat: Stat;

  constructor(module: any = {}) {
    this.UID = module.UID;
    this.title = module.title;
    this.temp = module.temp;
    this.humAir = module.humAir;
    this.humSoil = module.humSoil;
    this.stat = module.stat ? new Stat(module.stat) : new Stat();
  }
}
