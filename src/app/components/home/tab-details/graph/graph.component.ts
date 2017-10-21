import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  // lineChart
  public lineChartData: Array<any> = [
    {data: [23, 24, 27, 26, 24, 25, 26], label: 'Temperature'},
    {data: [67, 64, 65, 68, 67, 66, 67], label: 'Air humidity'},
    {data: [78, 56, 32, 83, 53, 28, 86], label: 'Soil humidity'}
  ];
  public lineChartLabels: Array<any> = ['07/10/2017', '08/10/2017', '09/10/2017', '10/10/2017', '11/10/2017', '12/10/2017', '13/10/2017'];
  public lineChartType: string = 'line';

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }

  constructor() { }

  ngOnInit() {
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
