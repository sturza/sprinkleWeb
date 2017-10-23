import { Component, Input, OnInit } from '@angular/core';

import { Graph } from 'app/models/graph.model';
import { DatabaseService } from 'app/services/database.service';
import { forEach } from '@angular/router/src/utils/collection';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input() modulePromise;

  // lineChart
  public lineChartData: Array<any> = [
    {data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'Temperature'},
    {data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'Air humidity'},
    {data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'Soil humidity'}
  ];

  //public lineChartLabels: Array<any> = ['07/10/2017', '08/10/2017'];
  public lineChartLabels: Array<any> = [];

  public lineChartType: string = 'line';


  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.modulePromise.subscribe(module => {
        this.getGraph(module.UID);
      }
    );
  }

  getGraph(moduleUID: string) {
    this.databaseService.getGraph(moduleUID).subscribe(
      (graphs: Graph[]) => {
        console.log(graphs);

        const graphData = {
          temps: [],
          humAirs: [],
          humSoils: [],
          timestamps: []
        };

        const datePipe = new DatePipe('en-US');

        graphs.forEach(graph => {
          graphData.temps.push(graph.temp);
          graphData.humAirs.push(graph.humAir);
          graphData.humSoils.push(graph.humSoil);
          graphData.timestamps.push(datePipe.transform(graph.timestamp*1000, 'jm'));
        });
        console.log(graphData.timestamps);
        this.lineChartData = [
          { data: graphData.temps, label: 'Temperature' },
          { data: graphData.humAirs, label: 'Air Humidity' },
          { data: graphData.humSoils, label: 'Soil Humidity' }
        ];

        this.lineChartLabels = graphData.timestamps;

        console.log(this.lineChartData);
        console.log(this.lineChartLabels);
      },
      (error) => console.log(error)
    );
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
