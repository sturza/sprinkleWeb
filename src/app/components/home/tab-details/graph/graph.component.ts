import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Graph } from 'app/models/graph.model';
import { DatabaseService } from 'app/services/database.service';

import { DatePipe } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input() modulePromise;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  // lineChart
  public lineChartData: Array<any> = [
    {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Temperature'},
    {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Air humidity'},
    {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Soil humidity'}
  ];

  public lineChartLabels: Array<any> = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6',
    'Label 7', 'Label 8', 'Label 9', 'Label 10', 'Label 11', 'Label 12'];

  public lineChartType = 'line';

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
          graphData.timestamps.push(datePipe.transform(graph.timestamp * 1000, 'jm'));
        });
        console.log(graphData.timestamps);
        this.lineChartData = [
          { data: graphData.temps, label: 'Temperature' },
          { data: graphData.humAirs, label: 'Air Humidity' },
          { data: graphData.humSoils, label: 'Soil Humidity' }
        ];

        this.lineChartLabels = graphData.timestamps;
        this.chart.chart.config.data.labels = this.lineChartLabels;

        console.log(this.lineChartData);
        console.log(this.lineChartLabels);
      },
      (error) => console.log(error)
    );
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
