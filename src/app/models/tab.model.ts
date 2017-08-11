export class Tab
{
  public id: number;
  public title: string;
  public image: string;
  public humidity: string;
  public temperature: number;
  public time: number;

  public constructor(id: number,title: string, image: string, humidity: string, temperature: number, time: number )
  {
    this.id= id;
    this.title=title;
    this.image=image;
    this.humidity=humidity;
    this.temperature=temperature;
    this.time=time;
  }
}
