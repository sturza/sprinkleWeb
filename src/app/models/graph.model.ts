export class Graph {

  public temp: number;
  public humAir: number;
  public humSoil: number;
  public timestamp: number;

  constructor(graph: any = {}) {
    this.temp = graph.temp;
    this.humAir = graph.humAir;
    this.humSoil = graph.humSoil;
    this.timestamp = graph.timestamp;
  }
}
